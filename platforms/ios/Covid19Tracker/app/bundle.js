require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./home/home-page.css": "./home/home-page.css",
	"./home/home-page.js": "./home/home-page.js",
	"./home/home-page.xml": "./home/home-page.xml",
	"./home/home-view-model.js": "./home/home-view-model.js",
	"./managers/LocationManager.js": "./managers/LocationManager.js",
	"./managers/MathManager.js": "./managers/MathManager.js",
	"./managers/TraceManager.js": "./managers/TraceManager.js",
	"./managers/UserManager.js": "./managers/UserManager.js",
	"./welcome-settings/welcome-page.css": "./welcome-settings/welcome-page.css",
	"./welcome-settings/welcome-page.js": "./welcome-settings/welcome-page.js",
	"./welcome-settings/welcome-page.xml": "./welcome-settings/welcome-page.xml",
	"./welcome-settings/welcome-view-model.js": "./welcome-settings/welcome-view-model.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"welcome-settings/welcome-page\"></Frame>\r\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/blue.css"));
global.registerModule("@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/blue.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/blue.css\""},{"type":"comment","comment":" Place any CSS rules you want to apply on both iOS and Android here.\r\nThis is where the vast majority of your CSS code goes. "}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _managers_MathManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./managers/MathManager.js");
/* harmony import */ var _managers_UserManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./managers/UserManager.js");
/* harmony import */ var _managers_LocationManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./managers/LocationManager.js");
/* harmony import */ var _managers_TraceManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./managers/TraceManager.js");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|kt|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
const localize = __webpack_require__("../node_modules/nativescript-localize/index.js");
application.setResources({ L: localize });



//var MathManagerModule = require("./managers/MathManager.js");

global.MathManager = new _managers_MathManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

global.UserManager = new _managers_UserManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

global.LocationManager = new _managers_LocationManager_js__WEBPACK_IMPORTED_MODULE_2__["default"]();

global.TraceManager = new _managers_TraceManager_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

//console.log(JSON.stringify(MathManagerModule))

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["#main-container"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".action-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"white"}]},{"type":"rule","selectors":[".action-bar label"],"declarations":[{"type":"declaration","property":"color","value":"#707070"}]},{"type":"rule","selectors":["#disclaimer-text"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"padding","value":"10"}]},{"type":"rule","selectors":["#update-button"],"declarations":[{"type":"declaration","property":"margin-top","value":"20"},{"type":"declaration","property":"background-color","value":"#FFEB3B"},{"type":"declaration","property":"color","value":"#707070"},{"type":"declaration","property":"width","value":"200"},{"type":"declaration","property":"border-radius","value":"30"}]},{"type":"rule","selectors":[".card"],"declarations":[{"type":"declaration","property":"margin","value":"10"},{"type":"declaration","property":"border-radius","value":"10"},{"type":"declaration","property":"background-color","value":"#F44336"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"padding","value":"15"},{"type":"declaration","property":"text-align","value":"left"}]},{"type":"rule","selectors":[".card-title"],"declarations":[{"type":"declaration","property":"font-size","value":"20"}]},{"type":"rule","selectors":[".card-description"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]},{"type":"rule","selectors":[".card-cta"],"declarations":[{"type":"declaration","property":"width","value":"150"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":["#positive-percentage"],"declarations":[{"type":"declaration","property":"margin","value":"10"},{"type":"declaration","property":"margin-top","value":"80"},{"type":"declaration","property":"font-size","value":"80"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":["#positive-text"],"declarations":[{"type":"declaration","property":"margin-top","value":"0"}]},{"type":"rule","selectors":["#fatality-percentage"],"declarations":[{"type":"declaration","property":"font-size","value":"50"},{"type":"declaration","property":"margin-left","value":"30"},{"type":"declaration","property":"margin-right","value":"10"},{"type":"declaration","property":"margin-top","value":"10"},{"type":"declaration","property":"margin-bottom","value":"10"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./home/home-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const HomeViewModel = __webpack_require__("./home/home-view-model.js");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();

    //That's our main
    var posPercentage = page.getViewById("positive-percentage");
    posPercentage.text = (global.UserManager.probabilityToBePositive * 100).toFixed(1) + "%";
    

}

exports.onNavigatingTo = onNavigatingTo;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./home/home-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page\r\n    navigatingTo=\"onNavigatingTo\"  \r\n    xmlns=\"http://schemas.nativescript.org/tns.xsd\">\r\n\r\n    <ActionBar class=\"action-bar\">\r\n        <Label text=\"Covid19Tracker\"></Label>\r\n    </ActionBar>\r\n\r\n    <StackLayout orientation=\"vertical\" id=\"main-container\">\r\n                <Label id=\"disclaimer-text\" text=\"{{ L('disclaimer-text') }}\" textWrap = \"true\"></Label>\r\n\r\n        <Label id=\"positive-percentage\" text=\"0%\"></Label>\r\n        <Label id=\"positive-text\" text=\"{{ L('positive-text') }}\"></Label>\r\n        <Button id=\"update-button\" text=\"{{ L('update-button') }}\"></Button>\r\n\r\n        <StackLayout class=\"card\" orientation=\"vertical\">\r\n            <Label class=\"card-title\" text=\"{{ L('card-title-warning') }}\"></Label>\r\n            <Label class=\"card-description\" text=\"{{ L('card-description-profile') }}\" textWrap=\"true\"></Label>\r\n            <StackLayout orientation=\"horizontal\">\r\n                <Label id=\"fatality-percentage\" text=\"10%\"></Label>\r\n                <Label id=\"user-data-text\" text=\"Sesso: Maschile\"></Label>\r\n            </StackLayout>\r\n            <Button class=\"card-cta\" text=\"{{ L('card-cta-update') }}\"></Button>\r\n        </StackLayout>\r\n    </StackLayout>\r\n</Page>\r\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./home/home-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./home/home-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");

function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = HomeViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./home/home-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./home/home-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./managers/LocationManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var tns_core_modules_ui_enums_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/enums.js");
/* harmony import */ var tns_core_modules_ui_enums_enums__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums_enums__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");
/* harmony import */ var nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__);
//The location manager should watch for location changes
//Everytime the user change location (e.g. 5 meter change), a new record should be added in the history
//It will have the following syntax




/****LOCATION MANAGER
 * the main object here is the history of locations that can be added dynamically to the trace
 * Methods
 * - watchForNewStops: on location change, location should be saved. Should save time in between stops
 * 
 * 
 * 
 * 
 */
var geolocation = __webpack_require__("../node_modules/nativescript-geolocation/geolocation.js");


 /* harmony default export */ __webpack_exports__["default"] = (class{
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
            Object(nativescript_geolocation__WEBPACK_IMPORTED_MODULE_1__["watchLocation"])(function(coordinates){
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
                desiredAccuracy : tns_core_modules_ui_enums_enums__WEBPACK_IMPORTED_MODULE_0__["Accuracy"].high,
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
 });
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./managers/LocationManager.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./managers/LocationManager.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./managers/MathManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MathManager; });
/* harmony import */ var _UserManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./managers/UserManager.js");
//var x = require("norm-dist");



class MathManager{
    constructor(){
        this.name = "MathManager";
        //Data from Imperial College March Studies
        //TODO: update this from a remote JSON
        this.symptoms = {
            fever: {
                meanTimeFromSymptom : 0.77,
                SDTimeFromSymptom : 1.89,
                proportionOver60 : 0.35,
                proportionUnder60 : 0.38
            },
            cough: {
                meanTimeFromSymptom : 0.71,
                SDTimeFromSymptom : 2.16,
                proportionOver60 : 0.26,
                proportionUnder60 : 0.27
            },
            fatigue: {
                meanTimeFromSymptom : 1.66,
                SDTimeFromSymptom : 3.03,
                proportionOver60 : 0.09,
                proportionUnder60 : 0.07
            },
            headache: {
                meanTimeFromSymptom : 1.18,
                SDTimeFromSymptom : 2.16,
                proportionOver60 : 0.01,
                proportionUnder60 : 0.04
            },
            other: {
                meanTimeFromSymptom : 1.11,
                SDTimeFromSymptom : 1.81,
                proportionOver60 : 0.02,
                proportionUnder60 : 0.03
            },
            chill: {
                meanTimeFromSymptom : 0.43,
                SDTimeFromSymptom : 1.09,
                proportionOver60 : 0.02,
                proportionUnder60 : 0.02
            },
            nasalCongestion : {
                meanTimeFromSymptom : 0.73,
                SDTimeFromSymptom : 1.49,
                proportionOver60 : 0.01,
                proportionUnder60 : 0.04
            },
            nausea: {
                meanTimeFromSymptom : 1.18,
                SDTimeFromSymptom : 1.78,
                proportionOver60 : 0.01,
                proportionUnder60 : 0.02
            },
            diarrhoea: {
                meanTimeFromSymptom : 3.17,
                SDTimeFromSymptom : 3.9,
                proportionOver60 : 0.02,
                proportionUnder60 : 0.02
            },
            walkingDifficulty: {
                meanTimeFromSymptom : 4.25,
                SDTimeFromSymptom : 4.25,
                proportionOver60 : 0.02,
                proportionUnder60 : 0.02
            },
            ili:{
                meanTimeFromSymptom : 0.00,
                SDTimeFromSymptom : 0.00,
                proportionOver60 : 0.01,
                proportionUnder60 : 0.01
            },
            lackOfAppetite: {
                meanTimeFromSymptom : 3.12,
                SDTimeFromSymptom : 3.98,
                proportionOver60 : 0.02,
                proportionUnder60 : 0.02
            },
            bronchitis : {
                meanTimeFromSymptom : 8.5,
                SDTimeFromSymptom : 6.35,
                proportionOver60 : 0.01,
                proportionUnder60 : 0.01
            },
            chestPain: {
                meanTimeFromSymptom : 0,
                SDTimeFromSymptom : 0.01,
                proportionOver60 : 0.01,
                proportionUnder60 : 0.01
            }
        }
        this.normDistributionModule = __webpack_require__("../node_modules/normal-distribution/lib/NormalDistribution.js");
        this.normDistribution = this.normDistributionModule.default;
    }

    calculateProbabilityThatOneSymptomIsFromCOVID(symptomName, patientOver60, daysOfSymptom){
        var probability = 0.0;
        //Distribution of specific mean and sd
        var normal = new this.normDistribution(this.symptoms[symptomName].meanTimeFromSymptom, this.symptoms[symptomName].SDTimeFromSymptom);
        probability = normal.pdf(daysOfSymptom);
        return probability;
        //UserManager.symptoms[symptomName].probabilityToBeCausedByCOVID = probability;
    }

