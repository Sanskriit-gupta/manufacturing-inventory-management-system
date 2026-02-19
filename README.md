# Manufacturing Inventory Management System

A full-stack web application to manage inventory in a manufacturing setup, including raw materials, components, and finished goods. Features real-time analytics, low-stock alerts, and recent activity tracking.

---

## 🔹 Features

- View all inventory items with details: name, category, quantity, threshold
- Add, edit, and delete inventory items
- Real-time stock alerts (Warning / Critical)
- Inventory summary with total items, raw materials, finished goods, and stock
- Stock level visualization using bar charts
- Recent activity log for tracking changes

---

## 🔹 Technology Stack

| Layer          | Technology                          |
|----------------|------------------------------------|
| Frontend       | HTML, CSS, Bootstrap, JavaScript, Chart.js |
| Backend        | Node.js, Express.js                 |
| Analytics API  | Node.js, Express.js, Axios          |
| Database       | In-memory JavaScript array (mock DB) |
| Communication  | REST APIs                           |

---

## 🔹 System Architecture

- **Frontend** communicates with **Inventory API** (`http://localhost:3000`) for CRUD operations.
- **Analytics API** (`http://localhost:3001`) fetches inventory data and provides summary & alerts.
- Data flows from **Inventory API → Analytics API → Frontend** for real-time dashboard updates.

---

## 🔹 API Endpoints

### Inventory API (`localhost:3000`)
| Method | Endpoint      | Description                  |
|--------|---------------|------------------------------|
| GET    | /items        | Get all inventory items      |
| POST   | /items        | Add a new inventory item     |
| PUT    | /items/:id    | Update an inventory item     |
| DELETE | /items/:id    | Delete an inventory item     |

### Analytics API (`localhost:3001`)
| Method | Endpoint   | Description                        |
|--------|------------|------------------------------------|
| GET    | /summary   | Get total items, stock, categories |
| GET    | /alerts    | Get low-stock items with severity  |

---

## 🔹 Setup & Installation

1. Clone the repository:

git clone https://github.com/Sanskriit-gupta/manufacturing-inventory-management-system.git
cd manufacturing-inventory-management-system

2. Install dependencies for backend and analytics services:

cd inventory-service
npm install
cd ../analytics-service
npm install
git clone https://github.com/Sanskriit-gupta/manufacturing-inventory-management-system.git
cd manufacturing-inventory-management-system

3.Start the APIs:

# Inventory Service
cd ../inventory-service
node server.js

# Analytics Service
cd ../analytics-service
node service.js

4.Open frontend/index.html in your browser to view the dashboard.
