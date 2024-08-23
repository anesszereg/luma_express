const express = require('express');
const connectDb = require('./Config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const colors = require('./colors');

const api = express();

api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));


api.use('/api/v1/auth/', require('./Routes/User.routes'));



api.listen(3000, () => {
    console.log(`${colors.reverse + colors.fg.cyan + colors.bg.white } Server started on port 3000${colors.reset}`);
    connectDb();
});
