const mongoose = require('mongoose');

const menuItemSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Price: {type: Number, default: 12},
    ImagePath: String,
    Description: String
})

module.exports = mongoose.model('MenuItem', menuItemSchema)