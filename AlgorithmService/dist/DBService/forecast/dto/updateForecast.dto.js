"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateForecastDTO = void 0;
class UpdateForecastDTO {
    constructor() { }
    checkToEdit(obj) {
        if (obj.latitude) {
            this.latitude = obj.latitude;
        }
        if (obj.longitude) {
            this.longitude = obj.longitude;
        }
        if (obj.tempC) {
            this.tempC = obj.tempC;
        }
        if (obj.date) {
            this.date = obj.date;
        }
    }
}
exports.UpdateForecastDTO = UpdateForecastDTO;
//# sourceMappingURL=updateForecast.dto.js.map