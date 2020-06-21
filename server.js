const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 5001

//Middleware
app.use('/', express.static(path.join(__dirname, 'public')))

//Routes
app.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname })
})

app.get('/exercise', (req, res) => {
    res.sendFile('/public/exercise.html', { root: __dirname })
})


app.listen(PORT, () => console.log(`Example app listening at http:localhost:${PORT}`))