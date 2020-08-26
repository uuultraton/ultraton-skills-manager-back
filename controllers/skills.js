const skillsService = require('../services/SkillsService');

async function postSkills(req, res) {
  const skill = {
    name: req.body.name,
    technologie: req.body.technologie,
    parent: req.body.parent,
  };

  const skillDoc = await skillsService.createSkill(skill);

  res.send(skillDoc);
}

async function getSkills(req, res) {
  const skillDocs = await skillsService.getSkills();

  res.send(skillDocs);
}
async function postCheckedSkills(req, res) {
  const checkedSkills = req.body.skills;

  const skills = checkedSkills.filter((skill) => skill.known === true);

  const skillDocs = await skillsService.getUnlearnedSkills(skills);

  res.send(skillDocs);
}

module.exports = {
  postSkills,
  getSkills,
  postCheckedSkills,
};
