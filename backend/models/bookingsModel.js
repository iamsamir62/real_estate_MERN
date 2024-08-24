
const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String }

}, {
    timestamps: true,
});
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
