import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    rank: {
        type: String,
        required: true
    },
    personalNumber: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    tash: {
        type: Number,
        required: true
    },
    enlistmentDate: {
        type: Date,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    pilot: {
        type: String,
        required: true
    }
});

export const userModel = mongoose.model('User', userSchema);