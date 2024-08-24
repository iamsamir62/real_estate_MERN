const Room = require('../models/roomModel');
const asyncHandler = require('express-async-handler');
const { successResponse } = require('../utils/apiResponse');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory to save files
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Unique file name
    },
});
const upload = multer({ storage: storage });

// Middleware for handling file uploads and form data
const uploadRoom = upload.array('photos', 4);

const getAllRoomsData = asyncHandler(async (req, res) => {
    const rooms = await Room.find({});
    res.status(200).json(successResponse('Data found succeessfully!!', rooms));
});


const getNearbyRooms = asyncHandler(async (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        res.status(400);
        throw new Error("Latitude and longitude are required");
    }

    const radius = 30;
    const earthRadius = 6371;

    const rooms = await Room.find({});

    const nearbyRooms = rooms.filter(room => {
        const dLat = (room.location.latitude - latitude) * (Math.PI / 180);
        const dLon = (room.location.longitude - longitude) * (Math.PI / 180);

        const lat1 = latitude * (Math.PI / 180);
        const lat2 = room.location.latitude * (Math.PI / 180);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const distance = earthRadius * c;
        return distance <= radius;
    });

    res.status(200).json(successResponse("Rooms found!!", nearbyRooms));
});

const addRoom = asyncHandler(async (req, res) => {
    // Middleware to handle files and fields
    uploadRoom(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: 'Error uploading files', error: err });
        }


        const { owner, description, price, latitude, longitude, propertyType, bedrooms, bathrooms } = req.body;


        const images = req.files.map(file => file.path);


        const room = new Room({
            owner,
            description,
            images,
            price,
            location: {
                latitude,
                longitude
            },
            type: propertyType,
            bedrooms: propertyType === 'Flat' ? bedrooms : undefined,
            bathrooms: propertyType === 'Flat' ? bathrooms : undefined
        });


        const createdRoom = await room.save();
        res.status(201).json({
            success: true,
            message: 'Room added successfully!',
            data: createdRoom
        });
    });
});

const getIndividualRoomData = asyncHandler(async (req, res) => {
    const { roomid } = req.params;
    const room = await Room.findById(roomid);

    if (!room) {
        res.status(404);
        throw new Error("Room not found");
    }

    res.status(200).json(successResponse('Room found!', room));
});

module.exports = {
    getAllRoomsData,
    getNearbyRooms,
    addRoom,
    getIndividualRoomData
};
