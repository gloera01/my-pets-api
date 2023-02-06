import { Router } from 'express';
import 'express-async-errors';
import { basePath } from '../../config.js';

import usersRouter from './users/router';
import petsRouter from './pets/router';

const routes = Router();

// middlewares
// auth
// logger

routes.use(`${basePath}/users`, usersRouter);
routes.use(`${basePath}/users/:id/pets`, petsRouter);

export default routes;
