require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')


// express app
const app = express()
const cors = require("cors")

const corsOptions = {
    origin: ["https://mern-stack-frontend-0uii.onrender.com","http://localhost:3000"]
}

app.use(express.json())
app.use(cors(corsOptions))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connect to db and listening on port::', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


