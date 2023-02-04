const Router = require('express');
require('express-async-errors');
const { basePath } = require('../../config');

const users = require('./users/router');
const pets = require('./pets/router');

const router = Router();

// middlewares
// auth
// logger

router.use(`${basePath}/users`, users);
router.use(`${basePath}/users/:id/pets`, pets);

module.exports = router;
