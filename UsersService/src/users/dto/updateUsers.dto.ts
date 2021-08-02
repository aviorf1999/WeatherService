export class UpdateUserDTO {
    public username?: String;
    public password?: String;
    public firstName?: String;
    public lastName?: String;
    public rank?: String;
    public personalNumber?: Number;
    public city?: String;
    public age?: Number;
    public tash?: Number;
    public enlistmentDate?: Date;
    public dob?: Date;
    public pilot?: String;
    constructor() { }
    checkToEdit(obj: any) {
        if (obj.username) {
            this.username = obj.username;
        }
        if (obj.password) {
            this.password = obj.password;
        }
        if (obj.firstName) {
            this.firstName = obj.firstName;
        }
        if (obj.lastName) {
            this.lastName = obj.lastName;
        }
        if (obj.rank) {
            this.rank = obj.rank;
        }
        if (obj.personalNumber) {
            this.personalNumber = obj.personalNumber;
        }
        if (obj.city) {
            this.city = obj.city;
        }
        if (obj.age) {
            this.age = obj.age;
        }
        if (obj.tash) {
            this.tash = obj.tash;
        }
        if (obj.enlistmentDate) {
            this.enlistmentDate = obj.enlistmentDate;
        }
        if (obj.dob) {
            this.dob = obj.dob;
        }
        if (obj.pilot) {
            this.pilot = obj.pilot;
        }
    }
}