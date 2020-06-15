const express = require("express");
const app = express();
const morgan = require("morgan"); //logs requests and continues a snormal
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const studentsRoutes = require("./api/routes/Addstudents");
const deleteRoutes=require("./api/routes/delStudents");
const updateRoutes=require("./api/routes/updateStudents");
const viewRoutes=require("./api/routes/viewStudent");




mongoose.connect(
  "mongodb+srv://kamoSmesh:" +
    process.env.MONGO_ATLAS_PW +
    "@school-admin-cluster-at9qr.mongodb.net/<school-admin-cluster>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("database connection established");
    }
  }
);

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //extracts json file types and makes them easy for us tom read

app.use((req, res, next) => {
  //gives access to all origins cors
  res.header("Access-Control-Allow-Orign", "*");
  res.header("Acces-Control-Allow-Headers", "*");

  if (req.method == "OPTIONS") {
    Response.header("Access-Control-Allow-Methods", "POST,PATCH,DELETE,GET");
    return Response.status(200).json({});
  }
  next();
});

app.use("/Addstudents", studentsRoutes);
app.use("/delStudents",deleteRoutes);
app.use("/updateStudents",updateRoutes);
app.use("/viewStudents",viewRoutes)

app.use((req, res, next) => {
  const error = new Error("PATH NOT FOUND");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
