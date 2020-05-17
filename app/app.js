const application = require("tns-core-modules/application");
const localize = require("nativescript-localize");
application.setResources({ L: localize });



//var MathManagerModule = require("./managers/MathManager.js");
import MathManagerModule from "./managers/MathManager.js";
global.MathManager = new MathManagerModule();
import UserManagerModule from "./managers/UserManager.js";
global.UserManager = new UserManagerModule();
import LocationManagerModule from "./managers/LocationManager.js";
global.LocationManager = new LocationManagerModule();
import TraceManagerModule from "./managers/TraceManager.js";
global.TraceManager = new TraceManagerModule();

//console.log(JSON.stringify(MathManagerModule))

application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
