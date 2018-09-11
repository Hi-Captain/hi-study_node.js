const getData = require('../api/1.0/courses.json')
let serverDB = getData.courses

exports.courses = (ctx) => {
  ctx.body = serverDB
}

exports.course = (ctx) => {
  const courseId = ctx.params.id
  const getCourse = serverDB.filter(function(course){return course.id == courseId})[0]
  if(getCourse){
    ctx.body = getCourse
  } else {
    return ctx.throw(500)
  }
}

exports.new = (ctx) => {
  const course = {
    "id" : serverDB[serverDB.length-1].id + 1,
    ...ctx.request.body
  }
  serverDB.push(course)

  ctx.body = serverDB
}

exports.edit = (ctx) => {
  const editData = ctx.request.body
  const courseId = ctx.params.id
  const getCourse = serverDB.filter(function(course){return course.id == courseId})[0]

  serverDB.splice(serverDB.indexOf(getCourse), 1, editData)

  ctx.body = serverDB
}

exports.delete = (ctx) => {
  const courseId = ctx.params.id
  const blockId = [1, 4, 5]
  const getCourse = serverDB.filter(function(course){return course.id == courseId})[0]
  if(blockId.indexOf(courseId) > -1 ){
    serverDB.splice(serverDB.indexOf(getCourse), 1)
    ctx.body = serverDB
  } else {
    return ctx.throw(500)
  }
}