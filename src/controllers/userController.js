const userService = require('../service/userService');

const create = async (req, res) => {
  try {
    const user = await userService.create(req.body);
    if (user.error) {
      return res.status(user.error).json({ message: user.message });
    }

    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: 'User already registered' });
  }
};

module.exports = {
  create,
};
