const express = require('express');
const router = express.Router();
const Exercise = require('../models/ExerciseSchema');

//API Routes --------------------------
router.post('/api/workouts', (req, res) => {
    console.log("test")
})

router.put('/api/workouts/:params', (req, res) => {
    let start = new Date();
    start.setHours(0,0,0,0)
    let end = new Date();
    end.setHours(23,59,59,999);
    console.log(req.body)
    Exercise.findOne({ day: {$gte: start}}).then(function(docs) {
        //Pushing new exercise to array
        docs.exercises.push(req.body)
        console.log(docs.exercises)

        docs.save(function (err) {
            if(err) {
                console.log("ERROR!");
            }
        })

        res.send(docs.exercises);
    })

    // let exercise = new Exercise(req.body)
    // exercise.save()

    //res.redirect()
})

router.get('/api/workouts', ({ body }, res) => {
    Exercise.find()
    .then(dbTransaction => {
        console.log(dbTransaction)
        res.json(dbTransaction);
    })
    .catch(err => {
        res.status(400).json(err)
    })
}) 

module.exports = router;
