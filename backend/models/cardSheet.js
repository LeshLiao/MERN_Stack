const mongoose = require("mongoose")

const Schema = mongoose.Schema

const cardSheetSchema = new Schema ({
    card_id: {
        type: String,
        required: true
    },
    card_data: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('CardSheet', cardSheetSchema)