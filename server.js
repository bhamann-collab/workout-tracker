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

//Schema
// Mongoose --------

//HTML Routes --------------------------
app.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname })
})

app.get('/exercise', (req, res) => {
    res.sendFile('/public/exercise.html', { root: __dirname })
})

//Using routes
app.use(require("./routes/route"))

app.listen(PORT, () => console.log(`Example app listening at http:localhost:${PORT}`))