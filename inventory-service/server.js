// inventory-service/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock Database
let inventory = [
    { id: 1, name: 'Steel Sheets', category: 'Raw Material', quantity: 120, threshold: 20 },
    { id: 2, name: 'Motor Units', category: 'Component', quantity: 5, threshold: 10 },
    { id: 3, name: 'Assembled Widget A', category: 'Finished Good', quantity: 45, threshold: 10 },
    { id: 4, name: 'Plastic Pellets', category: 'Raw Material', quantity: 500, threshold: 100 }
];

// Helper to generate next ID properly
const getNextId = () => inventory.length === 0 ? 1 : Math.max(...inventory.map(i => i.id)) + 1;

// GET All Items
app.get('/items', (req, res) => res.json(inventory));

// POST - Add New Item
app.post('/items', (req, res) => {
    const newItem = {
        id: getNextId(),
        name: req.body.name,
        category: req.body.category || "Uncategorized",
        quantity: parseInt(req.body.quantity),
        threshold: parseInt(req.body.threshold)
    };
    inventory.push(newItem);
    res.status(201).json(newItem);
});

// PUT - Update Item
app.put('/items/:id', (req, res) => {
    const item = inventory.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.name = req.body.name ?? item.name;
    item.category = req.body.category ?? item.category;
    item.quantity = req.body.quantity !== undefined ? parseInt(req.body.quantity) : item.quantity;
    item.threshold = req.body.threshold !== undefined ? parseInt(req.body.threshold) : item.threshold;

    res.json(item);
});

// DELETE Item
app.delete('/items/:id', (req, res) => {
    inventory = inventory.filter(i => i.id !== parseInt(req.params.id));
    res.json({ message: "Item deleted successfully" });
});

app.listen(PORT, () => console.log(`Inventory API running on http://localhost:${PORT}`));