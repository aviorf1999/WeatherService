import express = require("express");
import mongoose = require('mongoose');
import * as bodyParser from 'body-parser';
import cors = require("cors");
import { ForecastController } from './forecast/forecast.controller';
const mongoURIString = 'mongodb://127.0.0.1:27017/db'; //Base

export class ForecastRest {
    app: express.Express;
    port: Number;
    constructor() {
        this.app = express();
        this.port = 3002;
    }

    init() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.initControllers([new ForecastController()]);
    }

    connectToDB() {
        mongoose.connect(mongoURIString, { useUnifiedTopology: true, useNewUrlParser: true },
            () => console.log('Connected to db'));
    }

    listen() {
        this.app.listen(this.port, () => { console.log(`Forecast RestAPI on port ${this.port}`) });
    }
    private initControllers(controllers: any[]) {
        for (const controller of controllers) {
            this.app.use(controller.path, controller.router);
        }
    }
}
