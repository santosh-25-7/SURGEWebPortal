const express = require('express');
const app = express();
const PORT = 8081;


app.get('/', (req, res) => {
  res.send('Server is running!');
});

const admissionRoutes = require('./routes/admissionRoutes');
app.use(express.json());
app.use('/api', admissionRoutes);

const trainingRoutes = require('./routes/trainingRoutes');
app.use('/api/training', trainingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});





