let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// student module
let studentSchema = require("../models/student");

// create student
router.route("/create-student").post((req, res, next) => {
  studentSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
