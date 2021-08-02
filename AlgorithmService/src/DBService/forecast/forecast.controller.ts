import * as express from 'express';
import { ForecastService } from './forecast.service';

export class ForecastController {
    public readonly path: string = '/forecast';
    public router: express.Router;
    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }
    initRoutes() {
        this.router.post('/', ForecastService.create);
        this.router.get('/', ForecastService.readAll);
        this.router.get('/:forecastId', ForecastService.readById);
        this.router.put('/:forecastId', ForecastService.updateById);
        this.router.delete('/', ForecastService.deleteAll);
        this.router.delete('/:forecastId', ForecastService.deleteById);
    }
}
