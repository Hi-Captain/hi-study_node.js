const Router = require('koa-router');

const courses = new Router();
const ctrl = require('./ctrl');

courses.get('/', ctrl.courses)
courses.get('/:id', ctrl.course)
courses.post('/new', ctrl.new)
courses.put('/:id/edit', ctrl.edit)
courses.delete('/:id', ctrl.delete)

module.exports = courses;