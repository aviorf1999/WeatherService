"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateWeatherDTO {
    constructor(latitude, longitude, height, tempC, atmosphericPressure, date) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.height = height;
        this.tempC = tempC;
        this.atmosphericPressure = atmosphericPressure;
        this.date = date;
    }
}
exports.CreateWeatherDTO = CreateWeatherDTO;
//# sourceMappingURL=weather.dto.js.map