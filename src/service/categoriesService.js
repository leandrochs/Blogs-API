const { Categories } = require('../models');

const create = async ({ name }) => {
  try {
    const created = await Categories.create({ name });
    return created;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getAll = async () => {
  try {
    const categories = await Categories.findAll();
    return categories;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

module.exports = {
  create,
  getAll,
};
