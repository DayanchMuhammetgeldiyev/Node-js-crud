const mongoose = require('mongoose');

const goalScheme = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a goal']
    }
}, {
    timestamps: true
    });

module.exports = mongoose.model('Goal', goalScheme);