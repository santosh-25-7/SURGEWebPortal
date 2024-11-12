// index.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql@123',
    database: 'surge_db'
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error("Could not connect to the database:", err);
        process.exit(1);
    } else {
        console.log("Connected to the MySQL database");
    }
});

// Define a test route
app.get('/', (req, res) => {
    res.send("Hello from the backend server!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
