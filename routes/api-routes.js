const router = require("express").Router();
const Workout = require("../models/userWorkout.js");

router.get("/api/workouts", (req, res) => {
  console.log("api routing");
  Workout.find({})
  .then( dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
})

module.exports = router;
