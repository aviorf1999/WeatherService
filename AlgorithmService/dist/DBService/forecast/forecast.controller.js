"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastController = void 0;
const express = __importStar(require("express"));
const forecast_service_1 = require("./forecast.service");
class ForecastController {
    constructor() {
        this.path = '/forecast';
        this.router = express.Router();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/', forecast_service_1.ForecastService.create);
        this.router.get('/', forecast_service_1.ForecastService.readAll);
        this.router.get('/:forecastId', forecast_service_1.ForecastService.readById);
        this.router.put('/:forecastId', forecast_service_1.ForecastService.updateById);
        this.router.delete('/', forecast_service_1.ForecastService.deleteAll);
        this.router.delete('/:forecastId', forecast_service_1.ForecastService.deleteById);
    }
}
exports.ForecastController = ForecastController;
//# sourceMappingURL=forecast.controller.js.map