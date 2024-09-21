const Room = require('../models/roomModel');
const asyncHandler = require('express-async-handler');
const { successResponse } = require('../utils/apiResponse');
const multer = require('multer');
const path = require('path');
const Booking = require('../models/bookingsModel');


// Define storage for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// File upload middleware
const uploadRoom = multer({
    storage: storage,
}).array('photos', 10);

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

        const { Owner, description, price, Address, propertyType, bedrooms, latitude, longitude, bathrooms } = req.body;
        const photos = req.files;

        const images = photos && photos.map(file => file.path);
        console.log(images)

        const room = await Room.create({
            ownerName: Owner,
            address: Address,
            location: {
                latitude: latitude,
                longitude: longitude
            },
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
    const { houseid, userid } = req.params;
    console.log(userid)

    if (!houseid) {
        return res.status(400).json({ message: "House ID is required" });
    }

    try {
        const book = await Booking.create({
            name,
            phone,
            userId: userid,
            roomId: houseid,
            address
        });

        const room = await Room.findOne({ _id: houseid });
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }

        room.status = 'booked';
        await room.save();

        res.status(201).json({
            success: true,
            message: "Booking added successfully!",
            data: book,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to book", error: error.message });
    }
});

const getAllBookedUser = asyncHandler(async (req, res) => {
    try {

        const users = await Booking.find({}).populate("roomId");


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
const getIndividualBookingData = asyncHandler(async (req, res) => {
    const { userid } = req.params;
    const bookings = await Booking.findOne({ userId: userid }).populate('roomId');

    if (!bookings) {
        return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    res.status(200).json(successResponse('Bookings found!', [bookings]));
});

const deleteBooking = async (req, res) => {
    const { id } = req.params;
    try {
        const bookedRoom = await Booking.findById(id);
        const booking = await Booking.findByIdAndDelete(id);

        if (!booking) {
            return res.status(400).json({ success: false, message: 'Booking not found' });
        }

        const room = await Room.findOne({ _id: bookedRoom.roomId });
        console.log(room)
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }

        room.status = 'available';
        await room.save();

        res.status(200).json({ success: true, message: 'Booking deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to delete booking', error: error.message });
    }
};




const deleteRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const room = await Room.findByIdAndDelete(id);

        if (!room) {
            return res.status(404).json({ success: false, message: 'Room not found' });
        }



        res.status(200).json({ success: true, message: 'Room deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to delete Room', error: error.message });
    }
};


module.exports = {
    getAllRoomsData,
    getNearbyRooms,
    addRoom,
    bookingRoom,
    getAllBookedUser,
    getIndividualRoomData,
    deleteBooking,
    deleteRoom, getIndividualBookingData
};
