"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const weather_1 = require("./model/weather");
const class_transformer_1 = require("class-transformer");
const express = require('express');
const weatherSchemaStrings = ["latitude", "longitude", "height", "tempC", "atmosphericPressure", "date"];
const axios = require('axios');
const minTemp = 0;
const maxTemp = 50;
let App = /** @class */ (() => {
    class App {
        constructor() {
            this.app = express();
            this.http = require("http").Server(this.app);
            this.io = require("socket.io")(this.http);
            this.server = null;
            this.dataArray = [];
            this.buildServer();
        }
        buildServer() {
            this.io.on("connection", function (socket) {
                console.log("Client connected");
                socket.on("data", function (data) {
                    App.checkElement(data);
                });
            });
            this.server = this.http.listen(3101, function () {
                console.log("listen on port 3101");
            });
        }
        static checkElement(dataElement) {
            try {
                if (dataElement) {
                    if (!("null" in dataElement)) {
                        this.weatherInstance = class_transformer_1.plainToClass(weather_1.Weather, dataElement);
                        if (this.weatherInstance.tempC && this.weatherInstance.tempC > minTemp && this.weatherInstance.tempC < maxTemp) {
                            axios({
                                method: 'POST',
                                url: 'http://localhost:3000/weather',
                                data: dataElement
                            });
                        }
                    }
                    else {
                        return;
                    }
                }
                return;
            }
            catch (err) {
                console.log(`not weather element ${dataElement}`);
            }
        }
    }
    App.counter = 0;
    return App;
})();
exports.App = App;
// weatherSchemaStrings.forEach(element => {
//     if (!(element in dataElement)) {
//         return;
//     }
// });
//     }
