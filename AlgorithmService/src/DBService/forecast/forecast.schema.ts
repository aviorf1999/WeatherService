import * as mongoose from 'mongoose';

const forecastSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    tempC: {
        type: Number,
        required: true
    },
    date: {
        type: Date
    }
});
export const Forecast = mongoose.model('Forecast', forecastSchema);