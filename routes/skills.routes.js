const express = require('express');

const {
  postSkill,
  postCheckedSkills,
  startGetAllSkills,
  startGetAllDirections,
  startGetSkillsByDirection,
} = require('../controllers/skills.controller');

const validation = require('../middlewares/validation');
const skillsValidator = require('../validators/skills');

const router = express.Router();

router.post('/create', validation(skillsValidator.skills, 'body'), (req, res) =>
  postSkill(req, res),
);

router.post('/result', (req, res) => postCheckedSkills(req, res));

router.get('/all', (req, res) => startGetAllSkills(req, res));

router.get('/directions', (req, res) => startGetAllDirections(req, res));

router.get('/:direction', (req, res) => startGetSkillsByDirection(req, res));

module.exports = router;
