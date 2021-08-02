"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
const json2typescript_1 = require("json2typescript");
let Weather = /** @class */ (() => {
    let Weather = class Weather {
    };
    __decorate([
        json2typescript_1.JsonProperty('latitude', Number)
    ], Weather.prototype, "latitude", void 0);
    __decorate([
        json2typescript_1.JsonProperty('longitude', Number)
    ], Weather.prototype, "longitude", void 0);
    __decorate([
        json2typescript_1.JsonProperty('height', Number)
    ], Weather.prototype, "height", void 0);
    __decorate([
        json2typescript_1.JsonProperty('tempC', Number)
    ], Weather.prototype, "tempC", void 0);
    __decorate([
        json2typescript_1.JsonProperty('atmosphericPressure', Number)
    ], Weather.prototype, "atmosphericPressure", void 0);
    __decorate([
        json2typescript_1.JsonProperty('date', Date)
    ], Weather.prototype, "date", void 0);
    Weather = __decorate([
        json2typescript_1.JsonObject("Weather")
    ], Weather);
    return Weather;
})();
exports.Weather = Weather;
