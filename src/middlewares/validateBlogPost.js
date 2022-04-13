const Joi = require('joi');

const blogPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
}).messages({
  'any.required': '{{ #label }} is required',
});

const validateBlogPost = (req, res, next) => {
  const { error } = blogPostSchema.validate(req.body);

  if (error) {
    console.error(error);
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = { validateBlogPost };
