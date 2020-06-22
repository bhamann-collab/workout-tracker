const express = require('express');
const router = express.Router();
const Exercise = require('../models/ExerciseSchema');

//API Routes --------------------------
router.post('/api/workouts', (req, res) => {
    console.log("test")
})

router.put('/api/workouts/:params', (req, res) => {
    console.log(req.body)
    
    let exercise = new Exercise(req.body)
    exercise.save()

    //res.redirect()
})

module.exports = router;
