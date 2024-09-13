const express = require("express");
const { getAllRoomsData, getNearbyRooms, addRoom, getIndividualRoomData, bookingRoom, getAllBookedUser, deleteBooking, deleteRoom } = require("../controllers/roomController");
const { getNearByRoomsValidation, addRoomValidation, getIndividualRoomDataValidation } = require("../validation/roomValidation");
const router = express.Router();


router.route('/').get(getAllRoomsData);
router.route('/nearbyrooms').get(getNearByRoomsValidation, getNearbyRooms);
router.route('/addroom').post(addRoom);
router.route('/booking/:houseid').post(bookingRoom);
router.route('/bookinguser').get(getAllBookedUser);
router.route('/bookinguser/:id').delete(deleteBooking);
router.route('/deleteroom/:id').delete(deleteRoom);
router.route('/:roomid').get(getIndividualRoomDataValidation, getIndividualRoomData);




module.exports = router;