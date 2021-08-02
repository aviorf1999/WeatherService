export class CreateForecastDTO {
    public latitude: Number;
    public longitude: Number;
    public tempC: Number;
    public date: Date;
    constructor(latitude: Number, longitude: Number, tempC: Number, date: Date) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.tempC = tempC;
        this.date = date;
    }
}