const Joi = require('@hapi/joi');

module.exports = {
  skills: Joi.object({
    name: Joi.string().required(),
    posLeft: Joi.number().required(),
  }),
};
