const mongoose = require('mongoose');

const { Schema } = mongoose;

const skillSchema = new Schema({
  parent: String,
  technologie: { type: String, required: true },
  name: { type: String, unique: true, required: true },
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

  static async getAllSkills() {
    const skillDocs = await this.find({});

    return skillDocs;
  }

  static async getUnlearnedSkills(skills) {
    const learnedSkills = [];

    skills.forEach((skill) => {
      learnedSkills.push(skill.name);
    });

    const skillDocs = await this.find({ name: { $nin: learnedSkils } });

    return skillDocs;
  }

  static async getSkillsByDirection(direction) {
    try {
      const skillDocs = await this.find({
        parent: direction,
      });

      if (!skillDocs) {
        errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
        return;
      }

      return skillDocs;
    } catch (error) {
      return errorHandler(error.message);
    }
  }
}

skillSchema.loadClass(SkillClass);

module.exports = mongoose.model('Skills', skillSchema);
