var mongoose = require("mongoose");

var linkSchema = new mongoose.Schema({
    genre: {
        type: String,
        required: true
    },
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
})

module.exports = mongoose.model("Link", linkSchema);
