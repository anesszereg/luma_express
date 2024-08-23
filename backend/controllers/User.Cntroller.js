

const User = require('../Models/User.Model');

// Controller logic goes here

module.exports = {
    // Controller methods go here
    createUser: async (req, res) => {
        try {
            const { username, image, password, isAdmin ,email } = req.body;
            const newUser = new User({ username, image, password, isAdmin ,email });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { username, image, password, isAdmin , email } = req.body;
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.username = username;
            user.image = image;
            user.password = password;
            user.isAdmin = isAdmin;
            user.email = email;
            await user.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //delete user

    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //user like product 
    LikeProduct: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate('likeProduct');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.likeProduct.push(req.body.productId);
            await user.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //unlike product

    UnlikeProduct: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.likeProduct = user.likeProduct.filter((product) => product.toString() !== req.body.productId);
            await user.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //user save product

    SaveProduct: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.saveProduct.push(req.body.productId);
            await user.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    //      unsave product

    UnsaveProduct: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            user.saveProduct = user.saveProduct.filter((product) => product.toString() !== req.body.productId);

            await user.save();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    ,



    // get save product
    getSaveProduct: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate('saveProduct');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user.saveProduct);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // get like product

    getLikeProduct: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate('likeProduct');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user.likeProduct);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

};

