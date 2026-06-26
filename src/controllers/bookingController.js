const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};