import {JsonObject, JsonProperty} from "json2typescript";
@JsonObject("Weather")
export class Weather{
    @JsonProperty('latitude',Number)
    latitude:number | undefined ;
    @JsonProperty('longitude',Number)
    longitude:number | undefined;
    @JsonProperty('height',Number)
    height:number | undefined;
    @JsonProperty('tempC',Number)
    tempC:number | undefined;
    @JsonProperty('atmosphericPressure',Number)
    atmosphericPressure:number | undefined;
    @JsonProperty('date',Date)
    date:Date | undefined;

    
}