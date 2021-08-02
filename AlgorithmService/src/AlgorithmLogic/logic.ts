import { getDataForYearlyAlgorithm,getDataForLastMonth } from '../WeatherService/index'

export class AlgorithmsLogic {
    constructor() {};
    public static firstAlgorithm(lat: number, lng: number, dateToFind: Date): Promise<any> {
return new Promise(function (resolve,reject){
    let forecastResult:number=0;
    getDataForYearlyAlgorithm(lat,lng,`${dateToFind.getFullYear()}-${dateToFind.getMonth()+1}-${dateToFind.getDate()}`).then(res => {
        console.log(res.data)
        if(res.data.length>0){
            for(let i=0;i<res.data.length;i++){
                forecastResult+=res.data[i].tempC;
            }
           resolve([Math.round(forecastResult/res.data.length)])
        }
        else{
            resolve(null);
        }
    }).catch(err=>{
        reject(err);
    })

}) 
    }
    public static secondAlgorithm(lat: number, lng: number, dateToFind: Date): Promise<any> {
        return new Promise(function (resolve, reject) {
            let pastDays:any[];
            console.log(dateToFind)
                dateToFind.setDate(dateToFind.getDate()+1);

            let currentDate: Date = new Date(dateToFind.getFullYear(),dateToFind.getMonth(),dateToFind.getDate()-1);
            let startDate:Date=new Date(dateToFind.getFullYear(),dateToFind.getMonth(),dateToFind.getDate()-31);
            getDataForLastMonth(lat,lng,startDate,currentDate).then(res => {
                if(res.data.length>8)
                {
                pastDays=res.data;
                //Sorting array by date property
                pastDays=pastDays.sort(function(a,b){
                    var dateA = new Date(a.date).getTime(), dateB = new Date(b.date).getTime();
                    return dateB - dateA;
                });
               resolve(findTemp(pastDays,Math.floor(pastDays.length/10)+1,Math.floor(pastDays.length/10)+1));
            }
            else{
                // Not enough elements to recieve forecasting !!!
                resolve([]);
            }
            }).catch(err => {
                resolve(err);
            });
        })
    }
}

// TODO: loop on array to check min counter and continue the algorithm.
function findTemp(arr: any[], unknownDays: number, daysToCheck: number): number[] {
    console.log(`length :`+arr.length)
    let counter:number[]=[];
    let result:number[]=[];
for(let i=0;i<arr.length-daysToCheck-1;i++){
    counter[i]=0;
    for (let j=0;j<daysToCheck;j++) {
    counter[i]+=Math.abs(arr[i].tempC-arr[arr.length-daysToCheck+j].tempC);
    }
}
var indexOfFirstForecastDay = counter.lastIndexOf(Math.min(...counter));
for(let i=indexOfFirstForecastDay;i<indexOfFirstForecastDay+unknownDays;i++){
    result.push(arr[i].tempC);
}
return result;
}



