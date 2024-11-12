const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/admission', (req, res) => {
  const { name, email, phone, paymentStatus } = req.body;
  const query = 'INSERT INTO admissions (name, email, phone, payment_status) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, phone, paymentStatus], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Admission successfully registered' });
  });
});

module.exports = router;

