import express = require("express");
import * as bodyParser from 'body-parser';
import { AlgorithmsLogic } from '../AlgorithmLogic/logic';
import cors = require("cors");
import { ForecastService } from '../DBService/forecast/forecast.service';

export class App {
    app: any;
    http = require("http").Server(this.app);
    io = require("socket.io")(this.http);
    port: Number;
    server = null;
    constructor() {
        this.app = express();
        this.buildServer();
        this.port = 3100;
    }
    init() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }
    async getAlgorithm(data: any) {
        try{
        let dateVal = new Date(parseInt(data.yearVal), parseInt(data.monthVal), parseInt(data.dayVal));
        let lat = parseFloat(data.lat);
        let lng = parseFloat(data.lng);
        let result =await AlgorithmsLogic.firstAlgorithm(lat,lng,dateVal);
        if(result&&result.length>0){
            console.log('Algorithm 1 success')
            console.log(result)
        return result
        }
     else{
        result = await AlgorithmsLogic.secondAlgorithm(lat, lng, dateVal);
        console.log('Algorithm 2 success')
        console.log(result)
        if (result && result.length > 0) {
           let currentDate = dateVal;
           let datesArr = [];
           for (let i = 0; i < result.length; i++) {
               datesArr.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + i))
           }
           for (let i = 0; i < result.length; i++) {
               ForecastService.create({
                   body: {
                       latitude: lat,
                       longitude: lng,
                       tempC: result[i],
                       date: datesArr[i]
                   }
               }).catch(err => {
                   console.log(err);
               });
           }
           return result;
       }
       else
       {
           return [];
       }
     }
    }catch(err){
        console.log(err)
        return err;
    }
    }

    buildServer() {
        var getAlgorithmFunc = this.getAlgorithm;
        this.io.on("connection", (socket: SocketIO.Socket) => {
            console.log('Client connected')
            socket.on('statistics', (data: Object) => {
                getAlgorithmFunc(data).then(res => {
                    socket.emit('recieve', res)
                })
            })
        });
        this.server = this.http.listen(3100, () => {
            console.log(`GUI-Server listen on port ${this.port}`);
        })
    }
}
