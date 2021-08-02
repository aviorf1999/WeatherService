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
const weatherSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    tempC: {
        type: Number,
        required: true
    },
    atmosphericPressure: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});
exports.weatherModel = mongoose.model('Weather', weatherSchema);
//# sourceMappingURL=weather.schema.js.map