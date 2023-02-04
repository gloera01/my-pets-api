require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const config = require('./config');

// setup configuration
const app = express();
mongoose.connect(config.dbConnectionString);

// setup middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes);

app.listen(config.port, () => {
  console.log(`Running app on port: ${config.port}`);
});