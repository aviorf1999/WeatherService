"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlgorithmsLogic = void 0;
const index_1 = require("../WeatherService/index");
class AlgorithmsLogic {
    constructor() { }
    ;
    static firstAlgorithm(lat, lng, dateToFind) {
        return new Promise(function (resolve, reject) {
            let forecastResult = 0;
            index_1.getDataForYearlyAlgorithm(lat, lng, `${dateToFind.getFullYear()}-${dateToFind.getMonth() + 1}-${dateToFind.getDate()}`).then(res => {
                console.log(res.data);
                if (res.data.length > 0) {
                    for (let i = 0; i < res.data.length; i++) {
                        forecastResult += res.data[i].tempC;
                    }
                    resolve([Math.round(forecastResult / res.data.length)]);
                }
                else {
                    resolve(null);
                }
            }).catch(err => {
                reject(err);
            });
        });
    }
    static secondAlgorithm(lat, lng, dateToFind) {
        return new Promise(function (resolve, reject) {
            let pastDays;
            console.log(dateToFind);
            dateToFind.setDate(dateToFind.getDate() + 1);
            let currentDate = new Date(dateToFind.getFullYear(), dateToFind.getMonth(), dateToFind.getDate() - 1);
            let startDate = new Date(dateToFind.getFullYear(), dateToFind.getMonth(), dateToFind.getDate() - 31);
            index_1.getDataForLastMonth(lat, lng, startDate, currentDate).then(res => {
                if (res.data.length > 8) {
                    pastDays = res.data;
                    //Sorting array by date property
                    pastDays = pastDays.sort(function (a, b) {
                        var dateA = new Date(a.date).getTime(), dateB = new Date(b.date).getTime();
                        return dateB - dateA;
                    });
                    resolve(findTemp(pastDays, Math.floor(pastDays.length / 10) + 1, Math.floor(pastDays.length / 10) + 1));
                }
                else {
                    // Not enough elements to recieve forecasting !!!
                    resolve([]);
                }
            }).catch(err => {
                resolve(err);
            });
        });
    }
}
exports.AlgorithmsLogic = AlgorithmsLogic;
// TODO: loop on array to check min counter and continue the algorithm.
function findTemp(arr, unknownDays, daysToCheck) {
    console.log(`length :` + arr.length);
    let counter = [];
    let result = [];
    for (let i = 0; i < arr.length - daysToCheck - 1; i++) {
        counter[i] = 0;
        for (let j = 0; j < daysToCheck; j++) {
            counter[i] += Math.abs(arr[i].tempC - arr[arr.length - daysToCheck + j].tempC);
        }
    }
    var indexOfFirstForecastDay = counter.lastIndexOf(Math.min(...counter));
    for (let i = indexOfFirstForecastDay; i < indexOfFirstForecastDay + unknownDays; i++) {
        result.push(arr[i].tempC);
    }
    return result;
}
//# sourceMappingURL=logic.js.map