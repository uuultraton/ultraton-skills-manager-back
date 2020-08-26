const express = require('express'),
  errorhandler = require('errorhandler'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  config = require('config'),
  log4js = require('log4js');

const skillsRouter = require('./routes/skills.routes');

const { connectDB } = require('./utils');

const { PORT } = config.get('SERVER');

const isProduction = process.env.PRODUCTION || config.get('isProduction');

const dbConnection = connectDB();
const logger = log4js.getLogger();

logger.level = config.get('LOGGER_LVL');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

if (!isProduction) {
  app.use(errorhandler());
}

if (!dbConnection) {
  //   return;
}

if (!isProduction) {
  mongoose.set('debug', true);
}

app.use('/api/skills/', skillsRouter);

// start server
app.listen(process.env.PORT || PORT, () => {
  console.log('Listening on port ' + PORT);
});
