const Joi = require('joi');

const createUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  password: Joi.string().length(6).required(),
  email: Joi.string().email().required(),
  image: Joi.string(),
}).messages({
  'string.length': '{{ #label }} length must be {{#limit }} characters long',
  'string.min': '{{ #label }} length must be at least {{#limit }} characters long',
  'any.required': '{{ #label }} is required',
  'string.email': '{{ #label }} must be a valid email',
});

const validateUser = (req, res, next) => {
  const { error } = createUserSchema.validate(req.body);

  console.error(error);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};

module.exports = { validateUser };
