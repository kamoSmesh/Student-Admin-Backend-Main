const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Student = require("../models/student");


router.post("/", (req, res, next) => {
  const student = new Student({
    //_id: new mongoose.Schema.Types.ObjectId,
    name: req.body.name,
    id: req.body.id,
    email: req.body.email,
    modules:req.body.modules
  });
  student.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).json({
        msg: "student details saved",
        student: result
      });
    }
  });

  // res.status(201).json({
  // msg: "details  were added",
  //student: student,
  // });
});

module.exports = router;
