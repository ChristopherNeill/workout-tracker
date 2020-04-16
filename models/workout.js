var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// var workoutSchema = new Schema({
//   day: { type: Date },
//   exercises: [{
//     exerciseType: String,
//     name: String,
//     duration: Number,
//     weight: Number,
//     reps: Number,
//     sets: Number,
//     distance: Number
//   }]
// });
const workoutSchema = new Schema({
  day: Date,
  exercises: [
    {
    type: {
      type: String
    },
    name: {
      type: String
    },
    duration: {
      type: Number
    },
    weight: {
      type: Number
    },
    reps: {
      type: Number
    },
    sets: {
      type: Number
    },
    distance: {
      type: Number
    },
  }]
});
var Workout = mongoose.model("RestWorkout", workoutSchema);

module.exports = Workout;
  

