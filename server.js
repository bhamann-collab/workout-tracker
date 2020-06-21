const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const { stringify } = require('querystring')
const app = express()

const PORT = process.env.PORT || 5001

//Middleware
app.use('/', express.static(path.join(__dirname, 'public')))
app.use(express.json())

// Mongoose --------
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost:27017/workout', {
    useNewUrlParser: true, useUnifiedTopology: true
})
mongoose.Promise = global.Promise

//Schema
let Schema = mongoose.Schema

let ExerciseSchema = new Schema({
    type: String,
    name: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number
})

let Exercise = mongoose.model('exercise', ExerciseSchema)
//Schema
// Mongoose --------

//HTML Routes --------------------------
app.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname })
})

app.get('/exercise', (req, res) => {
    res.sendFile('/public/exercise.html', { root: __dirname })
})
//HTML Routes --------------------------

//API Routes --------------------------
app.post('/api/workouts', (req, res) => {
    console.log("test")
})

app.put('/api/workouts/:params', (req, res) => {
    console.log(req.body)
    
    let exercise = new Exercise(req.body)
    exercise.save()

    //res.redirect()
})
//API Routes --------------------------

app.listen(PORT, () => console.log(`Example app listening at http:localhost:${PORT}`))