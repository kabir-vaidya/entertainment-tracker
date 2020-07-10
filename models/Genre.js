const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    links: [{
        source: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }]
});

module.exports = mongoose.model("Genre", GenreSchema);