    calculateOverallProbabilityToHaveCOVID(){
        //HYP: AVG of the probabilities
        var probability = 0;
        var counter = 0;
        for (var i in global.UserManager.symptoms){
            probability += global.UserManager.symptoms[i].probabilityToBeCausedByCOVID;
            counter ++;
        }
        return probability/counter;
    }

    calcualteMortality(){
        return 0;
    }

    

}


; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./managers/MathManager.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./managers/MathManager.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./managers/TraceManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TraceManager; });
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

class TraceManager{
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
}; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./managers/TraceManager.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./managers/TraceManager.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./managers/UserManager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserManager; });
const appSettings = __webpack_require__("../node_modules/@nativescript/core/application-settings/application-settings.js");

class UserManager{
    constructor(){
        if (!this.restoreFromDisk()){
            //this.name = "UserManager"
            this.status = "uninitialized";
            this.patientOver60 = false;
            this.age = 0;
            this.symptoms = {};
            /*Symptoms obj should have the syntax 
            this.symptoms = {
                symptom : {
                    timePresent : float;
                    probabilityToBeCOVID: <to Be Calculated by Math Manager>
                }
            }
            */
        this.probabilityToBePositive = 0;
        this.fatality = 0.00;
        }
    }

    updateAge(yearBornString){
        var yearBorn = parseInt(yearBornString);
        var date = new Date();
        this.age = date.getFullYear() - yearBorn;
        if (this.age > 60) this.patientOver60 = true;
    }

    storeUser(){
        appSettings.setString("UserData",JSON.stringify(global.UserManager));
    }

    restoreFromDisk(){
        var restoredData = appSettings.getString("UserData");
        if (!restoredData) return false;
        var restoredUM = JSON.parse(restoredData);
        this.status = restoredUM.status;
        this.patientOver60 = restoredUM.patientOver60;
        this.age = restoredUM.age;
        this.symptoms = restoredUM.symptoms;
        this.probabilityToBePositive = restoredUM.probabilityToBePositive;
        this.fatality = restoredUM.fatality;
        return true;
    }

    setActive(){
        this.status = "initialized";
        this.storeUser();
    }
}


; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./managers/UserManager.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./managers/UserManager.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"app.js","android":{"v8Flags":"--expose_gc","markingMode":"none"}};

/***/ }),

