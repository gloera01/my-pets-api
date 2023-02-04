const { Router } = require('express');
const petsController = require('./controller');

const router = Router({ mergeParams: true })
  .get('/', petsController.get)
  .get('/:petId', petsController.getById);

module.exports = router;