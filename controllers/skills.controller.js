const SkillsService = require('../services/skills.service');

const { STATUSES } = require('../constants');

const { successResponse } = require('../utils');

async function postSkill(req, res) {
  const skill = {
    name: req.body.name,
    technologie: req.body.technologie,
    parent: req.body.parent,
  };

  const skillDoc = await SkillsService.createSkill(skill);

  return successResponse(res, STATUSES.RESPONSE.SUCCESS.DEFAULT, skillDoc);
}

async function postCheckedSkills(req, res) {
  const checkedSkills = req.body.skills;

  const skills = checkedSkills.filter((skill) => skill.known === true);

  const skillDocs = await SkillsService.getUnlearnedSkills(skills);

  return successResponse(res, STATUSES.RESPONSE.SUCCESS.DEFAULT, skillDocs);
}

async function startGetAllSkills(req, res) {
  const skillDocs = await SkillsService.getAllSkills();

  return successResponse(res, STATUSES.RESPONSE.SUCCESS.DEFAULT, skillDocs);
}

async function startGetAllDirections(req, res) {
  const skillDocs = await SkillsService.getAllDirections();

  return successResponse(res, STATUSES.RESPONSE.SUCCESS.DEFAULT, skillDocs);
}

async function startGetSkillsByDirection(req, res) {
  const { direction } = req.params;

  const skillDocs = await SkillsService.getSkillsByDirection(direction);

  return successResponse(res, STATUSES.RESPONSE.SUCCESS.DEFAULT, skillDocs);
}

module.exports = {
  postSkill,
  postCheckedSkills,
  startGetAllSkills,
  startGetAllDirections,
  startGetSkillsByDirection,
};
