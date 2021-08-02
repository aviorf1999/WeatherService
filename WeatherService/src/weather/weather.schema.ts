import * as mongoose from 'mongoose';

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

export const weatherModel = mongoose.model('Weather', weatherSchema);