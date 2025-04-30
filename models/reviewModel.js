const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
       
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
        },
        comment: {
            type: String,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        destination: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Destination' 
        },
        hotel: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Hotel' },
        agency: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Agency' }
    }
)

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
