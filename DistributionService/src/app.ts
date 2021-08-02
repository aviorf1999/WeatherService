import {Weather} from './model/weather';
import {plainToClass} from "class-transformer";
const express = require('express');
const weatherSchemaStrings = ["latitude", "longitude", "height", "tempC", "atmosphericPressure", "date"];
const axios = require('axios');
const minTemp=0;
const maxTemp=50;

export class App {
    app = express();
    http = require("http").Server(this.app);
    io = require("socket.io")(this.http);
    server = null;
    static weatherInstance:Weather;
    static counter = 0;

    dataArray = [];
    constructor() { this.buildServer()
    }
    
    buildServer() {
        this.io.on("connection", function (socket: any) {
            console.log("Client connected");
            socket.on("data", function (data: any) {
                App.checkElement(data);
            })
        });
        this.server = this.http.listen(3101, function () {
            console.log("listen on port 3101")
        })
    }
    static checkElement(dataElement: JSON) {
        try{
            if(dataElement)
            {
            if (!("null" in dataElement)) {
            this.weatherInstance=plainToClass(Weather,dataElement)
                if(this.weatherInstance.tempC&&this.weatherInstance.tempC>minTemp&&this.weatherInstance.tempC<maxTemp)
                {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/weather',
                data: dataElement
            })
        }
        }
        else{
            return;
        }
        }
        return;
        }
        catch(err){
            console.log(`not weather element ${dataElement}`)
        }
    }
}

        // weatherSchemaStrings.forEach(element => {
        //     if (!(element in dataElement)) {
        //         return;
        //     }
        // });
    
//     }
