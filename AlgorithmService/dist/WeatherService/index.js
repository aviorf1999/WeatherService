"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataForYearlyAlgorithm = exports.getDataForLastMonth = void 0;
const axios_1 = __importDefault(require("axios"));
function getDataForLastMonth(latitude, longitude, startDate, endDate) {
    return axios_1.default({
        method: 'get',
        url: `http://localhost:3000/weather/${latitude}/${longitude}/${startDate}/${endDate}`
    });
}
exports.getDataForLastMonth = getDataForLastMonth;
function getDataForYearlyAlgorithm(latitude, longitude, date) {
    return axios_1.default({
        method: 'get',
        url: `http://localhost:3000/weather/${latitude}/${longitude}/${date}`
    });
}
exports.getDataForYearlyAlgorithm = getDataForYearlyAlgorithm;
//# sourceMappingURL=index.js.map