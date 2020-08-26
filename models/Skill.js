const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const { Schema } = mongoose;

const Skill = new Schema({
  name: {
    type: String,
    required: true,
  },
  posLeft: {
    type: String,
    required: true,
  },
});

const skillValidator = Joi.object({
  name: Joi.string().required,
  posLeft: Joi.string().required(),
});

module.exports = { Skill: mongoose.model('Skill', Skill), skillValidator };
