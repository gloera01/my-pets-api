import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './src/routes';
import config from './config.js';

// setup configuration
const app = express();
mongoose.connect(config.dbConnectionString);

// setup middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(config.port, () => {
  console.log(`Running app on port: ${config.port}`);
});
