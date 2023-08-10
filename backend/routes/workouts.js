const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({ mssg: 'GET all workouts' })
})

// GET
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a single workout yes get id' })
})

// POST
router.post('/', async (req, res) => {

    const {title, load, reps} = req.body

    console.log("title="+title+",load="+load+",reps="+reps)

    try{
        const workout = await Workout.create({ title: title, load: load, reps: reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    // res.json({ mssg: 'POST a single workout' })
})

// DELETE
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a single workout' })
})

// UPDATE
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a single workout' })
})

module.exports = router