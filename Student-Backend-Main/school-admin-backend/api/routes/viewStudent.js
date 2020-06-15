const express = require("express");
const router = express.Router();

const Student = require("../models/student");

router.get("/:studentId", (req, res, next) => {
  const id = req.params.studentId;
  Student.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/", (req, res, next) => {
  Student.find({})
    .exec()
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
