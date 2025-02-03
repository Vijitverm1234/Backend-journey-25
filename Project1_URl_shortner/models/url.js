const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortid: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitedHistory: [
        {
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

const URL = mongoose.model("URL", urlSchema);
module.exports = URL;
