//The location manager should watch for location changes
//Everytime the user change location (e.g. 5 meter change), a new record should be added in the history
//It will have the following syntax

import { Accuracy } from "tns-core-modules/ui/enums/enums";
import { watchLocation } from "nativescript-geolocation";

/****LOCATION MANAGER
 * the main object here is the history of locations that can be added dynamically to the trace
 * Methods
 * - watchForNewStops: on location change, location should be saved. Should save time in between stops
 * 
 * 
 * 
 * 
 */
var geolocation = require("nativescript-geolocation");


 export default class{
     constructor(){
         this.langitude = 0.0;
         this.longitude = 0.0;
         this.duration = 0.0;
         this.timestamp = 0;
         this.arrayLocations = [];
         this.center = 0.0;
         this.radius = 0;
     }


     enableLocation(){
         //Start monitoring for location changes
         //geolocation.desiredAccuracy = Accuracy.high;
         //geolocation.updateDistance = 5; //5 meters changes
         //eolocation.iosAllowsBackgroundLocationUpdates = true //Requires edit in info.plist
         geolocation.enableLocationRequest(false,true).then( r => {
            //console.log(r);
            watchLocation(function(coordinates){
                global.LocationManager.arrayLocations.push({
                    "lat" : coordinates.latitude,
                    "lon" : coordinates.longitude,
                    "acc" : coordinates.horizontalAccuracy,
                    "time" : coordinates.timestamp
                })
                /***
                 * coordinates object is structured like this:
                 *  "latitude": 37.33019778,
                    "longitude": -122.02466597,
                    "altitude": 0,
                    "horizontalAccuracy": 10,
                    "verticalAccuracy": -1,
                    "speed": 3.6,
                    "direction": 87,
                    "timestamp": "2020-04-13T12:09:10.647Z",
                    "ios": {}
                 */
                //We have to write into the trace
                console.log(coordinates);
            },function(result){
                //Error callback
                console.error(result)
            },{
                desiredAccuracy : Accuracy.high,
                updateDistance: 5
            })
         });

     }

     getLocationArray(){
         return JSON.stringify(this.arrayLocations);
     }

     calculateCenterAndRadius(){

     }

     resetDay(){
        this.langitude = 0.0;
        this.longitude = 0.0;
        this.duration = 0.0;
        this.timestamp = 0;
        this.arrayLocations = [];
        this.center = 0.0;
        this.radius = 0;
     }
 }
