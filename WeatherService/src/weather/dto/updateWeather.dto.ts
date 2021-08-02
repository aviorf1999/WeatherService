export class UpdateWeatherDTO {
    public latitude?: Number;
    public longitude?: Number;
    public height?: Number;
    public tempC?: Number;
    public atmosphericPressure?: Number;
    public date?: Date;


    constructor() {
    }
    checkToEdit(obj: any) {
        if (obj.latitude) {
            this.latitude = obj.latitude;
        }
        if (obj.longitude) {
            this.longitude = obj.longitude;
        }
        if (obj.height) {
            this.height = obj.height;
        }
        if (obj.tempC) {
            this.tempC = obj.tempC;
        }
        if (obj.atmosphericPressure) {
            this.atmosphericPressure = obj.atmosphericPressure;
        }
        if (obj.date) {
            this.date = obj.date;
        }
    }
}