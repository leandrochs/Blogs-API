const jwt = require('jsonwebtoken');
const Service = require('../service/loginService');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Service.login(email);

  if (!user || password !== user.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = jwt.sign({ id: user.id }, password, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
