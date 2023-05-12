const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    rating:{
        type: Number,
        required: true,
        min: 1,
        max: 4,
        default: 1
    },
    text: {
        type:String
    }
});

const productSchema = mongoose.Schema(
    {
        title: {
            type:String,
            required: true
        },
        price:{
            type:Number,
            required: true
        },
        image:{
            type:Buffer,
            contentType: String
        },
        reviews: {
            type: [reviewsSchema],
            default: []
        }

    }
);

mongoose.model("Product", productSchema, "products");