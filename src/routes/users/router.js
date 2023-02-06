import { Router } from 'express';
import usersController from './controller';

const usersRouter = Router({ mergeParams: true })
  .post('/', usersController.post)
  .post('/login', usersController.login);

// TODO:
// reset password endpoint
// patch user endpoint

export default usersRouter;
