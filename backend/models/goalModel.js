const mongoose = require('mongoose');

const goalScheme = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User',
    },
    text: {
        type: String,
        required: [true, 'Please add a goal']
    }
}, {
    timestamps: true
    });

module.exports = mongoose.model('Goal', goalScheme);