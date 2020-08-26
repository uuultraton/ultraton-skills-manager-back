const { Skill } = require('../models');
const { LOGS } = require('../constants');
const { directions, skills } = require('../data');
const errorHandler = require('errorhandler');

class SkillsService {
  async getAllSkills() {
    try {
      // const skills = await Skill.find({});

      if (!skills) {
        errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
        return;
      }

      return skills;
    } catch (error) {
      return errorHandler(error.message);
    }
  }

  async getAllDirections() {
    try {
      // const skills = await Skill.find({});

      if (!directions) {
        errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
        return;
      }

      return directions;
    } catch (error) {
      return errorHandler(error.message);
    }
  }

  async getSkillsByDirection(direction) {
    try {
      // const skills = await Skill.find({
      //   parent: direction,
      // });

      const skills = (() => {
        switch (direction) {
          case 'Back-end':
            return backEnd;

          case 'Front-end':
            return frontEnd;

          case 'Dev-ops':
            return devOps;

          default:
            return errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
        }
      })();

      if (!skills) {
        errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
        return;
      }

      return skills;
    } catch (error) {
      return errorHandler(error.message);
    }
  }

  async getSkillsByTechnologie(technologie) {
    try {
      const skills = await Skill.find({
        technologie,
      });

      if (!skills) {
        errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
        return;
      }

      return skills;
    } catch (error) {
      return errorHandler(error.message);
    }
  }

  async getSkillByName(name) {
    try {
      const skills = await Skill.find({
        name,
      });

      if (!skills) {
        errorHandler(LOGS.ERROR.SKILLS_NOT_FOUND);
        return;
      }

      return skills;
    } catch (error) {
      return errorHandler(error.message);
    }
  }
}

module.exports = new SkillsService();
