const mongoose = require('mongoose');
const {v4:uuidv4}=require('uuid')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
