const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;

// initialize express
const app = express();

// initialize logger and specify format 'dev'
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// load static assets in public directory
app.use(express.static("public"));

// initialize mongoose connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });