"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastService = void 0;
const forecast_schema_1 = require("./forecast.schema");
const forecast_dto_1 = require("./dto/forecast.dto");
const updateForecast_dto_1 = require("./dto/updateForecast.dto");
class ForecastService {
    constructor() { }
    ;
    static create(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const forecastDTO = new forecast_dto_1.CreateForecastDTO(req.body.latitude, req.body.longitude, req.body.tempC, req.body.date);
                forecast_schema_1.Forecast.create(forecastDTO).then(result => {
                });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static readAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const forecast = yield forecast_schema_1.Forecast.find();
                res.json(forecast);
            }
            catch (err) {
                res.json({ message: err.message });
            }
        });
    }
    static readById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const forecast = yield forecast_schema_1.Forecast.findById(req.params.forecastId);
                res.json(forecast);
            }
            catch (err) {
                res.json({ message: err.message });
            }
        });
    }
    ;
    static updateById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var updatedForecastDTO = new updateForecast_dto_1.UpdateForecastDTO();
                updatedForecastDTO.checkToEdit(req.body);
                forecast_schema_1.Forecast.updateOne({ _id: req.params.forecastId }, updatedForecastDTO).then(result => {
                });
            }
            catch (err) {
                res.json({ message: err.message });
            }
        });
    }
    static deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const forecast = yield forecast_schema_1.Forecast.find();
                if (forecast.length == 0) {
                    res.json({ message: 'forecast is already empty' });
                }
                else {
                    for (let i = 0; i < forecast.length; i++) {
                        yield forecast_schema_1.Forecast.deleteOne({ _id: forecast[i]._id });
                    }
                    const result = yield forecast_schema_1.Forecast.find();
                    if (result.length === 0) {
                        res.json({ message: 'All forecast elements have been removed' });
                    }
                    else {
                        res.json({ message: 'Delete all forecast elements action failed!' });
                    }
                }
            }
            catch (err) {
                res.json({ message: err.message });
            }
        });
    }
    ;
    static deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const removedForecast = yield forecast_schema_1.Forecast.deleteOne({ _id: req.params.forecastId });
                res.json(removedForecast);
            }
            catch (err) {
                res.json({ message: err.message });
            }
        });
    }
}
exports.ForecastService = ForecastService;
//# sourceMappingURL=forecast.service.js.map