/***/ "./welcome-settings/welcome-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".action-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"white"}]},{"type":"rule","selectors":[".action-bar label"],"declarations":[{"type":"declaration","property":"color","value":"#707070"}]},{"type":"rule","selectors":[".welcome-container"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"height","value":"100%"},{"type":"declaration","property":"background-color","value":"white"}]},{"type":"rule","selectors":[".welcome-title"],"declarations":[{"type":"declaration","property":"margin-top","value":"50"},{"type":"declaration","property":"font-size","value":"40"},{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".welcome-text"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"margin","value":"10"}]},{"type":"rule","selectors":[".welcome-button"],"declarations":[{"type":"declaration","property":"margin-top","value":"20"},{"type":"declaration","property":"background-color","value":"green"},{"type":"declaration","property":"color","value":"white"},{"type":"declaration","property":"border-radius","value":"20"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"bold"}]},{"type":"rule","selectors":[".form-row"],"declarations":[{"type":"declaration","property":"text-align","value":"center"},{"type":"declaration","property":"margin-left","value":"30"},{"type":"declaration","property":"margin-right","value":"30"}]},{"type":"rule","selectors":[".form-row TextField"],"declarations":[{"type":"declaration","property":"width","value":"100%"},{"type":"declaration","property":"text-align","value":"left"},{"type":"declaration","property":"border-style","value":"solid"},{"type":"declaration","property":"border-width","value":"1"},{"type":"declaration","property":"border-radius","value":"10"},{"type":"declaration","property":"padding-left","value":"10"}]},{"type":"rule","selectors":["#third-container"],"declarations":[{"type":"declaration","property":"left","value":"500"}]},{"type":"rule","selectors":["#second-container"],"declarations":[{"type":"declaration","property":"left","value":"500"},{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":["#syntoms-grid"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":["#syntoms-grid Button"],"declarations":[{"type":"declaration","property":"width","value":"140"},{"type":"declaration","property":"height","value":"140"},{"type":"declaration","property":"background-color","value":"lightgray"},{"type":"declaration","property":"border-radius","value":"30"},{"type":"declaration","property":"color","value":"black"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./welcome-settings/welcome-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./welcome-settings/welcome-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./welcome-settings/welcome-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__("../node_modules/nativescript-dom/dom.js");
var dialogs = __webpack_require__("../node_modules/@nativescript/core/ui/dialogs/dialogs.js");


const HomeViewModel = __webpack_require__("./welcome-settings/welcome-view-model.js");
const Button = __webpack_require__("../node_modules/@nativescript/core/ui/button/button.js").Button;

function onNavigatingTo(args) {



    const page = args.object;
    page.bindingContext = new HomeViewModel();

    //That's our main
    //If the user is present I should immediately go to the home page.



    //Set up some listeners to the buttons
    var enums = __webpack_require__("../node_modules/@nativescript/core/ui/enums/enums.js");

    //page.frame.navigate("/home/home-page");

    var firstButton = page.getViewById("button1");
    firstButton.on("tap",function(){
        var secondContainer = page.getViewById("second-container");
        //Creation of the buttons
        var buttonContainer = page.getViewById("syntoms-grid");
        var r = 0;
        var c = 1;
        for (var i in global.MathManager.symptoms){
            const gridButton = new Button();
            gridButton.text = i;
            gridButton.className = "button-disease"
            gridButton.row = r;
            gridButton.col = c;
            gridButton.symptomName = i;
            buttonContainer.addChild(gridButton);
            c++;
            if (c>2){ c = 1; r++ }
        }
        secondContainer.animate({
            translate: { x: -500, y: 0},
            duration: 1000,
            curve: enums.AnimationCurve.easeIn
        });
        enableButtons();
    },this)
    var secondButton = page.getViewById("button2");
    secondButton.on("tap",function(){
        //Animation + update of the age
        UserManager.updateAge(getElementById("year-input").text);
        UserManager.probabilityToBePositive = MathManager.calculateOverallProbabilityToHaveCOVID();
        //Animation
        var thirdContainer = page.getViewById("third-container");
        thirdContainer.animate({
            translate: { x: -500, y: 0},
            duration: 1000,
            curve: enums.AnimationCurve.easeIn
        });
    },this);
    var thirdButton = page.getViewById("button3");
    thirdButton.on("tap",function(){
        //call to locationManager
        global.LocationManager.enableLocation();
        global.UserManager.setActive(); 
        page.frame.navigate("/home/home-page");
      
    })
    function enableButtons(){
        var buttonDiseaseArray = getElementsByClassName("button-disease");
        console.log(buttonDiseaseArray.length);
        console.log("Ciao");
        for (var i = 0; i<buttonDiseaseArray.length; i++){
            buttonDiseaseArray[i].on("tap",function(){
                //console.log(JSON.stringify(this));
                var self = this;
                if (this.symptomAlreadyAdded){
                    dialogs.prompt({
                        title: "Vuoi rimuovere il sintomo?",
                        okButtonText: "Sì",
                        cancelButtonText: "No",
                    }).then(function(r){
                        if (r.result){
                            self.backgroundColor = "lightgray";
                            delete global.UserManager.symptoms[self.symptomName];
                            self.symptomAlreadyAdded = false;
                        }
                    })
                }else{
                    dialogs.prompt({
                        title: "Da quanti giorni mostri il sintomo: "+this.symptomName+"?",
                        message: "Utilizza un valore numerico per favore",
                        okButtonText: "OK",
                        cancelButtonText: "Anulla",
                        inputType: dialogs.inputType.text
                    }).then(function (r) {
                        //r.result = false (cancel)
                        //r.result = true (ok)
                        if (r.result){
                            console.log(self);
                            //TODO: validation for r.text
                            global.UserManager.symptoms[self.symptomName] = {};
                            global.UserManager.symptoms[self.symptomName].timePresent = parseFloat(r.text);
                            global.UserManager.symptoms[self.symptomName].probabilityToBeCausedByCOVID = MathManager.calculateProbabilityThatOneSymptomIsFromCOVID(self.symptomName, false, parseFloat(r.text));
                            //MathManager.calculateProbabilityThatOneSymptomIsFromCOVID(self.symptomName, false, parseFloat(r.text));
                            self.backgroundColor = "green";
                            self.text = self.text + " since " +r.text+ "days";
                            self.symptomAlreadyAdded = true;
                        }
                        //console.log("Dialog result: " + r.result + ", text: " + r.text);
                    });
                }

            },buttonDiseaseArray[i])
        }
    }
   
}

function onPageLoaded(args){
    const page = args.object;
    console.log("Welcome Page Loaded");
    if (global.UserManager.status == "initialized")
        page.frame.navigate("/home/home-page");


}

exports.onNavigatingTo = onNavigatingTo;
exports.onPageLoaded = onPageLoaded;

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./welcome-settings/welcome-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./welcome-settings/welcome-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./welcome-settings/welcome-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page\r\n    navigatingTo=\"onNavigatingTo\"  \r\n    loaded=\"onPageLoaded\"\r\n    xmlns=\"http://schemas.nativescript.org/tns.xsd\">\r\n\r\n    <ActionBar class=\"action-bar\">\r\n        <Label text=\"COVID-19 Tracker\"></Label>\r\n    </ActionBar>\r\n\r\n    <AbsoluteLayout>\r\n\r\n    <StackLayout orientation=\"vertical\" id=\"main-container\" class=\"welcome-container\">\r\n        <Label class=\"welcome-title\" text=\"Benvenuto\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description\" text=\"Questa app ti permetterà di vedere la tua probabilità di positività alla malattia COVID-19, in base al tuo profilo medico e ai tuoi spostamenti\" textWrap = \"true\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description1\" text=\"Questo aiuterà te, e le persone che ti sono vicino, a capire come comportarti durante questa emergenza\" textWrap = \"true\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description2\" text=\"Ricorda sempre che quest'app non sostituisce in alcun modo un parere medico e tutti i suoi dati sono puramente indicativi\" textWrap = \"true\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description3\" text=\"Se ti senti male, va da un medico\" textWrap = \"true\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description4\" text=\"E se stai bene, limita i tuoi movimenti il più possibile.\" textWrap = \"true\"></Label>\r\n        <Button class=\"welcome-button\" id=\"button1\" text=\"Ho capito\"></Button>\r\n    </StackLayout>\r\n\r\n    <ScrollView id=\"second-container\" class=\"welcome-container\">\r\n    <StackLayout orientation=\"vertical\"  >\r\n        <Label class=\"welcome-title\" text=\"Il mio profilo\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description\" text=\"Per poter fornirti una stima efficace, l'app deve sapere più informazioni mediche su di te.\" textWrap = \"true\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description\" text=\"Queste informazioni saranno salvate su questo telefono e non saranno mai condivise con nessuno\" textWrap = \"true\"></Label>\r\n        <DockLayout orientation=\"horizontal\" class=\"form-row\">\r\n            <Label text=\"Anno della tua nascita\" dock=\"left\" id=\"year-field\" class=\"welcome-text\" ></Label>\r\n            <TextField class=\"welcome-input\" id=\"year-input\" hint=\"Inserisci anno\" keyboardType=\"phone\"></TextField>\r\n            <!--ListPicker items=\"{{ [1,2 ]}}\" class=\"picker\" textField=\"year-field\"/-->\r\n        </DockLayout>\r\n        <Label class=\"welcome-text\" id=\"welcome-other-synthoms\" text=\"Hai avuto qualcuno di questi sintomi ultimamente?\" textWrap = \"true\"></Label>\r\n            <GridLayout id=\"syntoms-grid\" columns=\"*,150, 150,*\" rows=\"150, 150, 150,150, 150, 150,150\"  >\r\n            <!--\r\n                <Button class=\"button-disease\" text=\"Febbre\" row=\"0\" col=\"1\" ></Button>\r\n                <Button text=\"Tosse, gola secca\" row=\"0\" col=\"2\"></Button>\r\n                <Button text=\"Fatica\" row=\"1\" col=\"1\" ></Button>\r\n                <Button text=\"Congestione nasale\" row=\"1\" col=\"2\" ></Button>\r\n                <Button text=\"Nausea\" row=\"2\" col=\"1\" ></Button>\r\n                <Button text=\"Confusione\" row=\"2\" col=\"2\"></Button>\r\n            -->\r\n            </GridLayout>\r\n          <Button class=\"welcome-button\" id=\"button2\" text=\"Avanti\"></Button>\r\n    </StackLayout>\r\n    </ScrollView>\r\n\r\n\r\n    <StackLayout orientation=\"vertical\" id=\"third-container\" class=\"welcome-container\">\r\n        <Label class=\"welcome-title\" text=\"La tua posizione\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description\" text=\"L'applicazione utilizza la tua posizione per monitorare i tuoi spostamenti e capire se vieni a contatto con persone contagiate\" textWrap = \"true\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description\" text=\"Per permettere questa operazione i tuoi spostamenti vengono anonimizzati e confrontati con quelli di altri utenti\" textWrap = \"true\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description\" text=\"Per far questo, però, devi autorizzare l'applicazione a utilizzare la tua posizione, sempre, anche quando è chiusa\" textWrap = \"true\"></Label>\r\n        <Label class=\"welcome-text\" id=\"welcome-description\" text=\"Se per te va bene tutto ciò, seleziona Clicca sul pulsante e clicca su 'SEMPRE'\" textWrap = \"true\"></Label>\r\n        \r\n        <Button class=\"welcome-button\" id=\"button3\" text=\"Attiva Localizzazione\"></Button>\r\n    </StackLayout>\r\n\r\n    </AbsoluteLayout>\r\n\r\n\r\n</Page>\r\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./welcome-settings/welcome-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./welcome-settings/welcome-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./welcome-settings/welcome-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const observableModule = __webpack_require__("../node_modules/@nativescript/core/data/observable/observable.js");

function HomeViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = HomeViewModel;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./welcome-settings/welcome-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./welcome-settings/welcome-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS1wYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbWFuYWdlcnMvTG9jYXRpb25NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL21hbmFnZXJzL01hdGhNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL21hbmFnZXJzL1RyYWNlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9tYW5hZ2Vycy9Vc2VyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vd2VsY29tZS1zZXR0aW5ncy93ZWxjb21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vd2VsY29tZS1zZXR0aW5ncy93ZWxjb21lLXBhZ2UueG1sIiwid2VicGFjazovLy8uL3dlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS12aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw2REFBNkQ7QUFDeEYsS0FBSztBQUNMLEM7Ozs7Ozs7OztBQzNJQSxpK0VBQWkrRSxTQUFTLDh0RTtBQUMxK0UsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsOERBQThEO0FBQ3pGLEtBQUs7QUFDTCxDOzs7Ozs7OztBQ1JBLHVFQUF5QixtQkFBTyxDQUFDLGtFQUFrQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLG1FQUFtRTtBQUM5RixLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSB7IC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBpZDtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAtcm9vdC54bWxcIjogXCIuL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL2hvbWUvaG9tZS1wYWdlLmNzc1wiOiBcIi4vaG9tZS9ob21lLXBhZ2UuY3NzXCIsXG5cdFwiLi9ob21lL2hvbWUtcGFnZS5qc1wiOiBcIi4vaG9tZS9ob21lLXBhZ2UuanNcIixcblx0XCIuL2hvbWUvaG9tZS1wYWdlLnhtbFwiOiBcIi4vaG9tZS9ob21lLXBhZ2UueG1sXCIsXG5cdFwiLi9ob21lL2hvbWUtdmlldy1tb2RlbC5qc1wiOiBcIi4vaG9tZS9ob21lLXZpZXctbW9kZWwuanNcIixcblx0XCIuL21hbmFnZXJzL0xvY2F0aW9uTWFuYWdlci5qc1wiOiBcIi4vbWFuYWdlcnMvTG9jYXRpb25NYW5hZ2VyLmpzXCIsXG5cdFwiLi9tYW5hZ2Vycy9NYXRoTWFuYWdlci5qc1wiOiBcIi4vbWFuYWdlcnMvTWF0aE1hbmFnZXIuanNcIixcblx0XCIuL21hbmFnZXJzL1RyYWNlTWFuYWdlci5qc1wiOiBcIi4vbWFuYWdlcnMvVHJhY2VNYW5hZ2VyLmpzXCIsXG5cdFwiLi9tYW5hZ2Vycy9Vc2VyTWFuYWdlci5qc1wiOiBcIi4vbWFuYWdlcnMvVXNlck1hbmFnZXIuanNcIixcblx0XCIuL3dlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS1wYWdlLmNzc1wiOiBcIi4vd2VsY29tZS1zZXR0aW5ncy93ZWxjb21lLXBhZ2UuY3NzXCIsXG5cdFwiLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS5qc1wiOiBcIi4vd2VsY29tZS1zZXR0aW5ncy93ZWxjb21lLXBhZ2UuanNcIixcblx0XCIuL3dlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS1wYWdlLnhtbFwiOiBcIi4vd2VsY29tZS1zZXR0aW5ncy93ZWxjb21lLXBhZ2UueG1sXCIsXG5cdFwiLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtdmlldy1tb2RlbC5qc1wiOiBcIi4vd2VsY29tZS1zZXR0aW5ncy93ZWxjb21lLXZpZXctbW9kZWwuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8a3R8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcIndlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS1wYWdlXFxcIj48L0ZyYW1lPlxcclxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC1yb290LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2FwcC1yb290LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcIiwgKCkgPT4gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIpKTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7bW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwiaW1wb3J0XCIsXCJpbXBvcnRcIjpcIlxcXCJ+QG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcXFwiXCJ9LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgUGxhY2UgYW55IENTUyBydWxlcyB5b3Ugd2FudCB0byBhcHBseSBvbiBib3RoIGlPUyBhbmQgQW5kcm9pZCBoZXJlLlxcclxcblRoaXMgaXMgd2hlcmUgdGhlIHZhc3QgbWFqb3JpdHkgb2YgeW91ciBDU1MgY29kZSBnb2VzLiBcIn1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2FwcC5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLXJlZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgICAgICBjb25zdCBobXJVcGRhdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2htclwiKS5obXJVcGRhdGU7XG4gICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jID0gZ2xvYmFsLl9fb25MaXZlU3luYztcblxuICAgICAgICAgICAgZ2xvYmFsLl9fb25MaXZlU3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgaG90IHVwZGF0ZWQgb24gTGl2ZVN5bmNcbiAgICAgICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoID0gZnVuY3Rpb24oeyB0eXBlLCBwYXRoIH0gPSB7fSkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBob3QgdXBkYXRlcyBhcmUgYXBwbGllZCwgYXNrIHRoZSBtb2R1bGVzIHRvIGFwcGx5IHRoZSBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbC5fX2NvcmVNb2R1bGVzTGl2ZVN5bmMoeyB0eXBlLCBwYXRoIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIGluaXRpYWwgYXBwIHN0YXJ0XG4gICAgICAgICAgICBobXJVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoXCJ+L1wiLCB0cnVlLCAvKD88IVxcYkFwcF9SZXNvdXJjZXNcXGIuKikoPzwhXFwuXFwvXFxidGVzdHNcXGJcXC8uKj8pXFwuKHhtbHxjc3N8anN8a3R8KD88IVxcLmRcXC4pdHN8KD88IVxcYl9bXFx3LV0qXFwuKXNjc3MpJC8pO1xuICAgICAgICAgICAgZ2xvYmFsLnJlZ2lzdGVyV2VicGFja01vZHVsZXMoY29udGV4dCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSE1SOiBBY2NlcHQgbW9kdWxlICdcIiArIGNvbnRleHQuaWQgKyBcIicgZnJvbSAnXCIgKyBtb2R1bGUuaWQgKyBcIidcIik7IFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7XG4gICAgICAgIGNvbnN0IGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XHJcbmNvbnN0IGxvY2FsaXplID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1sb2NhbGl6ZVwiKTtcclxuYXBwbGljYXRpb24uc2V0UmVzb3VyY2VzKHsgTDogbG9jYWxpemUgfSk7XHJcblxyXG5cclxuXHJcbi8vdmFyIE1hdGhNYW5hZ2VyTW9kdWxlID0gcmVxdWlyZShcIi4vbWFuYWdlcnMvTWF0aE1hbmFnZXIuanNcIik7XHJcbmltcG9ydCBNYXRoTWFuYWdlck1vZHVsZSBmcm9tIFwiLi9tYW5hZ2Vycy9NYXRoTWFuYWdlci5qc1wiO1xyXG5nbG9iYWwuTWF0aE1hbmFnZXIgPSBuZXcgTWF0aE1hbmFnZXJNb2R1bGUoKTtcclxuaW1wb3J0IFVzZXJNYW5hZ2VyTW9kdWxlIGZyb20gXCIuL21hbmFnZXJzL1VzZXJNYW5hZ2VyLmpzXCI7XHJcbmdsb2JhbC5Vc2VyTWFuYWdlciA9IG5ldyBVc2VyTWFuYWdlck1vZHVsZSgpO1xyXG5pbXBvcnQgTG9jYXRpb25NYW5hZ2VyTW9kdWxlIGZyb20gXCIuL21hbmFnZXJzL0xvY2F0aW9uTWFuYWdlci5qc1wiO1xyXG5nbG9iYWwuTG9jYXRpb25NYW5hZ2VyID0gbmV3IExvY2F0aW9uTWFuYWdlck1vZHVsZSgpO1xyXG5pbXBvcnQgVHJhY2VNYW5hZ2VyTW9kdWxlIGZyb20gXCIuL21hbmFnZXJzL1RyYWNlTWFuYWdlci5qc1wiO1xyXG5nbG9iYWwuVHJhY2VNYW5hZ2VyID0gbmV3IFRyYWNlTWFuYWdlck1vZHVsZSgpO1xyXG5cclxuLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShNYXRoTWFuYWdlck1vZHVsZSkpXHJcblxyXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiBcImFwcC1yb290XCIgfSk7XHJcblxyXG4vKlxyXG5EbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3RcclxuYmUgZXhlY3V0ZWQgb24gaU9TLlxyXG4qL1xyXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiI21haW4tY29udGFpbmVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hY3Rpb24tYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFjdGlvbi1iYXIgbGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM3MDcwNzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIjZGlzY2xhaW1lci10ZXh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIjdXBkYXRlLWJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjRkZFQjNCXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjNzA3MDcwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIyMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY2FyZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpblwiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjEwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNGNDQzMzZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjE1XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY2FyZC10aXRsZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmNhcmQtZGVzY3JpcHRpb25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5jYXJkLWN0YVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiMTUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIiNwb3NpdGl2ZS1wZXJjZW50YWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiODBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCI4MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIjcG9zaXRpdmUtdGV4dFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiI2ZhdGFsaXR5LXBlcmNlbnRhZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCI1MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1sZWZ0XCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxMFwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtcGFnZS5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL2hvbWUvaG9tZS1wYWdlLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJjb25zdCBIb21lVmlld01vZGVsID0gcmVxdWlyZShcIi4vaG9tZS12aWV3LW1vZGVsXCIpO1xyXG5cclxuZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xyXG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIb21lVmlld01vZGVsKCk7XHJcblxyXG4gICAgLy9UaGF0J3Mgb3VyIG1haW5cclxuICAgIHZhciBwb3NQZXJjZW50YWdlID0gcGFnZS5nZXRWaWV3QnlJZChcInBvc2l0aXZlLXBlcmNlbnRhZ2VcIik7XHJcbiAgICBwb3NQZXJjZW50YWdlLnRleHQgPSAoZ2xvYmFsLlVzZXJNYW5hZ2VyLnByb2JhYmlsaXR5VG9CZVBvc2l0aXZlICogMTAwKS50b0ZpeGVkKDEpICsgXCIlXCI7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcclxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2hvbWUvaG9tZS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vaG9tZS9ob21lLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFBhZ2VcXHJcXG4gICAgbmF2aWdhdGluZ1RvPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCIgIFxcclxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIj5cXHJcXG5cXHJcXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ292aWQxOVRyYWNrZXJcXFwiPjwvTGFiZWw+XFxyXFxuICAgIDwvQWN0aW9uQmFyPlxcclxcblxcclxcbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBpZD1cXFwibWFpbi1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgaWQ9XFxcImRpc2NsYWltZXItdGV4dFxcXCIgdGV4dD1cXFwie3sgTCgnZGlzY2xhaW1lci10ZXh0JykgfX1cXFwiIHRleHRXcmFwID0gXFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuXFxyXFxuICAgICAgICA8TGFiZWwgaWQ9XFxcInBvc2l0aXZlLXBlcmNlbnRhZ2VcXFwiIHRleHQ9XFxcIjAlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgPExhYmVsIGlkPVxcXCJwb3NpdGl2ZS10ZXh0XFxcIiB0ZXh0PVxcXCJ7eyBMKCdwb3NpdGl2ZS10ZXh0JykgfX1cXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8QnV0dG9uIGlkPVxcXCJ1cGRhdGUtYnV0dG9uXFxcIiB0ZXh0PVxcXCJ7eyBMKCd1cGRhdGUtYnV0dG9uJykgfX1cXFwiPjwvQnV0dG9uPlxcclxcblxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJjYXJkXFxcIiBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCIgdGV4dD1cXFwie3sgTCgnY2FyZC10aXRsZS13YXJuaW5nJykgfX1cXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJjYXJkLWRlc2NyaXB0aW9uXFxcIiB0ZXh0PVxcXCJ7eyBMKCdjYXJkLWRlc2NyaXB0aW9uLXByb2ZpbGUnKSB9fVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGlkPVxcXCJmYXRhbGl0eS1wZXJjZW50YWdlXFxcIiB0ZXh0PVxcXCIxMCVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBpZD1cXFwidXNlci1kYXRhLXRleHRcXFwiIHRleHQ9XFxcIlNlc3NvOiBNYXNjaGlsZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImNhcmQtY3RhXFxcIiB0ZXh0PVxcXCJ7eyBMKCdjYXJkLWN0YS11cGRhdGUnKSB9fVxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbjwvUGFnZT5cXHJcXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi9ob21lL2hvbWUtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3Qgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVWaWV3TW9kZWwoKSB7XHJcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xyXG4gICAgICAgIC8qIEFkZCB5b3VyIHZpZXcgbW9kZWwgcHJvcGVydGllcyBoZXJlICovXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdmlld01vZGVsO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVWaWV3TW9kZWw7XHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9ob21lL2hvbWUtdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL2hvbWUvaG9tZS12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIi8vVGhlIGxvY2F0aW9uIG1hbmFnZXIgc2hvdWxkIHdhdGNoIGZvciBsb2NhdGlvbiBjaGFuZ2VzXG4vL0V2ZXJ5dGltZSB0aGUgdXNlciBjaGFuZ2UgbG9jYXRpb24gKGUuZy4gNSBtZXRlciBjaGFuZ2UpLCBhIG5ldyByZWNvcmQgc2hvdWxkIGJlIGFkZGVkIGluIHRoZSBoaXN0b3J5XG4vL0l0IHdpbGwgaGF2ZSB0aGUgZm9sbG93aW5nIHN5bnRheFxuXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zL2VudW1zXCI7XG5pbXBvcnQgeyB3YXRjaExvY2F0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuXG4vKioqKkxPQ0FUSU9OIE1BTkFHRVJcbiAqIHRoZSBtYWluIG9iamVjdCBoZXJlIGlzIHRoZSBoaXN0b3J5IG9mIGxvY2F0aW9ucyB0aGF0IGNhbiBiZSBhZGRlZCBkeW5hbWljYWxseSB0byB0aGUgdHJhY2VcbiAqIE1ldGhvZHNcbiAqIC0gd2F0Y2hGb3JOZXdTdG9wczogb24gbG9jYXRpb24gY2hhbmdlLCBsb2NhdGlvbiBzaG91bGQgYmUgc2F2ZWQuIFNob3VsZCBzYXZlIHRpbWUgaW4gYmV0d2VlbiBzdG9wc1xuICogXG4gKiBcbiAqIFxuICogXG4gKi9cbnZhciBnZW9sb2NhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIik7XG5cblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNze1xuICAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICAgdGhpcy5sYW5naXR1ZGUgPSAwLjA7XG4gICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IDAuMDtcbiAgICAgICAgIHRoaXMuZHVyYXRpb24gPSAwLjA7XG4gICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IDA7XG4gICAgICAgICB0aGlzLmFycmF5TG9jYXRpb25zID0gW107XG4gICAgICAgICB0aGlzLmNlbnRlciA9IDAuMDtcbiAgICAgICAgIHRoaXMucmFkaXVzID0gMDtcbiAgICAgfVxuXG5cbiAgICAgZW5hYmxlTG9jYXRpb24oKXtcbiAgICAgICAgIC8vU3RhcnQgbW9uaXRvcmluZyBmb3IgbG9jYXRpb24gY2hhbmdlc1xuICAgICAgICAgLy9nZW9sb2NhdGlvbi5kZXNpcmVkQWNjdXJhY3kgPSBBY2N1cmFjeS5oaWdoO1xuICAgICAgICAgLy9nZW9sb2NhdGlvbi51cGRhdGVEaXN0YW5jZSA9IDU7IC8vNSBtZXRlcnMgY2hhbmdlc1xuICAgICAgICAgLy9lb2xvY2F0aW9uLmlvc0FsbG93c0JhY2tncm91bmRMb2NhdGlvblVwZGF0ZXMgPSB0cnVlIC8vUmVxdWlyZXMgZWRpdCBpbiBpbmZvLnBsaXN0XG4gICAgICAgICBnZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoZmFsc2UsdHJ1ZSkudGhlbiggciA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHIpO1xuICAgICAgICAgICAgd2F0Y2hMb2NhdGlvbihmdW5jdGlvbihjb29yZGluYXRlcyl7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLkxvY2F0aW9uTWFuYWdlci5hcnJheUxvY2F0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgXCJsYXRcIiA6IGNvb3JkaW5hdGVzLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgICAgICBcImxvblwiIDogY29vcmRpbmF0ZXMubG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgICBcImFjY1wiIDogY29vcmRpbmF0ZXMuaG9yaXpvbnRhbEFjY3VyYWN5LFxuICAgICAgICAgICAgICAgICAgICBcInRpbWVcIiA6IGNvb3JkaW5hdGVzLnRpbWVzdGFtcFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLyoqKlxuICAgICAgICAgICAgICAgICAqIGNvb3JkaW5hdGVzIG9iamVjdCBpcyBzdHJ1Y3R1cmVkIGxpa2UgdGhpczpcbiAgICAgICAgICAgICAgICAgKiAgXCJsYXRpdHVkZVwiOiAzNy4zMzAxOTc3OCxcbiAgICAgICAgICAgICAgICAgICAgXCJsb25naXR1ZGVcIjogLTEyMi4wMjQ2NjU5NyxcbiAgICAgICAgICAgICAgICAgICAgXCJhbHRpdHVkZVwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcImhvcml6b250YWxBY2N1cmFjeVwiOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgXCJ2ZXJ0aWNhbEFjY3VyYWN5XCI6IC0xLFxuICAgICAgICAgICAgICAgICAgICBcInNwZWVkXCI6IDMuNixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJlY3Rpb25cIjogODcsXG4gICAgICAgICAgICAgICAgICAgIFwidGltZXN0YW1wXCI6IFwiMjAyMC0wNC0xM1QxMjowOToxMC42NDdaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaW9zXCI6IHt9XG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLy9XZSBoYXZlIHRvIHdyaXRlIGludG8gdGhlIHRyYWNlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfSxmdW5jdGlvbihyZXN1bHQpe1xuICAgICAgICAgICAgICAgIC8vRXJyb3IgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdClcbiAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeSA6IEFjY3VyYWN5LmhpZ2gsXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzdGFuY2U6IDVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICB9KTtcblxuICAgICB9XG5cbiAgICAgZ2V0TG9jYXRpb25BcnJheSgpe1xuICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuYXJyYXlMb2NhdGlvbnMpO1xuICAgICB9XG5cbiAgICAgY2FsY3VsYXRlQ2VudGVyQW5kUmFkaXVzKCl7XG5cbiAgICAgfVxuXG4gICAgIHJlc2V0RGF5KCl7XG4gICAgICAgIHRoaXMubGFuZ2l0dWRlID0gMC4wO1xuICAgICAgICB0aGlzLmxvbmdpdHVkZSA9IDAuMDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDAuMDtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSAwO1xuICAgICAgICB0aGlzLmFycmF5TG9jYXRpb25zID0gW107XG4gICAgICAgIHRoaXMuY2VudGVyID0gMC4wO1xuICAgICAgICB0aGlzLnJhZGl1cyA9IDA7XG4gICAgIH1cbiB9XG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vbWFuYWdlcnMvTG9jYXRpb25NYW5hZ2VyLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFuYWdlcnMvTG9jYXRpb25NYW5hZ2VyLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIi8vdmFyIHggPSByZXF1aXJlKFwibm9ybS1kaXN0XCIpO1xuXG5pbXBvcnQgVXNlck1hbmFnZXIgZnJvbSBcIi4vVXNlck1hbmFnZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0aE1hbmFnZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJNYXRoTWFuYWdlclwiO1xuICAgICAgICAvL0RhdGEgZnJvbSBJbXBlcmlhbCBDb2xsZWdlIE1hcmNoIFN0dWRpZXNcbiAgICAgICAgLy9UT0RPOiB1cGRhdGUgdGhpcyBmcm9tIGEgcmVtb3RlIEpTT05cbiAgICAgICAgdGhpcy5zeW1wdG9tcyA9IHtcbiAgICAgICAgICAgIGZldmVyOiB7XG4gICAgICAgICAgICAgICAgbWVhblRpbWVGcm9tU3ltcHRvbSA6IDAuNzcsXG4gICAgICAgICAgICAgICAgU0RUaW1lRnJvbVN5bXB0b20gOiAxLjg5LFxuICAgICAgICAgICAgICAgIHByb3BvcnRpb25PdmVyNjAgOiAwLjM1LFxuICAgICAgICAgICAgICAgIHByb3BvcnRpb25VbmRlcjYwIDogMC4zOFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvdWdoOiB7XG4gICAgICAgICAgICAgICAgbWVhblRpbWVGcm9tU3ltcHRvbSA6IDAuNzEsXG4gICAgICAgICAgICAgICAgU0RUaW1lRnJvbVN5bXB0b20gOiAyLjE2LFxuICAgICAgICAgICAgICAgIHByb3BvcnRpb25PdmVyNjAgOiAwLjI2LFxuICAgICAgICAgICAgICAgIHByb3BvcnRpb25VbmRlcjYwIDogMC4yN1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhdGlndWU6IHtcbiAgICAgICAgICAgICAgICBtZWFuVGltZUZyb21TeW1wdG9tIDogMS42NixcbiAgICAgICAgICAgICAgICBTRFRpbWVGcm9tU3ltcHRvbSA6IDMuMDMsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbk92ZXI2MCA6IDAuMDksXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvblVuZGVyNjAgOiAwLjA3XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVhZGFjaGU6IHtcbiAgICAgICAgICAgICAgICBtZWFuVGltZUZyb21TeW1wdG9tIDogMS4xOCxcbiAgICAgICAgICAgICAgICBTRFRpbWVGcm9tU3ltcHRvbSA6IDIuMTYsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbk92ZXI2MCA6IDAuMDEsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvblVuZGVyNjAgOiAwLjA0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3RoZXI6IHtcbiAgICAgICAgICAgICAgICBtZWFuVGltZUZyb21TeW1wdG9tIDogMS4xMSxcbiAgICAgICAgICAgICAgICBTRFRpbWVGcm9tU3ltcHRvbSA6IDEuODEsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbk92ZXI2MCA6IDAuMDIsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvblVuZGVyNjAgOiAwLjAzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGw6IHtcbiAgICAgICAgICAgICAgICBtZWFuVGltZUZyb21TeW1wdG9tIDogMC40MyxcbiAgICAgICAgICAgICAgICBTRFRpbWVGcm9tU3ltcHRvbSA6IDEuMDksXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbk92ZXI2MCA6IDAuMDIsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvblVuZGVyNjAgOiAwLjAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFzYWxDb25nZXN0aW9uIDoge1xuICAgICAgICAgICAgICAgIG1lYW5UaW1lRnJvbVN5bXB0b20gOiAwLjczLFxuICAgICAgICAgICAgICAgIFNEVGltZUZyb21TeW1wdG9tIDogMS40OSxcbiAgICAgICAgICAgICAgICBwcm9wb3J0aW9uT3ZlcjYwIDogMC4wMSxcbiAgICAgICAgICAgICAgICBwcm9wb3J0aW9uVW5kZXI2MCA6IDAuMDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYXVzZWE6IHtcbiAgICAgICAgICAgICAgICBtZWFuVGltZUZyb21TeW1wdG9tIDogMS4xOCxcbiAgICAgICAgICAgICAgICBTRFRpbWVGcm9tU3ltcHRvbSA6IDEuNzgsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbk92ZXI2MCA6IDAuMDEsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvblVuZGVyNjAgOiAwLjAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlhcnJob2VhOiB7XG4gICAgICAgICAgICAgICAgbWVhblRpbWVGcm9tU3ltcHRvbSA6IDMuMTcsXG4gICAgICAgICAgICAgICAgU0RUaW1lRnJvbVN5bXB0b20gOiAzLjksXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbk92ZXI2MCA6IDAuMDIsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvblVuZGVyNjAgOiAwLjAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2Fsa2luZ0RpZmZpY3VsdHk6IHtcbiAgICAgICAgICAgICAgICBtZWFuVGltZUZyb21TeW1wdG9tIDogNC4yNSxcbiAgICAgICAgICAgICAgICBTRFRpbWVGcm9tU3ltcHRvbSA6IDQuMjUsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbk92ZXI2MCA6IDAuMDIsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvblVuZGVyNjAgOiAwLjAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaWxpOntcbiAgICAgICAgICAgICAgICBtZWFuVGltZUZyb21TeW1wdG9tIDogMC4wMCxcbiAgICAgICAgICAgICAgICBTRFRpbWVGcm9tU3ltcHRvbSA6IDAuMDAsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbk92ZXI2MCA6IDAuMDEsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvblVuZGVyNjAgOiAwLjAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGFja09mQXBwZXRpdGU6IHtcbiAgICAgICAgICAgICAgICBtZWFuVGltZUZyb21TeW1wdG9tIDogMy4xMixcbiAgICAgICAgICAgICAgICBTRFRpbWVGcm9tU3ltcHRvbSA6IDMuOTgsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbk92ZXI2MCA6IDAuMDIsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvblVuZGVyNjAgOiAwLjAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJvbmNoaXRpcyA6IHtcbiAgICAgICAgICAgICAgICBtZWFuVGltZUZyb21TeW1wdG9tIDogOC41LFxuICAgICAgICAgICAgICAgIFNEVGltZUZyb21TeW1wdG9tIDogNi4zNSxcbiAgICAgICAgICAgICAgICBwcm9wb3J0aW9uT3ZlcjYwIDogMC4wMSxcbiAgICAgICAgICAgICAgICBwcm9wb3J0aW9uVW5kZXI2MCA6IDAuMDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVzdFBhaW46IHtcbiAgICAgICAgICAgICAgICBtZWFuVGltZUZyb21TeW1wdG9tIDogMCxcbiAgICAgICAgICAgICAgICBTRFRpbWVGcm9tU3ltcHRvbSA6IDAuMDEsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvbk92ZXI2MCA6IDAuMDEsXG4gICAgICAgICAgICAgICAgcHJvcG9ydGlvblVuZGVyNjAgOiAwLjAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub3JtRGlzdHJpYnV0aW9uTW9kdWxlID0gcmVxdWlyZShcIm5vcm1hbC1kaXN0cmlidXRpb25cIik7XG4gICAgICAgIHRoaXMubm9ybURpc3RyaWJ1dGlvbiA9IHRoaXMubm9ybURpc3RyaWJ1dGlvbk1vZHVsZS5kZWZhdWx0O1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZVByb2JhYmlsaXR5VGhhdE9uZVN5bXB0b21Jc0Zyb21DT1ZJRChzeW1wdG9tTmFtZSwgcGF0aWVudE92ZXI2MCwgZGF5c09mU3ltcHRvbSl7XG4gICAgICAgIHZhciBwcm9iYWJpbGl0eSA9IDAuMDtcbiAgICAgICAgLy9EaXN0cmlidXRpb24gb2Ygc3BlY2lmaWMgbWVhbiBhbmQgc2RcbiAgICAgICAgdmFyIG5vcm1hbCA9IG5ldyB0aGlzLm5vcm1EaXN0cmlidXRpb24odGhpcy5zeW1wdG9tc1tzeW1wdG9tTmFtZV0ubWVhblRpbWVGcm9tU3ltcHRvbSwgdGhpcy5zeW1wdG9tc1tzeW1wdG9tTmFtZV0uU0RUaW1lRnJvbVN5bXB0b20pO1xuICAgICAgICBwcm9iYWJpbGl0eSA9IG5vcm1hbC5wZGYoZGF5c09mU3ltcHRvbSk7XG4gICAgICAgIHJldHVybiBwcm9iYWJpbGl0eTtcbiAgICAgICAgLy9Vc2VyTWFuYWdlci5zeW1wdG9tc1tzeW1wdG9tTmFtZV0ucHJvYmFiaWxpdHlUb0JlQ2F1c2VkQnlDT1ZJRCA9IHByb2JhYmlsaXR5O1xuICAgIH1cblxuICAgIGNhbGN1bGF0ZU92ZXJhbGxQcm9iYWJpbGl0eVRvSGF2ZUNPVklEKCl7XG4gICAgICAgIC8vSFlQOiBBVkcgb2YgdGhlIHByb2JhYmlsaXRpZXNcbiAgICAgICAgdmFyIHByb2JhYmlsaXR5ID0gMDtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICBmb3IgKHZhciBpIGluIGdsb2JhbC5Vc2VyTWFuYWdlci5zeW1wdG9tcyl7XG4gICAgICAgICAgICBwcm9iYWJpbGl0eSArPSBnbG9iYWwuVXNlck1hbmFnZXIuc3ltcHRvbXNbaV0ucHJvYmFiaWxpdHlUb0JlQ2F1c2VkQnlDT1ZJRDtcbiAgICAgICAgICAgIGNvdW50ZXIgKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2JhYmlsaXR5L2NvdW50ZXI7XG4gICAgfVxuXG4gICAgY2FsY3VhbHRlTW9ydGFsaXR5KCl7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIFxuXG59XG5cblxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21hbmFnZXJzL01hdGhNYW5hZ2VyLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vbWFuYWdlcnMvTWF0aE1hbmFnZXIuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiLyoqKioqKioqVFJBQ0UgTUFOQUdFUioqKioqKipcbiAqIFRoZSBUcmFjZSBNYW5hZ2VyIGJ1aWxkcywgcmVjZWl2ZSBhbmQgZWxhYm9yYXRlIHRyYWNlc1xuICogdHJhY2VzIGFyZSBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHN5bnRheDpcbiAqIHRyYWNlMSA9IHtcbiAqICAgICAgaWQ6ICAgICAgICAgaW50ZWdlciAgICAgICAgICAgIElkIG9mIHRoZSB0cmFjZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZWZpbmVkIGJ5IHRoZSBzZXJ2ZXIpXG4gKiAgICAgIGRhdGU6ICAgICAgIGRhdGUgICAgICAgICAgICAgICBEYXRlIG9mIHRoZSB0cmFjZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGVmaW5lZCBieSB0aGUgbG9jYWwgYXBwKSAgXG4gKiAgICAgIGNlbnRlcjogICAgIChmbG9hdCwgZmxvYXQpICAgICBDb29yZGluYXRlcyBvZiB0aGUgY2VudGVyIG9mIHRoZSBwb3NpdGlvbiBvZiB0aGUgdHJhY2UgICAoZGVmaW5lZCBieSB0aGUgbG9jYWwgYXBwKVxuICogICAgICByYWRpdXM6ICAgICBmbG9hdCAgICAgICAgICAgICAgUmFkaXVzIG9mIHRoZSB0cmFjZSwgd2hlcmUgYWxsIG1vdmVtZW50cyBoYXBwZW4gICAgICAgICAgKGRlZmluZWQgYnkgdGhlIGxvY2FsIGFwcClcbiAqICAgICAgbG9jYXRpb25zOiAgWy0tU1RPUFMtLV0gICAgICAgIEFycmF5IG9mIFN0b3BzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZWZpbmVkIGJ5IHRoZSBsb2NhbCBhcHApXG4gKiAgICAgICAgICBTVE9QOiAgIE9iamVjdFxuICogICAgICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICAgICAgbGF0aXR1ZGUgICAgIGZsb2F0ICAgICAgTGF0aXR1ZGUgb2YgdGhlIHNwZWNpZmljIHN0b3AgICAgICAgICAgICAgICAgIFxuICogICAgICAgICAgICAgICAgICBsb25naXR1ZGUgICAgZmxvYXQgICAgICBMb25naXR1ZGUgb2YgdGhlIHNwZWNpZmljIHN0b3AgICAgICAgICAgICAgICAgIFxuICogICAgICAgICAgICAgICAgICBwcmVjaWNlbmVzcyAgZmxvYXQgICAgICBQcmVjaXNlc3Mgb2YgdGhlIEdQUyBzaWduYWxcbiAqICAgICAgICAgICAgICAgICAgdEluaXRpYWwgICAgIHRpbWVzdGFtcCAgVGltZSB3aGVuIHRoZSBzdG9wIHN0YXJ0c1xuICogICAgICAgICAgICAgICAgICB0RmluYWwgICAgICAgdGltZXN0YW1wICBUaW1lIHdoZW4gdGhlIHN0b3AgZW5kcyAgICAgICAgICAgICAgICBcbiAqICAgICAgICAgIH1cbiAqICAgICAgcHJvYmFiaWxpdHlUb0JlUG9zaXRpdmUgICAgIGZsb2F0ICAgQ2FsY3VsYXRlZCBQcm9iYWJpbGl0eSB0byBiZSBwb3NpdGl2ZSB0byBDT1ZJRC0xOSAgIChkZWZpbmVkIGJ5IFVzZXJNYW5hZ2VyKSBcbiAqIH1cbiAqIFxuICogTWV0aG9kcyB0aGF0IHNob3VsZCBiZSBwcmVzZW50IGhlcmVcbiAqIC0gU2VuZCB0cmFjZSB0byBzZXJ2ZXI6IGRhaWx5LCB0aGUgdHJhY2Ugb2YgdGhlIHVzZXIgc2hvdWxkIGJlIHNlbnQgdG8gc2VydmVyXG4gKiAtIFJlY2VpdmUgUHJvYmFiaWxpdHk6IHJlY2VpdmUgbmV3IHByb2JhYmlsaXR5IHRvIGJlIHBvc2l0aXZlIGZyb20gc2VydmVyXG4gKiAgXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2VNYW5hZ2Vye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMudHJhY2UgPSB7fTtcblxuICAgIH1cblxuICAgIGJ1aWxkVHJhY2UoKXtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLnRyYWNlLmRheSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xuICAgICAgICB0aGlzLnRyYWNlLm1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICB0aGlzLnRyYWNlLnllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHRoaXMudHJhY2UuY2VudGVyID0gZ2xvYmFsLkxvY2F0aW9uTWFuYWdlci5jZW50ZXI7XG4gICAgICAgIHRoaXMudHJhY2UucmFkaXVzID0gZ2xvYmFsLkxvY2F0aW9uTWFuYWdlci5yYWRpdXM7XG4gICAgICAgIHRoaXMudHJhY2UubG9jYXRpb25zID0gZ2xvYmFsLkxvY2F0aW9uTWFuYWdlci5nZXRMb2NhdGlvbkFycmF5KCk7XG4gICAgICAgIHRoaXMudHJhY2UucHJvYmFiaWxpdHlUb0JlUG9zaXRpdmUgPSBnbG9iYWwuVXNlck1hbmFnZXIucHJvYmFiaWxpdHlUb0JlUG9zaXRpdmU7XG4gICAgICAgIC8vc2VuZCBpdCB0byBSZW1vdGVcbiAgICAgICAgLy9yZXNldCBMb2NhdGlvbiBNYW5hZ2VyIGZvciBuZXcgdHJhY2VcbiAgICAgICAgZ2xvYmFsLkxvY2F0aW9uTWFuYWdlci5yZXNldERheSgpO1xuXG4gICAgfVxufTsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYW5hZ2Vycy9UcmFjZU1hbmFnZXIuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9tYW5hZ2Vycy9UcmFjZU1hbmFnZXIuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbi1zZXR0aW5nc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlck1hbmFnZXJ7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgaWYgKCF0aGlzLnJlc3RvcmVGcm9tRGlzaygpKXtcbiAgICAgICAgICAgIC8vdGhpcy5uYW1lID0gXCJVc2VyTWFuYWdlclwiXG4gICAgICAgICAgICB0aGlzLnN0YXR1cyA9IFwidW5pbml0aWFsaXplZFwiO1xuICAgICAgICAgICAgdGhpcy5wYXRpZW50T3ZlcjYwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmFnZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnN5bXB0b21zID0ge307XG4gICAgICAgICAgICAvKlN5bXB0b21zIG9iaiBzaG91bGQgaGF2ZSB0aGUgc3ludGF4IFxuICAgICAgICAgICAgdGhpcy5zeW1wdG9tcyA9IHtcbiAgICAgICAgICAgICAgICBzeW1wdG9tIDoge1xuICAgICAgICAgICAgICAgICAgICB0aW1lUHJlc2VudCA6IGZsb2F0O1xuICAgICAgICAgICAgICAgICAgICBwcm9iYWJpbGl0eVRvQmVDT1ZJRDogPHRvIEJlIENhbGN1bGF0ZWQgYnkgTWF0aCBNYW5hZ2VyPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJvYmFiaWxpdHlUb0JlUG9zaXRpdmUgPSAwO1xuICAgICAgICB0aGlzLmZhdGFsaXR5ID0gMC4wMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUFnZSh5ZWFyQm9yblN0cmluZyl7XG4gICAgICAgIHZhciB5ZWFyQm9ybiA9IHBhcnNlSW50KHllYXJCb3JuU3RyaW5nKTtcbiAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmFnZSA9IGRhdGUuZ2V0RnVsbFllYXIoKSAtIHllYXJCb3JuO1xuICAgICAgICBpZiAodGhpcy5hZ2UgPiA2MCkgdGhpcy5wYXRpZW50T3ZlcjYwID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdG9yZVVzZXIoKXtcbiAgICAgICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiVXNlckRhdGFcIixKU09OLnN0cmluZ2lmeShnbG9iYWwuVXNlck1hbmFnZXIpKTtcbiAgICB9XG5cbiAgICByZXN0b3JlRnJvbURpc2soKXtcbiAgICAgICAgdmFyIHJlc3RvcmVkRGF0YSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcIlVzZXJEYXRhXCIpO1xuICAgICAgICBpZiAoIXJlc3RvcmVkRGF0YSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcmVzdG9yZWRVTSA9IEpTT04ucGFyc2UocmVzdG9yZWREYXRhKTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSByZXN0b3JlZFVNLnN0YXR1cztcbiAgICAgICAgdGhpcy5wYXRpZW50T3ZlcjYwID0gcmVzdG9yZWRVTS5wYXRpZW50T3ZlcjYwO1xuICAgICAgICB0aGlzLmFnZSA9IHJlc3RvcmVkVU0uYWdlO1xuICAgICAgICB0aGlzLnN5bXB0b21zID0gcmVzdG9yZWRVTS5zeW1wdG9tcztcbiAgICAgICAgdGhpcy5wcm9iYWJpbGl0eVRvQmVQb3NpdGl2ZSA9IHJlc3RvcmVkVU0ucHJvYmFiaWxpdHlUb0JlUG9zaXRpdmU7XG4gICAgICAgIHRoaXMuZmF0YWxpdHkgPSByZXN0b3JlZFVNLmZhdGFsaXR5O1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmUoKXtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcImluaXRpYWxpemVkXCI7XG4gICAgICAgIHRoaXMuc3RvcmVVc2VyKCk7XG4gICAgfVxufVxuXG5cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYW5hZ2Vycy9Vc2VyTWFuYWdlci5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21hbmFnZXJzL1VzZXJNYW5hZ2VyLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5hY3Rpb24tYmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFjdGlvbi1iYXIgbGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM3MDcwNzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIud2VsY29tZS1jb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTAwJVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi53ZWxjb21lLXRpdGxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiNDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiMTBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIud2VsY29tZS10ZXh0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW5cIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi53ZWxjb21lLWJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi10b3BcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJncmVlblwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiYm9sZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5mb3JtLXJvd1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjMwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9ybS1yb3cgVGV4dEZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImxlZnRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItc3R5bGVcIixcInZhbHVlXCI6XCJzb2xpZFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWxlZnRcIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIiN0aGlyZC1jb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsZWZ0XCIsXCJ2YWx1ZVwiOlwiNTAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiI3NlY29uZC1jb250YWluZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsZWZ0XCIsXCJ2YWx1ZVwiOlwiNTAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwidGV4dC1hbGlnblwiLFwidmFsdWVcIjpcImNlbnRlclwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIiNzeW50b21zLWdyaWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiI3N5bnRvbXMtZ3JpZCBCdXR0b25cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ3aWR0aFwiLFwidmFsdWVcIjpcIjE0MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjE0MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJsaWdodGdyYXlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiMzBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3dlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS1wYWdlLmNzc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzdHlsZVwiLCBwYXRoOiBcIi4vd2VsY29tZS1zZXR0aW5ncy93ZWxjb21lLXBhZ2UuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsInJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZG9tXCIpO1xyXG52YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XHJcblxyXG5cclxuY29uc3QgSG9tZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL3dlbGNvbWUtdmlldy1tb2RlbFwiKTtcclxuY29uc3QgQnV0dG9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIpLkJ1dHRvbjtcclxuXHJcbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSG9tZVZpZXdNb2RlbCgpO1xyXG5cclxuICAgIC8vVGhhdCdzIG91ciBtYWluXHJcbiAgICAvL0lmIHRoZSB1c2VyIGlzIHByZXNlbnQgSSBzaG91bGQgaW1tZWRpYXRlbHkgZ28gdG8gdGhlIGhvbWUgcGFnZS5cclxuXHJcblxyXG5cclxuICAgIC8vU2V0IHVwIHNvbWUgbGlzdGVuZXJzIHRvIHRoZSBidXR0b25zXHJcbiAgICB2YXIgZW51bXMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiKTtcclxuXHJcbiAgICAvL3BhZ2UuZnJhbWUubmF2aWdhdGUoXCIvaG9tZS9ob21lLXBhZ2VcIik7XHJcblxyXG4gICAgdmFyIGZpcnN0QnV0dG9uID0gcGFnZS5nZXRWaWV3QnlJZChcImJ1dHRvbjFcIik7XHJcbiAgICBmaXJzdEJ1dHRvbi5vbihcInRhcFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHNlY29uZENvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJzZWNvbmQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIC8vQ3JlYXRpb24gb2YgdGhlIGJ1dHRvbnNcclxuICAgICAgICB2YXIgYnV0dG9uQ29udGFpbmVyID0gcGFnZS5nZXRWaWV3QnlJZChcInN5bnRvbXMtZ3JpZFwiKTtcclxuICAgICAgICB2YXIgciA9IDA7XHJcbiAgICAgICAgdmFyIGMgPSAxO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gZ2xvYmFsLk1hdGhNYW5hZ2VyLnN5bXB0b21zKXtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEJ1dHRvbiA9IG5ldyBCdXR0b24oKTtcclxuICAgICAgICAgICAgZ3JpZEJ1dHRvbi50ZXh0ID0gaTtcclxuICAgICAgICAgICAgZ3JpZEJ1dHRvbi5jbGFzc05hbWUgPSBcImJ1dHRvbi1kaXNlYXNlXCJcclxuICAgICAgICAgICAgZ3JpZEJ1dHRvbi5yb3cgPSByO1xyXG4gICAgICAgICAgICBncmlkQnV0dG9uLmNvbCA9IGM7XHJcbiAgICAgICAgICAgIGdyaWRCdXR0b24uc3ltcHRvbU5hbWUgPSBpO1xyXG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYWRkQ2hpbGQoZ3JpZEJ1dHRvbik7XHJcbiAgICAgICAgICAgIGMrKztcclxuICAgICAgICAgICAgaWYgKGM+Mil7IGMgPSAxOyByKysgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWNvbmRDb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtNTAwLCB5OiAwfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgICAgICB9KTtcclxuICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICB9LHRoaXMpXHJcbiAgICB2YXIgc2Vjb25kQnV0dG9uID0gcGFnZS5nZXRWaWV3QnlJZChcImJ1dHRvbjJcIik7XHJcbiAgICBzZWNvbmRCdXR0b24ub24oXCJ0YXBcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vQW5pbWF0aW9uICsgdXBkYXRlIG9mIHRoZSBhZ2VcclxuICAgICAgICBVc2VyTWFuYWdlci51cGRhdGVBZ2UoZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyLWlucHV0XCIpLnRleHQpO1xyXG4gICAgICAgIFVzZXJNYW5hZ2VyLnByb2JhYmlsaXR5VG9CZVBvc2l0aXZlID0gTWF0aE1hbmFnZXIuY2FsY3VsYXRlT3ZlcmFsbFByb2JhYmlsaXR5VG9IYXZlQ09WSUQoKTtcclxuICAgICAgICAvL0FuaW1hdGlvblxyXG4gICAgICAgIHZhciB0aGlyZENvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ0aGlyZC1jb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcmRDb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtNTAwLCB5OiAwfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgICAgICB9KTtcclxuICAgIH0sdGhpcyk7XHJcbiAgICB2YXIgdGhpcmRCdXR0b24gPSBwYWdlLmdldFZpZXdCeUlkKFwiYnV0dG9uM1wiKTtcclxuICAgIHRoaXJkQnV0dG9uLm9uKFwidGFwXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAvL2NhbGwgdG8gbG9jYXRpb25NYW5hZ2VyXHJcbiAgICAgICAgZ2xvYmFsLkxvY2F0aW9uTWFuYWdlci5lbmFibGVMb2NhdGlvbigpO1xyXG4gICAgICAgIGdsb2JhbC5Vc2VyTWFuYWdlci5zZXRBY3RpdmUoKTsgXHJcbiAgICAgICAgcGFnZS5mcmFtZS5uYXZpZ2F0ZShcIi9ob21lL2hvbWUtcGFnZVwiKTtcclxuICAgICAgXHJcbiAgICB9KVxyXG4gICAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpe1xyXG4gICAgICAgIHZhciBidXR0b25EaXNlYXNlQXJyYXkgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnV0dG9uLWRpc2Vhc2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYnV0dG9uRGlzZWFzZUFycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaWFvXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpPGJ1dHRvbkRpc2Vhc2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGJ1dHRvbkRpc2Vhc2VBcnJheVtpXS5vbihcInRhcFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN5bXB0b21BbHJlYWR5QWRkZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVnVvaSByaW11b3ZlcmUgaWwgc2ludG9tbz9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlPDrFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyYXlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnbG9iYWwuVXNlck1hbmFnZXIuc3ltcHRvbXNbc2VsZi5zeW1wdG9tTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN5bXB0b21BbHJlYWR5QWRkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRhIHF1YW50aSBnaW9ybmkgbW9zdHJpIGlsIHNpbnRvbW86IFwiK3RoaXMuc3ltcHRvbU5hbWUrXCI/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXRpbGl6emEgdW4gdmFsb3JlIG51bWVyaWNvIHBlciBmYXZvcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQW51bGxhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yLnJlc3VsdCA9IGZhbHNlIChjYW5jZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vci5yZXN1bHQgPSB0cnVlIChvaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiB2YWxpZGF0aW9uIGZvciByLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5Vc2VyTWFuYWdlci5zeW1wdG9tc1tzZWxmLnN5bXB0b21OYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLlVzZXJNYW5hZ2VyLnN5bXB0b21zW3NlbGYuc3ltcHRvbU5hbWVdLnRpbWVQcmVzZW50ID0gcGFyc2VGbG9hdChyLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLlVzZXJNYW5hZ2VyLnN5bXB0b21zW3NlbGYuc3ltcHRvbU5hbWVdLnByb2JhYmlsaXR5VG9CZUNhdXNlZEJ5Q09WSUQgPSBNYXRoTWFuYWdlci5jYWxjdWxhdGVQcm9iYWJpbGl0eVRoYXRPbmVTeW1wdG9tSXNGcm9tQ09WSUQoc2VsZi5zeW1wdG9tTmFtZSwgZmFsc2UsIHBhcnNlRmxvYXQoci50ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01hdGhNYW5hZ2VyLmNhbGN1bGF0ZVByb2JhYmlsaXR5VGhhdE9uZVN5bXB0b21Jc0Zyb21DT1ZJRChzZWxmLnN5bXB0b21OYW1lLCBmYWxzZSwgcGFyc2VGbG9hdChyLnRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50ZXh0ID0gc2VsZi50ZXh0ICsgXCIgc2luY2UgXCIgK3IudGV4dCsgXCJkYXlzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN5bXB0b21BbHJlYWR5QWRkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sYnV0dG9uRGlzZWFzZUFycmF5W2ldKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUGFnZUxvYWRlZChhcmdzKXtcclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcclxuICAgIGNvbnNvbGUubG9nKFwiV2VsY29tZSBQYWdlIExvYWRlZFwiKTtcclxuICAgIGlmIChnbG9iYWwuVXNlck1hbmFnZXIuc3RhdHVzID09IFwiaW5pdGlhbGl6ZWRcIilcclxuICAgICAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKFwiL2hvbWUvaG9tZS1wYWdlXCIpO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcclxuZXhwb3J0cy5vblBhZ2VMb2FkZWQgPSBvblBhZ2VMb2FkZWQ7XHJcblxyXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vd2VsY29tZS1zZXR0aW5ncy93ZWxjb21lLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZVxcclxcbiAgICBuYXZpZ2F0aW5nVG89XFxcIm9uTmF2aWdhdGluZ1RvXFxcIiAgXFxyXFxuICAgIGxvYWRlZD1cXFwib25QYWdlTG9hZGVkXFxcIlxcclxcbiAgICB4bWxucz1cXFwiaHR0cDovL3NjaGVtYXMubmF0aXZlc2NyaXB0Lm9yZy90bnMueHNkXFxcIj5cXHJcXG5cXHJcXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQ09WSUQtMTkgVHJhY2tlclxcXCI+PC9MYWJlbD5cXHJcXG4gICAgPC9BY3Rpb25CYXI+XFxyXFxuXFxyXFxuICAgIDxBYnNvbHV0ZUxheW91dD5cXHJcXG5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgaWQ9XFxcIm1haW4tY29udGFpbmVyXFxcIiBjbGFzcz1cXFwid2VsY29tZS1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ3ZWxjb21lLXRpdGxlXFxcIiB0ZXh0PVxcXCJCZW52ZW51dG9cXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGV4dFxcXCIgaWQ9XFxcIndlbGNvbWUtZGVzY3JpcHRpb25cXFwiIHRleHQ9XFxcIlF1ZXN0YSBhcHAgdGkgcGVybWV0dGVyw6AgZGkgdmVkZXJlIGxhIHR1YSBwcm9iYWJpbGl0w6AgZGkgcG9zaXRpdml0w6AgYWxsYSBtYWxhdHRpYSBDT1ZJRC0xOSwgaW4gYmFzZSBhbCB0dW8gcHJvZmlsbyBtZWRpY28gZSBhaSB0dW9pIHNwb3N0YW1lbnRpXFxcIiB0ZXh0V3JhcCA9IFxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ3ZWxjb21lLXRleHRcXFwiIGlkPVxcXCJ3ZWxjb21lLWRlc2NyaXB0aW9uMVxcXCIgdGV4dD1cXFwiUXVlc3RvIGFpdXRlcsOgIHRlLCBlIGxlIHBlcnNvbmUgY2hlIHRpIHNvbm8gdmljaW5vLCBhIGNhcGlyZSBjb21lIGNvbXBvcnRhcnRpIGR1cmFudGUgcXVlc3RhIGVtZXJnZW56YVxcXCIgdGV4dFdyYXAgPSBcXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10ZXh0XFxcIiBpZD1cXFwid2VsY29tZS1kZXNjcmlwdGlvbjJcXFwiIHRleHQ9XFxcIlJpY29yZGEgc2VtcHJlIGNoZSBxdWVzdCdhcHAgbm9uIHNvc3RpdHVpc2NlIGluIGFsY3VuIG1vZG8gdW4gcGFyZXJlIG1lZGljbyBlIHR1dHRpIGkgc3VvaSBkYXRpIHNvbm8gcHVyYW1lbnRlIGluZGljYXRpdmlcXFwiIHRleHRXcmFwID0gXFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGV4dFxcXCIgaWQ9XFxcIndlbGNvbWUtZGVzY3JpcHRpb24zXFxcIiB0ZXh0PVxcXCJTZSB0aSBzZW50aSBtYWxlLCB2YSBkYSB1biBtZWRpY29cXFwiIHRleHRXcmFwID0gXFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGV4dFxcXCIgaWQ9XFxcIndlbGNvbWUtZGVzY3JpcHRpb240XFxcIiB0ZXh0PVxcXCJFIHNlIHN0YWkgYmVuZSwgbGltaXRhIGkgdHVvaSBtb3ZpbWVudGkgaWwgcGnDuSBwb3NzaWJpbGUuXFxcIiB0ZXh0V3JhcCA9IFxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwid2VsY29tZS1idXR0b25cXFwiIGlkPVxcXCJidXR0b24xXFxcIiB0ZXh0PVxcXCJIbyBjYXBpdG9cXFwiPjwvQnV0dG9uPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbiAgICA8U2Nyb2xsVmlldyBpZD1cXFwic2Vjb25kLWNvbnRhaW5lclxcXCIgY2xhc3M9XFxcIndlbGNvbWUtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgID5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10aXRsZVxcXCIgdGV4dD1cXFwiSWwgbWlvIHByb2ZpbG9cXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGV4dFxcXCIgaWQ9XFxcIndlbGNvbWUtZGVzY3JpcHRpb25cXFwiIHRleHQ9XFxcIlBlciBwb3RlciBmb3JuaXJ0aSB1bmEgc3RpbWEgZWZmaWNhY2UsIGwnYXBwIGRldmUgc2FwZXJlIHBpw7kgaW5mb3JtYXppb25pIG1lZGljaGUgc3UgZGkgdGUuXFxcIiB0ZXh0V3JhcCA9IFxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ3ZWxjb21lLXRleHRcXFwiIGlkPVxcXCJ3ZWxjb21lLWRlc2NyaXB0aW9uXFxcIiB0ZXh0PVxcXCJRdWVzdGUgaW5mb3JtYXppb25pIHNhcmFubm8gc2FsdmF0ZSBzdSBxdWVzdG8gdGVsZWZvbm8gZSBub24gc2FyYW5ubyBtYWkgY29uZGl2aXNlIGNvbiBuZXNzdW5vXFxcIiB0ZXh0V3JhcCA9IFxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgPERvY2tMYXlvdXQgb3JpZW50YXRpb249XFxcImhvcml6b250YWxcXFwiIGNsYXNzPVxcXCJmb3JtLXJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIkFubm8gZGVsbGEgdHVhIG5hc2NpdGFcXFwiIGRvY2s9XFxcImxlZnRcXFwiIGlkPVxcXCJ5ZWFyLWZpZWxkXFxcIiBjbGFzcz1cXFwid2VsY29tZS10ZXh0XFxcIiA+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzPVxcXCJ3ZWxjb21lLWlucHV0XFxcIiBpZD1cXFwieWVhci1pbnB1dFxcXCIgaGludD1cXFwiSW5zZXJpc2NpIGFubm9cXFwiIGtleWJvYXJkVHlwZT1cXFwicGhvbmVcXFwiPjwvVGV4dEZpZWxkPlxcclxcbiAgICAgICAgICAgIDwhLS1MaXN0UGlja2VyIGl0ZW1zPVxcXCJ7eyBbMSwyIF19fVxcXCIgY2xhc3M9XFxcInBpY2tlclxcXCIgdGV4dEZpZWxkPVxcXCJ5ZWFyLWZpZWxkXFxcIi8tLT5cXHJcXG4gICAgICAgIDwvRG9ja0xheW91dD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10ZXh0XFxcIiBpZD1cXFwid2VsY29tZS1vdGhlci1zeW50aG9tc1xcXCIgdGV4dD1cXFwiSGFpIGF2dXRvIHF1YWxjdW5vIGRpIHF1ZXN0aSBzaW50b21pIHVsdGltYW1lbnRlP1xcXCIgdGV4dFdyYXAgPSBcXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8R3JpZExheW91dCBpZD1cXFwic3ludG9tcy1ncmlkXFxcIiBjb2x1bW5zPVxcXCIqLDE1MCwgMTUwLCpcXFwiIHJvd3M9XFxcIjE1MCwgMTUwLCAxNTAsMTUwLCAxNTAsIDE1MCwxNTBcXFwiICA+XFxyXFxuICAgICAgICAgICAgPCEtLVxcclxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidXR0b24tZGlzZWFzZVxcXCIgdGV4dD1cXFwiRmViYnJlXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgPjwvQnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlRvc3NlLCBnb2xhIHNlY2NhXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiRmF0aWNhXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMVxcXCIgPjwvQnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkNvbmdlc3Rpb25lIG5hc2FsZVxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjJcXFwiID48L0J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJOYXVzZWFcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIxXFxcIiA+PC9CdXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQ29uZnVzaW9uZVxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjJcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgICAgIC0tPlxcclxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwid2VsY29tZS1idXR0b25cXFwiIGlkPVxcXCJidXR0b24yXFxcIiB0ZXh0PVxcXCJBdmFudGlcXFwiPjwvQnV0dG9uPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICA8L1Njcm9sbFZpZXc+XFxyXFxuXFxyXFxuXFxyXFxuICAgIDxTdGFja0xheW91dCBvcmllbnRhdGlvbj1cXFwidmVydGljYWxcXFwiIGlkPVxcXCJ0aGlyZC1jb250YWluZXJcXFwiIGNsYXNzPVxcXCJ3ZWxjb21lLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGl0bGVcXFwiIHRleHQ9XFxcIkxhIHR1YSBwb3NpemlvbmVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGV4dFxcXCIgaWQ9XFxcIndlbGNvbWUtZGVzY3JpcHRpb25cXFwiIHRleHQ9XFxcIkwnYXBwbGljYXppb25lIHV0aWxpenphIGxhIHR1YSBwb3NpemlvbmUgcGVyIG1vbml0b3JhcmUgaSB0dW9pIHNwb3N0YW1lbnRpIGUgY2FwaXJlIHNlIHZpZW5pIGEgY29udGF0dG8gY29uIHBlcnNvbmUgY29udGFnaWF0ZVxcXCIgdGV4dFdyYXAgPSBcXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10ZXh0XFxcIiBpZD1cXFwid2VsY29tZS1kZXNjcmlwdGlvblxcXCIgdGV4dD1cXFwiUGVyIHBlcm1ldHRlcmUgcXVlc3RhIG9wZXJhemlvbmUgaSB0dW9pIHNwb3N0YW1lbnRpIHZlbmdvbm8gYW5vbmltaXp6YXRpIGUgY29uZnJvbnRhdGkgY29uIHF1ZWxsaSBkaSBhbHRyaSB1dGVudGlcXFwiIHRleHRXcmFwID0gXFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGV4dFxcXCIgaWQ9XFxcIndlbGNvbWUtZGVzY3JpcHRpb25cXFwiIHRleHQ9XFxcIlBlciBmYXIgcXVlc3RvLCBwZXLDsiwgZGV2aSBhdXRvcml6emFyZSBsJ2FwcGxpY2F6aW9uZSBhIHV0aWxpenphcmUgbGEgdHVhIHBvc2l6aW9uZSwgc2VtcHJlLCBhbmNoZSBxdWFuZG8gw6ggY2hpdXNhXFxcIiB0ZXh0V3JhcCA9IFxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ3ZWxjb21lLXRleHRcXFwiIGlkPVxcXCJ3ZWxjb21lLWRlc2NyaXB0aW9uXFxcIiB0ZXh0PVxcXCJTZSBwZXIgdGUgdmEgYmVuZSB0dXR0byBjacOyLCBzZWxlemlvbmEgQ2xpY2NhIHN1bCBwdWxzYW50ZSBlIGNsaWNjYSBzdSAnU0VNUFJFJ1xcXCIgdGV4dFdyYXAgPSBcXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cXFwid2VsY29tZS1idXR0b25cXFwiIGlkPVxcXCJidXR0b24zXFxcIiB0ZXh0PVxcXCJBdHRpdmEgTG9jYWxpenphemlvbmVcXFwiPjwvQnV0dG9uPlxcclxcbiAgICA8L1N0YWNrTGF5b3V0PlxcclxcblxcclxcbiAgICA8L0Fic29sdXRlTGF5b3V0PlxcclxcblxcclxcblxcclxcbjwvUGFnZT5cXHJcXG5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS54bWxcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3Qgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVWaWV3TW9kZWwoKSB7XHJcbiAgICBjb25zdCB2aWV3TW9kZWwgPSBvYnNlcnZhYmxlTW9kdWxlLmZyb21PYmplY3Qoe1xyXG4gICAgICAgIC8qIEFkZCB5b3VyIHZpZXcgbW9kZWwgcHJvcGVydGllcyBoZXJlICovXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdmlld01vZGVsO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEhvbWVWaWV3TW9kZWw7XHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3dlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS12aWV3LW1vZGVsLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=