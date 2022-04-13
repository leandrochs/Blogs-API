const Joi = require('joi');

const updateBlogPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
}).messages({
  'any.required': '{{ #label }} is required',
});

const validateUpdateBlogPost = (req, res, next) => {
  const { error } = updateBlogPostSchema.validate(req.body);

  if (error && error.details[0].message === '"categoryIds" is not allowed') {
    console.error(error);
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }

  if (error) {
    console.error(error);
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = { validateUpdateBlogPost };
