const appSettings = require("tns-core-modules/application-settings");

export default class UserManager{
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


