import { Forecast } from './forecast.schema';
import { CreateForecastDTO } from './dto/forecast.dto';
import { UpdateForecastDTO } from './dto/updateForecast.dto';
export class ForecastService {
    constructor() { };
    public static async create(req: any): Promise<any> {
        try {
            const forecastDTO = new CreateForecastDTO(req.body.latitude,
                req.body.longitude,
                req.body.tempC,
                req.body.date);
            Forecast.create(forecastDTO).then(result => {

            });
        } catch (err) {
            console.log(err)
        }
    }
    public static async readAll(req: any, res: any) {
        try {
            const forecast = await Forecast.find();
            res.json(forecast);
        } catch (err) {
            res.json({ message: err.message });
        }
    }
    public static async readById(req: any, res: any) {
        try {
            const forecast = await Forecast.findById(req.params.forecastId);
            res.json(forecast);
        } catch (err) {
            res.json({ message: err.message });
        }
    };
    public static async updateById(req: any, res: any) {
        try {
            var updatedForecastDTO = new UpdateForecastDTO();
            updatedForecastDTO.checkToEdit(req.body);
            Forecast.updateOne({ _id: req.params.forecastId }, updatedForecastDTO).then(result => {
            });
        } catch (err) {
            res.json({ message: err.message });
        }
    }
    public static async deleteAll(req: any, res: any) {
        try {
            const forecast = await Forecast.find();
            if (forecast.length == 0) {
                res.json({ message: 'forecast is already empty' });
            }
            else {
                for (let i = 0; i < forecast.length; i++) {
                    await Forecast.deleteOne({ _id: forecast[i]._id });
                }
                const result = await Forecast.find();
                if (result.length === 0) {
                    res.json({ message: 'All forecast elements have been removed' });
                }
                else {
                    res.json({ message: 'Delete all forecast elements action failed!' });
                }
            }
        }
        catch (err) {
            res.json({ message: err.message });
        }
    };
    public static async deleteById(req: any, res: any) {
        try {
            const removedForecast = await Forecast.deleteOne({ _id: req.params.forecastId });
            res.json(removedForecast);
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
}