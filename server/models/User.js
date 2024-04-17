import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', userSchema);