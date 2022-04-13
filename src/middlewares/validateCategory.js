const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().required(),
}).messages({
  'any.required': '{{ #label }} is required',
});

const validateCategory = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);

  if (error) {
    console.error(error);
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = { validateCategory };
