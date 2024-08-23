const mongoose = require('mongoose');
const colors = require('../colors');


const connectDb = () => {

    try {
        mongoose.connect('mongodb://localhost:27017/E-commerce', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log(
            `${colors.blink + colors.fg.blue + colors.bg.magenta} Database connected ${colors.reset}`
        );
    }
    catch (err) {

        console.log(
            `
            
            ${colors.blink + colors.fg.red + colors.bg.yellow} Error ${err.message} ${colors.reset}`
        );
    }




}


module.exports = connectDb;