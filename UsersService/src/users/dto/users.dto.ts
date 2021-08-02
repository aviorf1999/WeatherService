export class CreateUserDTO {
    public username: String;
    public password: String;
    public firstName: String;
    public lastName: String;
    public rank: String;
    public personalNumber: Number;
    public city: String;
    public age: Number;
    public tash: Number;
    public enlistmentDate: Date;
    public dob: Date;
    public pilot: String;
    constructor(username: String, password: String, firstName: String, lastName: String, rank: String, personalNumber: Number, city: String, age: Number, tash: Number, enlistmentDate: Date, dob: Date, pilot: String) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rank = rank;
        this.personalNumber = personalNumber;
        this.city = city;
        this.age = age;
        this.tash = tash;
        this.enlistmentDate = enlistmentDate;
        this.dob = dob;
        this.pilot = pilot;
    }
}