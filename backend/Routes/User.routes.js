const express = require('express');
const router = express.Router();


const UserController = require('../controllers/User.Cntroller');



// Create a new user

router.post('/newUser', UserController.createUser); 

// Get all users

router.get('/', UserController.getUsers);

// Get user by id

router.get('/user/:id', UserController.getUserById);

// Update user

router.put('/user/:id', UserController.updateUser);

// Delete user

router.delete('/user/:id', UserController.deleteUser);

// like product

router.put('/user/:id/likeProduct', UserController.LikeProduct);

// save product

router.put('/user/:id/saveProduct', UserController.SaveProduct);

//unlike product

router.put('/user/:id/unlikeProduct', UserController.UnlikeProduct);

//unsave product

router.put('/user/:id/unsaveProduct', UserController.UnsaveProduct);

// get user saved products

router.get('/user/:id/savedProducts', UserController.getSaveProduct);

// get user liked products

router.get('/user/:id/likedProducts', UserController.getLikeProduct);

module.exports = router;
