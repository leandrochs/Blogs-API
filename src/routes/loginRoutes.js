const express = require('express');

const { validateLogin } = require('../middlewares/validateLogin');
const { login } = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, login);

module.exports = loginRouter;
