const express = require("express");
const router = express.Router();

const Student = require("../models/student");

router.delete("/:studentId", (req, res, next) => {
  const id = req.params.studentId;
  Student.remove({ _id: id })
    .exec()
    .then(data => {
      res.status(200).json(data); //a promise is an object
      //that represent the failure or
      //completion of an asychronous operation
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
