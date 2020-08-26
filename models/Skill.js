const mongoose = require('mongoose');

const { Schema } = mongoose;

const skillSchema = new Schema({
  name: { type: String, unique: true, required: true },
  technologie: { type: String, required: true },
  parent: String,
});

class SkillClass {
  static async createSkill(skill) {
    const createdDoc = await this.create({
      name: skill.name,
      technologie: skill.technologie,
      parent: skill.parent,
    });

    return createdDoc;
  }

  static async getSkills() {
    const skillDocs = await this.find({});

    return skillDocs;
  }

  static async getUnlearnedSkills(skills) {
    const learnedSkils = [];

    skills.forEach((skill) => {
      learnedSkils.push(skill.name);
    });

    const skillDocs = await this.find({ name: { $nin: learnedSkils } });

    return skillDocs;
  }
}

skillSchema.loadClass(SkillClass);

module.exports = mongoose.model('Skills', skillSchema);
