const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const Skill = model(
  'Skill',
  new Schema({
    parent: String,
    technologie: String,
    name: { type: String, unique: true, required: true },
  }),
);

module.exports = Skill;
