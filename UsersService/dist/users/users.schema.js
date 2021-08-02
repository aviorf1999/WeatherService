"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
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
exports.userModel = mongoose.model('User', userSchema);
//# sourceMappingURL=users.schema.js.map