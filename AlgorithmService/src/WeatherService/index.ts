import axios, { AxiosPromise } from "axios";

export function getDataForLastMonth(latitude:number,longitude:number,startDate:Date,endDate:Date): AxiosPromise<any[]> {
    return axios({
        method: 'get',
        url: `http://localhost:3000/weather/${latitude}/${longitude}/${startDate}/${endDate}`
    });
}
    export function getDataForYearlyAlgorithm(latitude:number,longitude:number,date:String): AxiosPromise<any> {
        return axios({
            method: 'get',
            url: `http://localhost:3000/weather/${latitude}/${longitude}/${date}`
        });
}