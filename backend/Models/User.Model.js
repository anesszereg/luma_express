const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    saveProduct: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    likeProduct: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;