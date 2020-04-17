const mongoose = require("mongoose");
var db = require("../models");

module.exports = function(app) {
    
    app.get("/api/workouts", function (req, res) {
    db.Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});

app.post("/api/workouts", function (req, res) {
    db.Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
        .then(data => res.json(data))
        .catch(err => {
            console.log("err", err)
            res.json(err)
        })
});
  app.get("/api/workouts/range", function(req, res) {

    db.Workout.find({}).sort({ "day": -1 }).limit(7).then(data => {
        res.json(data);})
    // .then(workout => {
    //         console.log(workout)
    //     res.json(workout);
    // })
    .catch(err => {
        res.json(err);
    });
    });
};