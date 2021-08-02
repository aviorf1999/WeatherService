"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weather_schema_1 = require("./weather.schema");
const weather_dto_1 = require("./dto/weather.dto");
const updateWeather_dto_1 = require("./dto/updateWeather.dto");
class weatherService {
    constructor() { }
    ;
    static async getDays(req, res) {
        try {
            const data = await weather_schema_1.weatherModel.find({ latitude: req.params.latitude, longitude: req.params.longitude, date: {
                    $gte: new Date(req.params.startDate), $lt: new Date(req.params.endDate)
                } });
            res.json(data);
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    static async getYearlyDays(req, res) {
        try {
            let date = new Date(req.params.date);
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();
            let condition = `return this.date.getFullYear()!=${year}&&this.date.getMonth() == ${month}&&this.date.getDate()==${day}`;
            const data = await weather_schema_1.weatherModel.find({ latitude: req.params.latitude, longitude: req.params.longitude, $where: condition }).then(result => {
                res.json(result);
            });
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    static async create(req, res) {
        try {
            const weatherDTO = new weather_dto_1.CreateWeatherDTO(req.body.latitude, req.body.longitude, req.body.height, req.body.tempC, req.body.atmosphericPressure, req.body.date);
            weather_schema_1.weatherModel.create(weatherDTO).then(result => {
                res.json(result);
            });
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    static async readAll(req, res) {
        try {
            const data = await weather_schema_1.weatherModel.find();
            res.json(data);
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    static async readById(req, res) {
        try {
            const data = await weather_schema_1.weatherModel.findById(req.params.forecastId);
            res.json(data);
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    ;
    static async updateById(req, res) {
        try {
            var updatedWeatherDTO = new updateWeather_dto_1.UpdateWeatherDTO();
            updatedWeatherDTO.checkToEdit(req.body);
            weather_schema_1.weatherModel.updateOne({ _id: req.params.forecastId }, updatedWeatherDTO).then(result => {
                res.json(result);
            });
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    static async deleteAll(req, res) {
        try {
            const data = await weather_schema_1.weatherModel.find();
            if (data.length == 0) {
                res.json({ message: 'weatherModel is already empty' });
            }
            else {
                for (let i = 0; i < data.length; i++) {
                    await weather_schema_1.weatherModel.deleteOne({ _id: data[i]._id });
                }
                const result = await weather_schema_1.weatherModel.find();
                if (result.length === 0) {
                    res.json({ message: 'All data elements have been removed' });
                }
                else {
                    res.json({ message: 'Delete all data elements action failed!' });
                }
            }
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
    ;
    static async deleteById(req, res) {
        try {
            const removedweatherModel = await weather_schema_1.weatherModel.deleteOne({ _id: req.params.dataId });
            res.json(removedweatherModel);
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
}
exports.weatherService = weatherService;
//# sourceMappingURL=weather.service.js.map