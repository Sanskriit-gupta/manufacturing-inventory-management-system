// analytics-service/server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3001;

app.use(cors());

// Fetch inventory from Inventory Service
const getInventory = async () => {
    const response = await axios.get('http://localhost:3000/items');
    return response.data;
};

// SUMMARY
app.get('/summary', async (req, res) => {
    const items = await getInventory();
    const totalItems = items.length;
    const rawMaterials = items.filter(i => i.category === 'Raw Material').length;
    const finishedGoods = items.filter(i => i.category === 'Finished Good').length;
    const totalStock = items.reduce((sum, item) => sum + item.quantity, 0);

    res.json({ totalItems, rawMaterials, finishedGoods, totalStock });
});

// ALERTS
app.get('/alerts', async (req, res) => {
    const items = await getInventory();
    const alerts = items.filter(i => i.quantity < i.threshold)
        .map(i => ({
            ...i,
            severity: i.quantity < i.threshold / 2 ? "CRITICAL" : "WARNING"
        }));

    res.json(alerts);
});

app.listen(PORT, () => console.log(`Analytics Service running on http://localhost:${PORT}`));