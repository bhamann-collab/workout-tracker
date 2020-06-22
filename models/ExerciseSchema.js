const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/workout', {
    useNewUrlParser: true, useUnifiedTopology: true
})
mongoose.Promise = global.Promise

//Schema

let ExerciseSchema = new Schema({
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number
})

const Exercise = mongoose.model('exercise', ExerciseSchema)

module.exports = Exercise;