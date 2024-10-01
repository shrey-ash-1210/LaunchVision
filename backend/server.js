// backend/server.js
const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Express Backend is working!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

