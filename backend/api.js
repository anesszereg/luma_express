const express = require('express');
const connectDb = require('./Config/db');
const api = express();








api.listen(3000, () =>{
    console.log('Server started on port 3000');
    connectDb();
});