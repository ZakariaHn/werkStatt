const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

// Use middleware
app.use(express.json());
app.use(cors());
dotenv.config();

// Import Routes
const clientsRoute = require('./routes/clients');
const carsRoute = require('./routes/cars');

// Connect to DB
const envconfig = require('./config/config');
mongoose
    .connect(process.env.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false})
    .then(() => console.log('Connected to DB !'))
    .catch(err => console.log(err));

// Set Routes
app.use('/api/clients', clientsRoute);
app.use('/api/cars', carsRoute);

//App port
const port = envconfig.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));