const { User } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  try {
    const created = await User.create({ displayName, email, password, image });

    return created;
  } catch (error) {
    console.error(error);

    if (error.errors[0].message === 'Users.email must be unique') {
      return { error: 409, message: 'User already registered' };
    }

    return error;
  }
};

module.exports = {
  create,
};
