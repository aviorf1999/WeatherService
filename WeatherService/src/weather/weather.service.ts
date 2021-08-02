import { weatherModel } from './weather.schema';
import { CreateWeatherDTO } from './dto/weather.dto';
import { UpdateWeatherDTO } from './dto/updateWeather.dto';
export class weatherService {
    constructor() { };
    public static async getDays(req:any,res:any){
        try{
            const data=await weatherModel.find({latitude:req.params.latitude,longitude:req.params.longitude,date:{
                $gte:new Date(req.params.startDate),$lt:new Date(req.params.endDate)
            }});
            res.json(data);
        }catch(err){
            res.json({message:err.message});
        }
    }
    public static async getYearlyDays(req:any,res:any){
        try{
            let date=new Date(req.params.date);
            let year=date.getFullYear();
            let month=date.getMonth();
            let day=date.getDate()
            let condition=`return this.date.getFullYear()!=${year}&&this.date.getMonth() == ${month}&&this.date.getDate()==${day}`
            const data=await weatherModel.find({latitude:req.params.latitude,longitude:req.params.longitude,$where : condition}).then(result=>{
                res.json(result);
            })
        }catch(err){
            res.json({message:err.message})
        }
    }
    public static async create(req: any, res: any) {
        try {
            const weatherDTO = new CreateWeatherDTO(req.body.latitude,
                req.body.longitude,
                req.body.height,
                req.body.tempC,
                req.body.atmosphericPressure,
                req.body.date);
            weatherModel.create(weatherDTO).then(result => {
                res.json(result);
            })

        } catch (err) {
            res.json({ message: err.message });
        }
    }
    public static async readAll(req: any, res: any) {
        try {
            const data = await weatherModel.find();
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
        }
    }
    public static async readById(req: any, res: any) {
        try {
            const data = await weatherModel.findById(req.params.forecastId);
            res.json(data);
        } catch (err) {
            res.json({ message: err.message });
        }
    };
    public static async updateById(req: any, res: any) {
        try {
            var updatedWeatherDTO = new UpdateWeatherDTO();
            updatedWeatherDTO.checkToEdit(req.body);
            weatherModel.updateOne({ _id: req.params.forecastId }, updatedWeatherDTO).then(result => {
                res.json(result);
            });

        } catch (err) {
            res.json({ message: err.message });
        }
    }
    public static async deleteAll(req: any, res: any) {
        try {
            const data = await weatherModel.find();

            if (data.length == 0) {
                res.json({ message: 'weatherModel is already empty' });
            }
            else {
                for (let i = 0; i < data.length; i++) {
                    await weatherModel.deleteOne({ _id: data[i]._id });
                }
                const result = await weatherModel.find();
                if (result.length === 0) {
                    res.json({ message: 'All data elements have been removed' });
                }
                else {
                    res.json({ message: 'Delete all data elements action failed!' });
                }
            }
        }
        catch (err) {
            res.json({ message: err.message });
        }
    };
    public static async deleteById(req: any, res: any) {
        try {
            const removedweatherModel = await weatherModel.deleteOne({ _id: req.params.dataId });
            res.json(removedweatherModel);
        }
        catch (err) {
            res.json({ message: err.message });
        }
    }
}
