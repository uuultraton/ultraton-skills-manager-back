const Joi = require('@hapi/joi');

module.exports = {
  skills: Joi.object({
    name: Joi.string().required(),
    technologie: Joi.string().required(),
    parent: Joi.string(),
  }),
};
