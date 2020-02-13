const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    Name: String,
    NumGuest: Number
})

module.exports = mongoose.model('Reservation', reservationSchema);