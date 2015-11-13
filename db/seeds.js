var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/students';
mongoose.connect(databaseUrl);

var Student = require('../models/student');

var students = [
  {
    firstName: "Alastair",
    lastName: "Knowles",
    age: "30",
    year: "WDI-15",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "https://drive.google.com/drive/u/0/folders/0B4SAri4crq9_cDhBeERhTDhibGc"
  }
]

function saveToDb(err, student){
  if(err) console.log(err)
  console.log("Student saved " + student)
}

students.forEach(function(student, index){
  var newStudent = new Student(student);
  newStudent.save(saveToDb);
});