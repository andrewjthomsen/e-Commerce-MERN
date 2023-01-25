const mongoose = require('mongoose');
const { objectId} = mongoose.Schema

const pizzaSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        description: {
            type: String,
            required: true,
            maxlength: 3200
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        }

    },
    { timestamps: true }
);


module.exports = mongoose.model('Pizza', pizzaSchema);