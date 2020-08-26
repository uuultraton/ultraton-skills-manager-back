const express = require('express');

const skillsController = require('../controllers/skills');
const validation = require('../middlewares/validation');
const skillsValidator = require('../validators/skills');

const router = express.Router();

router.post(
  '/api/skills',
  validation(skillsValidator.skills, 'body'),
  skillsController.postSkills,
);

router.get('/api/skills', skillsController.getSkills);

module.exports = router;
