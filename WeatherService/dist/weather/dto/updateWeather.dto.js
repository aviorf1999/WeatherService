"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateWeatherDTO {
    constructor() {
    }
    checkToEdit(obj) {
        if (obj.latitude) {
            this.latitude = obj.latitude;
        }
        if (obj.longitude) {
            this.longitude = obj.longitude;
        }
        if (obj.height) {
            this.height = obj.height;
        }
        if (obj.tempC) {
            this.tempC = obj.tempC;
        }
        if (obj.atmosphericPressure) {
            this.atmosphericPressure = obj.atmosphericPressure;
        }
        if (obj.date) {
            this.date = obj.date;
        }
    }
}
exports.UpdateWeatherDTO = UpdateWeatherDTO;
//# sourceMappingURL=updateWeather.dto.js.map