const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// MongoDB Connection

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log('server is running on port ${PORT}');
});
