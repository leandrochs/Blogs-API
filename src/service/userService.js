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

const getAll = async () => {
  try {
    const user = await User.findAll();
    return user;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const getById = async (id) => {
  try {
    const user = await User.findOne({
      attributes: ['id', 'displayName', 'email', 'image'],
      where: { id },
    });
    return user;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
