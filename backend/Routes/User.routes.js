const express = require('express');
const router = express.Router();


const UserController = require('../controllers/User.Cntroller');



// Create a new user

router.post('/newUser', UserController.createUser); 

// Get all users

router.get('/', UserController.getUsers);

// Get user by id

router.get('/:id', UserController.getUserById);

// Update user

router.put('/:id', UserController.updateUser);

// Delete user

router.delete('/:id', UserController.deleteUser);

// like product

router.put('/:id/likeProduct', UserController.LikeProduct);

// save product

router.put('/:id/saveProduct', UserController.SaveProduct);

//unlike product

router.put('/:id/unlikeProduct', UserController.UnlikeProduct);

//unsave product

router.put('/:id/unsaveProduct', UserController.UnsaveProduct);

// get user saved products

router.get('/:id/savedProducts', UserController.getSaveProduct);

// get user liked products

router.get('/:id/likedProducts', UserController.getLikeProduct);

module.exports = router;
