var db = require("./models"); //.Students;
const data = require("./seeds.json");
//var student_id = "87322515;
const faker = require("faker");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
var express = require("express");
var app = express();


//updateStudentStatus(student_id);
//updateParentStatus(par_gvt_id);
medicalStatus();

//uncheckedStudentStatus();
//uncheckedParentStatus();
//insertStudentData();
//match();


////////////////////////////////////////CREATE STUDENT INTO DATABASE
function insertStudentData () {
 

 

  for(var i = 0; i <data.length; i ++){
    db.Students.create({
      student_id:data[i].student_id,
      student_name: data[i].student_name,
      student_photo:faker.image.avatar(),
      grade_level: data[i].grade_level,
      par_name:data[i].par_name,
      par_addr:data[i].par_addr,
      par_csz: data[i].par_csz,
      par_gvt_id:data[i].par_gvt_id,
      student_status: data[i].student_status,
      parent_status:data[i].parent_status,
      united_status :data[i].united_status
    })
    .then(function(){
      console.log("Yupeee!!");
    })
    .catch(function(err){
      console.log("Errors: ", err);
      
    });
  }
}



app.get("/", (req, res) => {
  res.json({
    username: "accimeesterlin"
  });
});




///////////////////////////////////////////////////////Read status of MEDICAL

function medicalStatus() {
  db.Students.findAll({
    where: {
      student_status: "MEDICAL"
    },
    raw: true
  }).then(function (studentDbResults) {
    console.log("MEDIJO");
    // console.log("Student with Medical status: " + studentDbResultse.length + "\n");
    // for (var i = 0; i < studentDbResults.length; i++) {
    //   console.log(studentDbResults[i].student_name + " Student ID: " + studentDbResults[i].student_id + "\n");
    // }
  
 // })
    // .catch(function (err)  {
    //   console.log("Student not found: ");

     });
};


/////////////////////////////////////////////////////////Read status of UNCHECKED student

function uncheckedStudentStatus(currentStatus) {


  db.Students.findAll({
    where: {
      student_status: currentStatus
    },
    raw: true
  }).then(function (studentDbResults) {
    console.log("Students that are not checked in: " +studentDbResults.length+  "\n");
    
    for (var i = 0; i < studentDbResults.length; i++) {
      console.log(studentDbResults[i].student_name + " Student ID: " + studentDbResults[i].student_id + "\n");
      
    }

  });
}
/////////////////////////////////////////////////READ STATUS OF UNCHECKED PARENT STATUS
function uncheckedParentStatus() {


  db.Students.findAll({
    where: {
      parent_status: "NOT CHECKED"
    },
    raw: true
  }).then(function (studentDbResults) {
    console.log("Parent that are not checked in: " +studentDbResults.length+  "\n");
    
    for (var i = 0; i < studentDbResults.length; i++) {
      console.log("Parent: " + studentDbResults[i].par_name + " ID: " + studentDbResults[i].par_gvt_id + "\n");
      
    }

  });
}
////////////////////////////READ STATUS OF BOTH PARENT AND STUDENT STATUS OF CHECKED

function match() {


  db.Students.findAll({
    where: {
      parent_status: "CHECKED",
      student_status:"CHECKED"
    },
    raw: true
  }).then(function (studentDbResults) {
       console.log("There are " + studentDbResults.length + " confirmed matches:\n");
    for (var i = 0; i < studentDbResults.length; i++) {
      console.log("Student: " + studentDbResults[i].student_name + " ID: " + studentDbResults[i].student_id + "\n"
                  +"Parent: " + studentDbResults[i].par_name+ " ID: " + studentDbResults[i].par_gvt_id+ "\n" );
    }

  });
}


/////////////////////////////////////////////////////UPDATE Student status to CHECKED
function updateStudentStatus(student_id) {
  db.Students.update({
    student_status: "CHECKED",
  }, {
      //student name dynamic variable goes here
      where: {
        student_id: student_id
      },
      raw: true
    }).then(function (studentDbResults) {
      // console.log(name + " has been checked in");
      console.log(Array.isArray(studentDbResults));
      console.log("results: " + studentDbResults);

      if (studentDbResults.length > 1) {
        // TODO
      } else {
        console.log("Student not found: ");

      }
      console.log(Array.isArray(studentDbResults));
      return studentDbResults;
    })
    .catch((err) => {
      console.log("Student not found: ");

    });
}
////////////////////////////////////////////////////UPDATE PARENT STATUS TO CHECKED
function updateParentStatus(par_gvt_id) {
  db.Students.update({
    student_status: "CHECKED",
  }, {
      //student name dynamic variable goes here
      where: {
        par_gvt_id: par_gvt_id
      },
      raw: true
    }).then(function (studentDbResults) {
      // console.log(name + " has been checked in");
      console.log(Array.isArray(studentDbResults));
      console.log("results: " + studentDbResults);

      if (studentDbResults.length > 1) {
        // TODO
      } else {
        console.log("Student not found: ");

      }
      console.log(Array.isArray(studentDbResults));
      return studentDbResults;
    })
    .catch((err) => {
      console.log("Student not found: ");

    });
}

//drop database if exists if argument = {force:true}
db.sequelize.sync({}).then(function () {
  console.log("database synched please insert seeds")
})










app.listen(8000, () => {
  console.log("Server is starting 9000");

});