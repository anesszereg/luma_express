const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    } ,
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    //array of images 
    images: {
        type: [String],
        required: true
    },
    //array of reviews
    reviews: {
        type: [String],
        required: true
    },
    rating: {   
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    
});

