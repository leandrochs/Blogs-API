const express = require('express');

const { validateLogin } = require('../middlewares/validateLogin');
const UserController = require('../controllers/userController');

const loginRouter = express.Router();

loginRouter
  .post('/', validateLogin, UserController.create);

module.exports = loginRouter;
