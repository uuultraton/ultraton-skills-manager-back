const SkillsService = require('../services/skills.service');

const { STATUSES } = require('../constants');

const { successResponse } = require('../utils');

async function startGetAllSkills(req, res) {
  const skillDocs = await SkillsService.getAllSkills();

  // res.json({
  //   skills: skillDocs,
  // });

  return successResponse(res, STATUSES.RESPONSE.SUCCESS.DEFAULT, skillDocs);
}

async function startGetAllDirections(req, res) {
  const skillDocs = await SkillsService.getAllDirections();

  // res.json({
  //   skills: skillDocs,
  // });

  return successResponse(res, STATUSES.RESPONSE.SUCCESS.DEFAULT, skillDocs);
}

async function startGetSkillsByDirection(req, res) {
  const { direction } = req.query;

  const skillDocs = await SkillsService.getSkillsByDirection(direction);

  // res.json({
  //   skills: skillDocs,
  // });

  return successResponse(res, STATUSES.RESPONSE.SUCCESS.DEFAULT, skillDocs);
}

async function startGetSkillsByTechnologie(req, res) {
  const { technologie } = req.query;

  console.log(technologie);

  const skillDocs = await SkillsService.getSkillsByTechnologie(technologie);

  // res.json({
  //   skills: skillDocs,
  // });

  return successResponse(res, STATUSES.RESPONSE.SUCCESS.DEFAULT, skillDocs);
}

async function startGetSkillByName(req, res) {
  const { name } = req.query;

  const skillDocs = await SkillsService.getSkillByName(name);

  // res.json({
  //   skills: skillDocs,
  // });

  return successResponse(res, STATUSES.RESPONSE.SUCCESS.DEFAULT, skillDocs);
}

module.exports = {
  startGetAllSkills,
  startGetAllDirections,
  startGetSkillsByDirection,
  startGetSkillsByTechnologie,
  startGetSkillByName,
};
