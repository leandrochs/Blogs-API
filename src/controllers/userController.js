const userService = require('../service/userService');

const create = async (req, res) => {
  try {
    const user = await userService.create(req.body);

    if (user.error) {
      return res.status(user.error).json({ message: user.message });
    }

    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();

    if (users.error) {
      return res.status(users.error).json({ message: users.message });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  create,
  getAll,
};
