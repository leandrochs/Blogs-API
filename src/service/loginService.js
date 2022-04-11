const { User } = require('../models');

const login = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = {
  login,
};
