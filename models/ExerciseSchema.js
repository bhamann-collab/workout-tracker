const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/workout', {
    useNewUrlParser: true, useUnifiedTopology: true
})
mongoose.Promise = global.Promise

//Schema

let ExerciseSchema = new Schema({
    day: Number,
    exercises: [{
        // type: String,
        // name: String,
        // duration: Number,
        // //weight: Number,
        // //reps: Number,
        // //sets: Number,
        // distance: Number
    }]
})

const Exercise = mongoose.model('exercises', ExerciseSchema, 'exercises')

module.exports = Exercise;