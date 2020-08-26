const backEnd = require('./back-end.json');
const frontEnd = require('./front-end.json');
const devOps = require('./dev-ops.json');

module.exports = {
  directions: ['Back-end', 'Front-end', 'Dev-ops'],
  skills: [...backEnd, ...frontEnd, ...devOps],
};
