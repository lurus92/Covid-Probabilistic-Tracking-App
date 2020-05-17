require("nativescript-dom");
var dialogs = require("tns-core-modules/ui/dialogs");


const HomeViewModel = require("./welcome-view-model");
const Button = require("tns-core-modules/ui/button").Button;

function onNavigatingTo(args) {



    const page = args.object;
    page.bindingContext = new HomeViewModel();

    //That's our main
    //If the user is present I should immediately go to the home page.



    //Set up some listeners to the buttons
    var enums = require("tns-core-modules/ui/enums");

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

