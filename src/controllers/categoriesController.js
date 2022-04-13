const categoriesService = require('../service/categoriesService');

const create = async (req, res) => {
  try {
    const categories = await categoriesService.create(req.body);

    if (categories.error) {
      return res.status(categories.error).json({ message: categories.message });
    }

    return res.status(201).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAll = async (req, res) => {
  try {
    const categories = await categoriesService.getAll();

    if (categories.error) {
      return res.status(categories.error).json({ message: categories.message });
    }

    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  create,
  getAll,
};
