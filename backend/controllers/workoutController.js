const { response } = require('express')
// const Workout = require('../models/workoutModel')
const CardSheet = require('../models/cardSheet')
const mongoose = require('mongoose')

// get all cardInfo
const getWorkouts = async (req, res) => {
    const card_sheet = await CardSheet.find({}).sort({createAt: -1})

    res.status(200).json(card_sheet)
}

// get a single cardInfo
const getWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'invalid ID!'})
    }

    const cardInfo = await CardSheet.findById(id)

    if(!cardInfo) {
        return response.status(404).json({error: 'No such cardInfo'})
    }

    res.status(200).json(workout)
}

// create new card
const createWorkout = async(req,res) => {
    const {card_id, card_data} = req.body

    console.log("card_id="+card_id+",card_data="+card_data)

    try{
        const card_sheet = await CardSheet.create({ card_id: card_id, card_data: card_data })
        res.status(200).json(card_sheet)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete a card
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'invalid ID!'})
    }

    const cardInfo = await CardSheet.findOneAndDelete({_id: id})

    if(!cardInfo) {
        return response.status(400).json({error: 'No such cardInfo'})
    }

    res.status(200).json(workout)

}

// update a card
const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'invalid ID!'})
    }

    const cardInfo = await CardSheet.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!cardInfo) {
        return response.status(400).json({error: 'No such cardInfo'})
    }

    res.status(200).json(cardInfo)
}



module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}