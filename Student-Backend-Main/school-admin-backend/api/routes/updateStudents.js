const express = require("express");
const router = express.Router();

const Student = require("../models/student");

router.patch("/:studentId", (req, res, next) => {
  const id = req.params.studentId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Student.update(
    { _id: id },
    {
      $set: updateOps
    }
  )
    .exec()
    .then(resu => {
      console.log(resu);
      res.status(200).json(resu);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      }); 
    });
});
//a promise is an object
//that represent the failure or
//completion of an asychronous operation

module.exports = router;
