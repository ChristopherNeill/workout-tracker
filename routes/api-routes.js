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
            console.log(workout)
        res.json(workout);
    })
    .catch(err => {
        res.json(err);
    });
    });

// app.post("/api/workout", ({ body }, res) => {
//     console.log("YOU HIT THE POST")
//     console.log(body)
//   db.Resistance.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

//   app.put("/api/images/:id", function(req, res) {
//     db.Image.updateOne({ _id: req.params.id }, { rating: req.body.rating }).then(function(dbImage) {
//       res.json(dbImage);
//     });
//   });
};



// const Workout = require("../models/workout.js");

// router.post("/api/workout", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });


//module.exports = router;