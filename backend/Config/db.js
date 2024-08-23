const mongoose = require('mongoose');


const connectDb = () => {

    try {
        mongoose.connect('mongodb://localhost:27017/E-commerce', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    }
    catch (err) {
        console.log('Error connecting to database');
    }




}


module.exports = connectDb;