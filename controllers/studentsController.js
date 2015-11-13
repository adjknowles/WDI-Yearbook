var Student = require('../models/student');

function studentsIndex(req, res){
  Student.find({}, function(err, students){
    if (err) return res.render('error', { message: "Something went wrong. You are now expelled! " + err });
    res.render('students/index', { students: students });
  });
}

function studentsShow(req, res){
  Student.findById({ _id: req.params.id }, function(err, student){
    if (err) return res.render('error', { message: "Something went wrong. You are now expelled! " + err });
    res.render('students/show', { student: student });
  });
}

function studentsCreate(req, res){
  var student_params = req.body.student
  var student = new Student(student_params)
  student.save(function(err){
    if (err) return res.render('error', { message: "Something went wrong. You are now expelled! " + err });
    return res.redirect('/students');
  })
}

function studentsNew(req, res){
  res.render('students/new')
}

function studentsEdit(req, res){
  Student.findById({ _id: req.params.id }, function(err, student){
    if (err) return res.render('error', { message: "Something went wrong. You are now expelled! " + err });
    res.render('students/edit', { student: student });
  });
}

function studentsUpdate(req, res){
  var id = req.params.id;
  var studentParams = req.body.student;

  Student.findByIdAndUpdate({ _id: id }, studentParams, function(err, student) {
    if (err) return res.render("error", { message: "Something went wrong. You are now expelled! " + err });
    res.redirect('/students');
  })
}

function studentsDelete(req, res){
  var id = req.params.id;
  Student.remove({_id: id}, function(err){
    if (err) return res.render("error", { message: "Something went wrong. You are now expelled! " + err });
    res.redirect('/students');
  })
}

module.exports = {
  studentsIndex: studentsIndex,
  studentsCreate: studentsCreate,
  studentsShow: studentsShow,
  studentsUpdate: studentsUpdate,
  studentsDelete: studentsDelete,
  studentsNew: studentsNew,
  studentsEdit: studentsEdit
}