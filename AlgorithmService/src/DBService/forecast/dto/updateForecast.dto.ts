export class UpdateForecastDTO {
    public latitude?: Number;
    public longitude?: Number;
    public tempC?: Number;
    public date?: Date;
    constructor() { }
    checkToEdit(obj: any) {
        if (obj.latitude) {
            this.latitude = obj.latitude;
        }
        if (obj.longitude) {
            this.longitude = obj.longitude;
        }
        if (obj.tempC) {
            this.tempC = obj.tempC;
        }
        if (obj.date) {
            this.date = obj.date;
        }
    }
}