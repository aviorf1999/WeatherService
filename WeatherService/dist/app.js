"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = __importStar(require("body-parser"));
const weather_controller_1 = require("./weather/weather.controller");
const mongoURIString = 'mongodb://127.0.0.1:27017/db'; //Base
const port = 3000;
class App {
    constructor() {
        this.app = express();
    }
    init() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.initControllers([new weather_controller_1.WeatherController()]);
    }
    ;
    connectToDB() {
        mongoose.connect(mongoURIString, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected to db'));
    }
    ;
    listen() {
        this.app.listen(port, () => console.log('RestAPI server is up'));
    }
    initControllers(controllers) {
        for (const controller of controllers) {
            this.app.use(controller.path, controller.router);
        }
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map