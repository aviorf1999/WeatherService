"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const weather_service_1 = require("./weather.service");
class WeatherController {
    constructor() {
        this.path = '/weather';
        this.router = express.Router();
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/:latitude/:longitude/:date', weather_service_1.weatherService.getYearlyDays);
        this.router.get('/:latitude/:longitude/:startDate/:endDate', weather_service_1.weatherService.getDays);
        this.router.post('/', weather_service_1.weatherService.create);
        this.router.get('/', weather_service_1.weatherService.readAll);
        this.router.get('/:forecastId', weather_service_1.weatherService.readById);
        this.router.put('/:forecastId', weather_service_1.weatherService.updateById);
        this.router.delete('/', weather_service_1.weatherService.deleteAll);
        this.router.delete('/:forecastId', weather_service_1.weatherService.deleteById);
    }
}
exports.WeatherController = WeatherController;
//# sourceMappingURL=weather.controller.js.map