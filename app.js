const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

// Routes
const usersRoute = require('./routes/Users');
const departmentsRoute = require('./routes/Departments');

// DB Connection

mongoose.connect(
    process.env.BD_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).catch(error => console.log(error));

// Middlewares
const app = express();
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
app.use(cors());
app.use(express.json());
app.use('/api/Users', usersRoute);
app.use('/api/Departments', departmentsRoute);
