const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/create-batch', (req, res) => {
  const { batchName, startDate, endDate } = req.body;
  const query = 'INSERT INTO training_batches (batch_name, start_date, end_date) VALUES (?, ?, ?)';
  db.query(query, [batchName, startDate, endDate], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Batch created successfully' });
  });
});

module.exports = router;
