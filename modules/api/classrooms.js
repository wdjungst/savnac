require('../../db.js')
let mongoose = require('mongoose')
let Classroom = mongoose.model('Classroom')

export function listClassrooms(req, res) {
  Classroom.find( function (err, classrooms ) {
    res.send(classrooms)
  })
}

export function getClassroom(req, res) {
  Classroom.findById( req.query.id, function (err, classroom ) {
    res.send(classroom)
  })
}

export function createClassroom(req, res) {
  new Classroom({
    name: req.body.name,
    description: req.body.description
  }).save( function ( err, classroom) {
    res.send({ classroom: classroom })
  })
}

export function updateClassroom(req, res) {
  Classroom.findById( req.body.id, function (err, classroom) {
    classroom.name = req.body.name,
    classroom.description = req.body.description
    classroom.save( function (err, classroom) {
      res.send(classroom)
    })
  })
}

export function destroyClassroom(req, res) {
  Classroom.findById(req.body.id, function (err, classroom) {
    classroom.remove( function () {
      res.sendStatus(200)
    })
  })
}
