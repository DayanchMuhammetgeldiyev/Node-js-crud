const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler'); 
const User = require('../models/userModel');


// @desc Register new User
// POST /api/users/register
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please provide all required fields');
    }
// Check for existing user
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400) 
        throw new Error('User already exists');
    }
//hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
// Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });
     
      if (user) {
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
          })
        } else {
            res.status(400)
            throw new Error('User not created')
            }
})

// @desc Authenticate a user
// POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({
        message: 'Login user'
    });
})

// @desc Register new User
// GET /api/users/me
// @access Public
const getMe = asyncHandler(async(req, res) => {
    res.json({
        message: 'User data display'
    });
})
module.exports = {
    registerUser,
    loginUser,
    getMe,
}
