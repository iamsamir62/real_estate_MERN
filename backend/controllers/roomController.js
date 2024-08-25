const Room = require('../models/roomModel');
const asyncHandler = require('express-async-handler');
const { successResponse } = require('../utils/apiResponse');
const multer = require('multer');
const path = require('path');
const Booking = require('../models/bookingsModel');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
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

    const radius = 20;
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
    uploadRoom(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: 'Error uploading files', error: err });
        }


        const { Owner, photos, description, price, Address, propertyType, bedrooms, bathrooms } = req.body;
        console.log(req.body)

        const images = photos && photos.map(file => file.path);


        const room = await Room.create({
            ownerName: Owner,
            address: Address,
            images,

            description,
            price,
            type: propertyType,
            bedrooms: propertyType === 'Flat' ? bedrooms : undefined,
            bathrooms: propertyType === 'Flat' ? bathrooms : undefined,

        });
        console.log(room)

        res.status(201).json({
            success: true,
            message: 'Room added successfully!',
            data: room
        });
    });
});
const bookingRoom = asyncHandler(async (req, res) => {

    const { name, phone, address } = req.body;

    const { houseid } = req.params;
    console.log(houseid)
    try {
        const book = await Booking.create({
            name,
            phone,
            address
        });

        const room = await Room.findOne({ _id: houseid });  // 
        if (room) {
            room.status = 'booked';
            await room.save();
        } else {
            console.log('Room not found');
        }

        res.status(201).json({
            success: true,
            message: "booking added successfully!",
            data: book,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to book", error: error.message });
    }
});
const getAllBookedUser = asyncHandler(async (req, res) => {
    try {

        const users = await Booking.find({});


        res.status(200).json(successResponse('Data found successfully!!', users));
    } catch (error) {

        console.error('Error fetching booked users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
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
    bookingRoom,
    getAllBookedUser,
    getIndividualRoomData,
};
