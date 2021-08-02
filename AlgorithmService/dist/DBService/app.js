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
exports.ForecastRest = void 0;
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = __importStar(require("body-parser"));
const cors = require("cors");
const forecast_controller_1 = require("./forecast/forecast.controller");
const mongoURIString = 'mongodb://127.0.0.1:27017/db'; //Base
class ForecastRest {
    constructor() {
        this.app = express();
        this.port = 3002;
    }
    init() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.initControllers([new forecast_controller_1.ForecastController()]);
    }
    connectToDB() {
        mongoose.connect(mongoURIString, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected to db'));
    }
    listen() {
        this.app.listen(this.port, () => { console.log(`Forecast RestAPI on port ${this.port}`); });
    }
    initControllers(controllers) {
        for (const controller of controllers) {
            this.app.use(controller.path, controller.router);
        }
    }
}
exports.ForecastRest = ForecastRest;
//# sourceMappingURL=app.js.map