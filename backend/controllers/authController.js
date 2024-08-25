const User = require("../models/userModel");
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const { successResponse, failedResponse } = require("../utils/apiResponse");

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, latitude, longitude } = req.body;
    const image = req.file;


    const userExists = await User.findOne({ email });
    if (userExists) {
        return res.status(400).json({
            success: false,
            message: "User already exists for given email!"
        });
    }

    try {

        const user = await User.create({
            name,
            email,
            image: image ? image.path : null,
            password,
            location: {
                latitude,
                longitude
            }
        });


        if (user) {
            return res.status(201).json({
                success: true,
                message: 'User created successfully!',
                data: user
            });
        } else {

            return res.status(400).json({
                success: false,
                message: 'Error while creating the user'
            });
        }

    } catch (err) {

        console.error('Error creating user:', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error while creating the user'
        });
    }
});


const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            res.status(400);
            throw new Error("User doesn't exist for the given email!");
        }

        const isVerified = await user.comparePassword(password);
        if (isVerified) {
            const token = await user.generateToken();

            const response = {
                _id: user._id,
                name: user.name,
                email: user.email,
                token: token,
                image: user.image,
                role: user.role,
            };
            res.status(200).json(successResponse('Logged in successfully!', response));
        } else {
            res.status(400).json(failedResponse('Invalid credentials!'));
        }
    } catch (error) {
        console.error("Login error: ", error.message);
        res.status(400).json(failedResponse(error.message));
    }
});

const getAllUserData = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.status(200).json(successResponse('Data found succeessfully!!', users));
});

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid user ID' });
        }
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ success: false, message: 'Failed to delete user', error: error.message });
    }
};







module.exports = { registerUser, loginUser, getAllUserData, deleteUser }