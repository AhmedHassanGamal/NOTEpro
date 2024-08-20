const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/userRoute');
const noteRoutes = require('./routes/noteRoute');
const dbConnection = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

dbConnection();

app.use(cors());
app.use(express.json());

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/users', userRoutes);
app.use('/notes', noteRoutes);

// Serve the index.html file for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
