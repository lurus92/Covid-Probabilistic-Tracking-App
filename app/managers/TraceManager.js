/********TRACE MANAGER*******
 * The Trace Manager builds, receive and elaborate traces
 * traces are object with the following syntax:
 * trace1 = {
 *      id:         integer            Id of the trace                                          (defined by the server)
 *      date:       date               Date of the trace                                        (defined by the local app)  
 *      center:     (float, float)     Coordinates of the center of the position of the trace   (defined by the local app)
 *      radius:     float              Radius of the trace, where all movements happen          (defined by the local app)
 *      locations:  [--STOPS--]        Array of Stops                                           (defined by the local app)
 *          STOP:   Object
 *              {
 *                  latitude     float      Latitude of the specific stop                 
 *                  longitude    float      Longitude of the specific stop                 
 *                  preciceness  float      Precisess of the GPS signal
 *                  tInitial     timestamp  Time when the stop starts
 *                  tFinal       timestamp  Time when the stop ends                
 *          }
 *      probabilityToBePositive     float   Calculated Probability to be positive to COVID-19   (defined by UserManager) 
 * }
 * 
 * Methods that should be present here
 * - Send trace to server: daily, the trace of the user should be sent to server
 * - Receive Probability: receive new probability to be positive from server
 *  
 */

export default class TraceManager{
    constructor(){
        this.trace = {};

    }

    buildTrace(){
        var date = new Date();
        this.trace.day = date.getUTCDate();
        this.trace.month = date.getMonth();
        this.trace.year = date.getFullYear();
        this.trace.center = global.LocationManager.center;
        this.trace.radius = global.LocationManager.radius;
        this.trace.locations = global.LocationManager.getLocationArray();
        this.trace.probabilityToBePositive = global.UserManager.probabilityToBePositive;
        //send it to Remote
        //reset Location Manager for new trace
        global.LocationManager.resetDay();

    }
}