const { User } = require('../models');

const create = async ({ displayName, email, password, image }) => {
  try {
    const created = await User.create({ displayName, email, password, image });

    return created;
  } catch (error) {
    console.log(error);
    return { error: 500, message: 'Erro no Servidor' };
  }
};

module.exports = {
  create,
};
