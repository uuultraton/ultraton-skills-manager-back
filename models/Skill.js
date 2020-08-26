const mongoose = require('mongoose');

const { Schema } = mongoose;

const skillSchema = new Schema({
  name: { type: String, unique: true, required: true },
  posLeft: { type: Number, required: true },
});

class SkillClass {
  static async createSkill(skill) {
    const createdDoc = await this.create({
      name: skill.name,
      posLeft: skill.posLeft,
    });

    return createdDoc;
  }

  static async getSkills() {
    const skillDocs = await this.find({});

    return skillDocs;
  }
}

skillSchema.loadClass(SkillClass);

module.exports = mongoose.model('Skills', skillSchema);
