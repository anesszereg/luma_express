const User = require('../Models/User.Model');





//? auth functions


const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const User = require('../Models/User.Model');






module.exports = {


    //register user
    register: async (req, res) => {
        try {
            const { username, image, password, email } = req.body;
            const user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({ username, image, password: hashedPassword, email });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //login user

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }
            res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    },

    logout: async (req, res) => {
        try {
            res.status(200).json({ message: 'Logout successful' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }


}

