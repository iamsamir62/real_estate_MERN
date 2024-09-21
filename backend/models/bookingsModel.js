
const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

    address: { type: String }

}, {
    timestamps: true,
});
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
