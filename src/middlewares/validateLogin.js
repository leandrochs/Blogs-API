const Joi = require('joi');
const { getByEmail } = require('../service/userService');

const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
}).messages({
  'any.required': '{{ #label }} is required',
  'string.length': '{{ #label }} length must be {{#limit }} characters long',
  'string.min': '{{ #label }} length must be at least {{#limit }} characters long',
  'string.email': '{{ #label }} must be a valid email',
});

const validateLogin = async (req, res, next) => {
  const { error } = createUserSchema.validate(req.body);

  if (error) {
    console.error(error);
    return res.status(400).json({ message: error.details[0].message });
  }

  const emailExist = await getByEmail(req.body.email);
  if (!emailExist) return res.status(400).json({ message: 'Invalid fields' });

  console.log('emailExist:', emailExist);
  next();
};

module.exports = { validateLogin };