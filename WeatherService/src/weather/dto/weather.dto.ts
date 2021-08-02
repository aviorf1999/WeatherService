export class CreateWeatherDTO {
    public latitude: Number;
    public longitude: Number;
    public height: Number;
    public tempC: Number;
    public atmosphericPressure: Number;
    public date: Date;


    constructor(latitude: Number, longitude: Number, height: Number, tempC: Number, atmosphericPressure: Number, date: Date) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.height = height;
        this.tempC = tempC;
        this.atmosphericPressure = atmosphericPressure;
        this.date = date;
    }
}