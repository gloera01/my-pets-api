const { Router } = require('express');
const usersController = require('./controller');

const router = Router({ mergeParams: true })
  .post('/', usersController.post)
  .post('/login', usersController.login);

  // TODO:
  // reset password endpoint
  // patch user endpoint

module.exports = router;