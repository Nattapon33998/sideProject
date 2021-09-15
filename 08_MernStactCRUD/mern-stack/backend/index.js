let express = require("express"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  dbConfig = require("./database/db");

// express route
const studentRouter = require("../backend/routes/student.route");

// connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database successfully connected");
    },
    (error) => {
      console.log("Could not connect to database: " + error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.user(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/student", studentRoute);

// Port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("connect to port " + port);
});

//404 Errors
app.use((req, res, next) => {
  next(createError(404));
});

//Error handle
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
