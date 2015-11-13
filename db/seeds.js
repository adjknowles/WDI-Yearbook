var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/students';
mongoose.connect(databaseUrl);

var Student = require('../models/student');

var students = [
  {
    firstName: "Alastair",
    lastName: "Knowles",
    age: "30",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/alastair.jpg"
  },
  {
    firstName: "Alex",
    lastName: "Bringazen",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/alex.jpg"
  },
  {
    firstName: "Barnaby",
    lastName: "Goff",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/barney.jpg"
  },
  {
    firstName: "Ben",
    lastName: "Layer",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/ben.jpg"
  },
  {
    firstName: "Calum",
    lastName: "Campbell",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/calum.jpg"
  },
  {
    firstName: "Gui",
    lastName: "Vial-Pailler",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/gui.jpg"
  },
  {
    firstName: "Guus",
    lastName: "Van Ooijen",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/guus.jpg"
  },
  {
    firstName: "Jake",
    lastName: "Fleming",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/jake.jpg"
  },
  {
    firstName: "Kwakes",
    lastName: "Prempeh",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/kwakes.jpg"
  },
  {
    firstName: "Marika",
    lastName: "Devan",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/marika.jpg"
  },
  {
    firstName: "Marty",
    lastName: "Gormley",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/marty.jpg"
  },
  {
    firstName: "Ollie",
    lastName: "Holden",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/ollie.jpg"
  },
  {
    firstName: "Pritpal",
    lastName: "Singh",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/pritpal.jpg"
  },
  {
    firstName: "Rob",
    lastName: "Wilson",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/rob.jpg"
  },
  {
    firstName: "Sareh",
    lastName: "Heidari",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/sarah.jpg"
  },
  {
    firstName: "Sed",
    lastName: "Said",
    age: "21",
    year: "WDI-16",
    quote: "Hello Campers",
    info: "https://github.com/adjknowles",
    photo: "./photos/sed.jpg"
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