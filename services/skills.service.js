const SkillModel = require('../models/Skill.model');

const { LOGS } = require('../constants');
const { directions } = require('../data');

const errorHandler = require('errorhandler');

class SkillsService {
  async createSkill(skill) {
    const skillDoc = await SkillModel.createSkill(skill);

    return skillDoc;
  }

  async getAllDirections() {
    try {
      if (!directions) {
        errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
        return;
      }

      return directions;
    } catch (error) {
      errorHandler(error.message);
      return;
    }
  }

  async getAllSkills() {
    try {
      const skillDocs = await SkillModel.getAllSkills();

      if (!skillDocs) {
        errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
        return;
      }

      return skillDocs;
    } catch (error) {
      errorHandler(error.message);
      return;
    }
  }

  async getUnlearnedSkills(skills) {
    try {
      const skillDocs = await SkillModel.getUnlearnedSkills(skills);

      return skillDocs;
    } catch (error) {
      errorHandler(error.message);
      return;
    }
  }

  async getSkillsByDirection(direction) {
    try {
      const skillDocs = await SkillModel.getSkillsByDirection(direction);

      if (!skillDocs) {
        errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
        return;
      }

      return skillDocs;
    } catch (error) {
      errorHandler(error.message);
      return;
    }
  }

  // async getSkillsByTechnologie(technologie) {
  //   try {
  //     const skills = await Skill.find({
  //       technologie,
  //     });

  //     if (!skills) {
  //       errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
  //       return;
  //     }

  //     return skills;
  //   } catch (error) {
  //     errorHandler(error.message);
  //     return;
  //   }
  // }

  // async getSkillByName(name) {
  //   try {
  //     const skills = await Skill.find({
  //       name,
  //     });

  //     if (!skills) {
  //       errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
  //       return;
  //     }

  //     return skills;
  //   } catch (error) {
  //     errorHandler(error.message);
  //     return;
  //   }
  // }
}

module.exports = new SkillsService();
