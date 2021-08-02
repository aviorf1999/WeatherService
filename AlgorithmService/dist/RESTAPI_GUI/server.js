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
exports.App = void 0;
const express = require("express");
const bodyParser = __importStar(require("body-parser"));
const logic_1 = require("../AlgorithmLogic/logic");
const cors = require("cors");
const forecast_service_1 = require("../DBService/forecast/forecast.service");
class App {
    constructor() {
        this.http = require("http").Server(this.app);
        this.io = require("socket.io")(this.http);
        this.server = null;
        this.app = express();
        this.buildServer();
        this.port = 3100;
    }
    init() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }
    getAlgorithm(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let dateVal = new Date(parseInt(data.yearVal), parseInt(data.monthVal), parseInt(data.dayVal));
                let lat = parseFloat(data.lat);
                let lng = parseFloat(data.lng);
                let result = yield logic_1.AlgorithmsLogic.firstAlgorithm(lat, lng, dateVal);
                if (result && result.length > 0) {
                    console.log('Algorithm 1 success');
                    console.log(result);
                    return result;
                }
                else {
                    result = yield logic_1.AlgorithmsLogic.secondAlgorithm(lat, lng, dateVal);
                    console.log('Algorithm 2 success');
                    console.log(result);
                    if (result && result.length > 0) {
                        let currentDate = dateVal;
                        let datesArr = [];
                        for (let i = 0; i < result.length; i++) {
                            datesArr.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i));
                        }
                        for (let i = 0; i < result.length; i++) {
                            forecast_service_1.ForecastService.create({
                                body: {
                                    latitude: lat,
                                    longitude: lng,
                                    tempC: result[i],
                                    date: datesArr[i]
                                }
                            }).catch(err => {
                                console.log(err);
                            });
                        }
                        return result;
                    }
                    else {
                        return [];
                    }
                }
            }
            catch (err) {
                console.log(err);
                return err;
            }
        });
    }
    buildServer() {
        var getAlgorithmFunc = this.getAlgorithm;
        this.io.on("connection", (socket) => {
            console.log('Client connected');
            socket.on('statistics', (data) => {
                getAlgorithmFunc(data).then(res => {
                    socket.emit('recieve', res);
                });
            });
        });
        this.server = this.http.listen(3100, () => {
            console.log(`GUI-Server listen on port ${this.port}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=server.js.map