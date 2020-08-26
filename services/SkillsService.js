const SkillModel = require('../models/Skill');

class SkillsService {
  async createSkill(skill) {
    const skillDoc = await SkillModel.createSkill(skill);

    return skillDoc;
  }

  async getSkills() {
    const skillDocs = await SkillModel.getSkills();

    return skillDocs;
  }
}

module.exports = new SkillsService();
