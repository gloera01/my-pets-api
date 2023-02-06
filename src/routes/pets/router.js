import { Router } from 'express';
import petsController from './controller';

const petsRouter = Router({ mergeParams: true })
  .get('/', petsController.get)
  .get('/:petId', petsController.getById);

export default petsRouter;
