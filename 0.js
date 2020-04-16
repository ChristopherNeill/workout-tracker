console.log("YOUR IN API*******")

const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    // exercises[{
    //   exerciseType: String,
    //   name: String,
    //   duration: Number,
    //   weight: Number,
    //   reps: Number,
    //   sets: Number
    // }]  
   console.log("++++YOUR IN ADD EXERCISE")

    builtArray={
      exercises:[{
        exerciseType:data.type,
        name:data.name,
        weight:data.weight,
        sets:data.sets,
        reps:data.reps,
        duration:data.duration,
        distance:data.distance
        }]}
    
      console.log(builtArray)

    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(builtArray)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
  console.log("in create workout in API")
    // const res = await fetch("/api/workouts", {
    //   method: "POST",
    //   body: JSON.stringify(builtArray),
    //   headers: { "Content-Type": "application/json" }
    // });

    // const json = await res.json();

    // return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
