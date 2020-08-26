const skillsService = require('../services/SkillsService');

async function postSkills(req, res) {
  const skill = {
    name: req.body.name,
    posLeft: req.body.posLeft,
  };

  const skillDoc = await skillsService.createSkill(skill);

  res.send(skillDoc);
}

async function getSkills(req, res) {
  const skillDocs = await skillsService.getSkills();

  res.send(skillDocs);
}

module.exports = {
  postSkills,
  getSkills,
};
