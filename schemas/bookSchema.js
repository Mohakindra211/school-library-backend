const Joi = require("joi");

module.exports = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  description: Joi.string().required(),
  quantity: Joi.number().integer().min(0).required(),
});
