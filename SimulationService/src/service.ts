export class SimulationService {
    static shuffle(array: Array<any>) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    static getDaysArray(start: any, end: any) {
        for (var arr = [], dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
            arr.push(new Date(dt));
        }
        return arr;
    };
    static buildYearlyUsedJsons(array:Array<JSON>){
        var city={ name: "Haifa", lat: 34.99, lng: 32.80 };
        var date=new Date();
        let datesArr:Date[]=[];
        for(let i=1;i<=3;i++){
            let newDate=new Date(date.getFullYear()-i,date.getMonth(),date.getDate());
            datesArr.push(newDate);
        }
       
        for(let j=0;j<datesArr.length;j++){
            let switchingYears:Date=datesArr[j];
            let currentYearAndDate=switchingYears;
            for(let i=0;i<4;i++){
            currentYearAndDate=new Date(switchingYears.getFullYear(),switchingYears.getMonth(),switchingYears.getDate()-i)
            let element: any = {
                "latitude": city.lat,
                "longitude": city.lng,
                "height": Math.floor(Math.random() * 251),
                "tempC": Math.floor(Math.random() * 13 + 18),
                "atmosphericPressure": Math.floor(Math.random() * 71 + 10),
                "date": currentYearAndDate
            };
            array.push(<JSON>element);
        }   
        }
    }
    static buildUsedWeatherDataJsons(array: Array<JSON>) {
        var cities = [{ name: "Haifa", lat: 34.99, lng: 32.80 }, { name: "Tel Aviv", lat: 34.80, lng: 32.09 }, { name: "Jerusalem", lat: 35.19, lng: 31.75 }, { name: "Eilat", lat: 34.92, lng: 29.64 }, { name: "Qiryat Shmona", lat: 35.57, lng: 33.21 },
        { name: "Be'er Sheva", lat: 34.79, lng: 31.25 }, { name: "Mitzpe Ramon", lat: 34.80, lng: 30.61 }, { name: "Hadera", lat: 34.92, lng: 32.44 }]
        var date = new Date();
        var startDate = new Date(date.getFullYear(), date.getMonth() , date.getDate()-30);
        var endDate = new Date(date.getFullYear(),date.getMonth(),date.getDate()-1);
        console.log(`range is ${startDate} to ${endDate}`)
        var dateArr = SimulationService.getDaysArray(startDate, endDate);
        console.log(`date range is ${dateArr.length}`)
        for (let i = 0; i < cities.length; i++) {
           for(let j=0;j<dateArr.length;j++){
                let element: any = {
                    "latitude": cities[i].lat,
                    "longitude": cities[i].lng,
                    "height": Math.floor(Math.random() * 251),
                    "tempC": Math.floor(Math.random() * 13 + 18),
                    "atmosphericPressure": Math.floor(Math.random() * 71 + 10),
                    "date": dateArr[j]
                };
                array.push(<JSON>element);
            }
        }
    }
    static buildUnusedWeatherDataJsons(array: Array<JSON>) {
        var date = new Date();
        var startDate = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
        date.setDate(date.getDate() - 1);
        var endDate = date;
        var dateArr = SimulationService.getDaysArray(startDate, endDate);
        var counter = 0;
        for (let i = 0; i < dateArr.length; i++) {
            let element: any = {
                "latitude": Math.floor(Math.random() * 100),
                "longitude": Math.floor(Math.random() * 100),
                "height": Math.floor(Math.random() * 100),
                "tempC": Math.floor(Math.random() * ((30 - 18) + 1) + 18),
                "atmosphericPressure": Math.floor(Math.random() * ((80 - 10) + 1) + 10),
                "date": dateArr[counter++]
            };
            array.push(<JSON>element);
        }
    }
    static buildNull(array: Array<JSON>) {
        for (let i = 0; i < 30; i++) {
            let element: any = {
                null: null
            }
            array.push(<JSON>element);
        }
    }
}