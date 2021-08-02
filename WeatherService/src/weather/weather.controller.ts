import express = require('express');
import { weatherService } from './weather.service';

export class WeatherController {
    public readonly path: string = '/weather';
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/:latitude/:longitude/:date',weatherService.getYearlyDays)
        this.router.get('/:latitude/:longitude/:startDate/:endDate',weatherService.getDays);
        this.router.post('/', weatherService.create);
        this.router.get('/', weatherService.readAll);
        this.router.get('/:forecastId', weatherService.readById);
        this.router.put('/:forecastId', weatherService.updateById);
        this.router.delete('/', weatherService.deleteAll);
        this.router.delete('/:forecastId', weatherService.deleteById);
    }
}