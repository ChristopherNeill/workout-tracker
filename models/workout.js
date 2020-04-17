var mongoose = require("mongoose");
var Schema = mongoose.Schema;

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

var Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
  

