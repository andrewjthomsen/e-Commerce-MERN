// const mongoose = require('mongoose');
// const { objectId} = mongoose.Schema
//
// const productSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             trim: true,
//             required: true,
//             maxlength: 32
//         },
//         description: {
//             type: String,
//             required: true,
//             maxlength: 3200
//         },
//         price: {
//             type: Number,
//             trim: true,
//             required: true
//         },
//         category: {
//             type: objectId,
//             ref: 'Category',
//             required: true
//         }
//
//     },
//     { timestamps: true }
// );
//
//
// module.exports = mongoose.model('Product', productSchema);
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
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
            maxlength: 2000
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
        quantity: {
            type: Number
        },
        sold: {
            type: Number,
            default: 0
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        shipping: {
            required: false,
            type: Boolean
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
