import express = require("express");
import cors = require('cors');
import mongoose = require('mongoose');
import * as bodyParser from 'body-parser';
import { WeatherController } from './weather/weather.controller';
const mongoURIString = 'mongodb://127.0.0.1:27017/db'; //Base
const port = 3000;

export class App {
    app: express.Express;

    constructor() {
        this.app = express();
    }

    init() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.initControllers([new WeatherController()]);
    };
    connectToDB() {
        mongoose.connect(mongoURIString, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('Connected to db')
        )
    };
    listen() {
        this.app.listen(port, () => console.log('RestAPI server is up'));
    }

    private initControllers(controllers: any[]) {
        for (const controller of controllers) {
            this.app.use(controller.path, controller.router);
        }
    }
}
