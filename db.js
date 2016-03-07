let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let Classroom = new Schema({
  name : String,
  description : String
})

mongoose.model('Classroom', Classroom)

mongoose.connect('mongodb://localhost/Savnac')
