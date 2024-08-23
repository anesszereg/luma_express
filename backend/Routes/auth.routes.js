const express = require("express");
const Auth = require("../Controllers/Auth");
const router = express.Router();





// login 
router.post("/login", Auth.login);


// register

router.post("/register", Auth.register);

module.exports = router; // Export the router

