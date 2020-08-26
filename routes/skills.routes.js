const express = require('express');

const {
  startGetAllSkills,
  startGetAllDirections,
  startGetSkillsByDirection,
  startGetSkillsByTechnologie,
  startGetSkillsByName,
} = require('../controllers/skills.controller');

// const validation = require('../middlewares/validation');
// const skillsValidator = require('../validators/skills');

const router = express.Router();

// , validation(skillsValidator.skills, 'body')
router.get('/', (req, res) => startGetAllSkills(req, res));

router.get('/directions', (req, res) => startGetAllDirections(req, res));

router.get(
  '/:direction',
  // validation(skillsValidator.skills, 'body'),
  (req, res) => startGetSkillsByDirection(req, res),
);

router.get(
  '/:direction/:technologie',
  // validation(skillsValidator.skills, 'body'),
  (req, res) => startGetSkillsByTechnologie(req, res),
);

router.get(
  '/:direction/:technologie/:name',
  // validation(skillsValidator.skills, 'body'),
  (req, res) => startGetSkillsByName(req, res),
);

module.exports = router;
