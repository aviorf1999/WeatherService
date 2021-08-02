"use strict";
const { ForecastRest } = require('./DBService/app'); //Forecast restAPI
const { App } = require('./RESTAPI_GUI/server'); //Algorithm server
const forecastRest = new ForecastRest();
forecastRest.init();
forecastRest.connectToDB();
forecastRest.listen();
const app = new App();
app.init();
// app.listen();
//# sourceMappingURL=main.js.map