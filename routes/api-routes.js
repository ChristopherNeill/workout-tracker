const mongoose = require("mongoose");
var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
//     console.log("++++++++&&&&&&&&")
//     console.log(req.body)
//     console.log("++++++++&&&&&&&&")
//     db.Workout.find({}).then(function(data) {
//         console.log("YOUR IN THE RIGHT AREA")
//         console.log(data)
//       //res.json(dbImages);
//     });

//   })
db.Workout.find({})
.then(workout => {
    res.json(workout);
})
.catch(err => {
    res.json(err);
});
});
    app.put("/api/workouts/:id", function(req, res) {
        console.log("++++++++============")
        console.log(req.body)
        console.log("++++++++============")


        db.Workout.create(req.body).then(function(data) {
            console.log("YOUR IN THE RIGHT AREA")
            console.log(data)
          //res.json(dbImages);
        });
  });


  app.get("/api/workouts/range", function(req, res) {

    db.Workout.find({})
    .then(workout => {
            console.log(workout)
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
    });
};