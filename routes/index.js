const coursesRouter = require('./courses.router');

function routerApi(app) {
  app.use('/courses', coursesRouter);
}

module.exports = routerApi;
