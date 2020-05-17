webpackHotUpdate("bundle",{

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

    //if (global.UserManager.status == "initialized")


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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUFPLENBQUMseUNBQWtCO0FBQzFCLGNBQWMsbUJBQU8sQ0FBQywwREFBNkI7OztBQUduRCxzQkFBc0IsbUJBQU8sQ0FBQywwQ0FBc0I7QUFDcEQsZUFBZSxtQkFBTyxDQUFDLHdEQUE0Qjs7QUFFbkQ7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsc0RBQTJCOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw2REFBNkQ7QUFDeEYsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjkzM2NlYjJhMDhhZWNlZTJjODUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRvbVwiKTtcclxudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xyXG5cclxuXHJcbmNvbnN0IEhvbWVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi93ZWxjb21lLXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IEJ1dHRvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKS5CdXR0b247XHJcblxyXG5mdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhvbWVWaWV3TW9kZWwoKTtcclxuXHJcbiAgICAvL1RoYXQncyBvdXIgbWFpblxyXG4gICAgLy9JZiB0aGUgdXNlciBpcyBwcmVzZW50IEkgc2hvdWxkIGltbWVkaWF0ZWx5IGdvIHRvIHRoZSBob21lIHBhZ2UuXHJcblxyXG4gICAgLy9pZiAoZ2xvYmFsLlVzZXJNYW5hZ2VyLnN0YXR1cyA9PSBcImluaXRpYWxpemVkXCIpXHJcblxyXG5cclxuICAgIC8vU2V0IHVwIHNvbWUgbGlzdGVuZXJzIHRvIHRoZSBidXR0b25zXHJcbiAgICB2YXIgZW51bXMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiKTtcclxuXHJcbiAgICAvL3BhZ2UuZnJhbWUubmF2aWdhdGUoXCIvaG9tZS9ob21lLXBhZ2VcIik7XHJcblxyXG4gICAgdmFyIGZpcnN0QnV0dG9uID0gcGFnZS5nZXRWaWV3QnlJZChcImJ1dHRvbjFcIik7XHJcbiAgICBmaXJzdEJ1dHRvbi5vbihcInRhcFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHNlY29uZENvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJzZWNvbmQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIC8vQ3JlYXRpb24gb2YgdGhlIGJ1dHRvbnNcclxuICAgICAgICB2YXIgYnV0dG9uQ29udGFpbmVyID0gcGFnZS5nZXRWaWV3QnlJZChcInN5bnRvbXMtZ3JpZFwiKTtcclxuICAgICAgICB2YXIgciA9IDA7XHJcbiAgICAgICAgdmFyIGMgPSAxO1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gZ2xvYmFsLk1hdGhNYW5hZ2VyLnN5bXB0b21zKXtcclxuICAgICAgICAgICAgY29uc3QgZ3JpZEJ1dHRvbiA9IG5ldyBCdXR0b24oKTtcclxuICAgICAgICAgICAgZ3JpZEJ1dHRvbi50ZXh0ID0gaTtcclxuICAgICAgICAgICAgZ3JpZEJ1dHRvbi5jbGFzc05hbWUgPSBcImJ1dHRvbi1kaXNlYXNlXCJcclxuICAgICAgICAgICAgZ3JpZEJ1dHRvbi5yb3cgPSByO1xyXG4gICAgICAgICAgICBncmlkQnV0dG9uLmNvbCA9IGM7XHJcbiAgICAgICAgICAgIGdyaWRCdXR0b24uc3ltcHRvbU5hbWUgPSBpO1xyXG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYWRkQ2hpbGQoZ3JpZEJ1dHRvbik7XHJcbiAgICAgICAgICAgIGMrKztcclxuICAgICAgICAgICAgaWYgKGM+Mil7IGMgPSAxOyByKysgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWNvbmRDb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtNTAwLCB5OiAwfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgICAgICB9KTtcclxuICAgICAgICBlbmFibGVCdXR0b25zKCk7XHJcbiAgICB9LHRoaXMpXHJcbiAgICB2YXIgc2Vjb25kQnV0dG9uID0gcGFnZS5nZXRWaWV3QnlJZChcImJ1dHRvbjJcIik7XHJcbiAgICBzZWNvbmRCdXR0b24ub24oXCJ0YXBcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vQW5pbWF0aW9uICsgdXBkYXRlIG9mIHRoZSBhZ2VcclxuICAgICAgICBVc2VyTWFuYWdlci51cGRhdGVBZ2UoZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyLWlucHV0XCIpLnRleHQpO1xyXG4gICAgICAgIFVzZXJNYW5hZ2VyLnByb2JhYmlsaXR5VG9CZVBvc2l0aXZlID0gTWF0aE1hbmFnZXIuY2FsY3VsYXRlT3ZlcmFsbFByb2JhYmlsaXR5VG9IYXZlQ09WSUQoKTtcclxuICAgICAgICAvL0FuaW1hdGlvblxyXG4gICAgICAgIHZhciB0aGlyZENvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJ0aGlyZC1jb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcmRDb250YWluZXIuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAtNTAwLCB5OiAwfSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBlbnVtcy5BbmltYXRpb25DdXJ2ZS5lYXNlSW5cclxuICAgICAgICB9KTtcclxuICAgIH0sdGhpcyk7XHJcbiAgICB2YXIgdGhpcmRCdXR0b24gPSBwYWdlLmdldFZpZXdCeUlkKFwiYnV0dG9uM1wiKTtcclxuICAgIHRoaXJkQnV0dG9uLm9uKFwidGFwXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAvL2NhbGwgdG8gbG9jYXRpb25NYW5hZ2VyXHJcbiAgICAgICAgZ2xvYmFsLkxvY2F0aW9uTWFuYWdlci5lbmFibGVMb2NhdGlvbigpO1xyXG4gICAgICAgIGdsb2JhbC5Vc2VyTWFuYWdlci5zZXRBY3RpdmUoKTsgXHJcbiAgICAgICAgcGFnZS5mcmFtZS5uYXZpZ2F0ZShcIi9ob21lL2hvbWUtcGFnZVwiKTtcclxuICAgICAgXHJcbiAgICB9KVxyXG4gICAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpe1xyXG4gICAgICAgIHZhciBidXR0b25EaXNlYXNlQXJyYXkgPSBnZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnV0dG9uLWRpc2Vhc2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYnV0dG9uRGlzZWFzZUFycmF5Lmxlbmd0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaWFvXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpPGJ1dHRvbkRpc2Vhc2VBcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGJ1dHRvbkRpc2Vhc2VBcnJheVtpXS5vbihcInRhcFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN5bXB0b21BbHJlYWR5QWRkZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVnVvaSByaW11b3ZlcmUgaWwgc2ludG9tbz9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIlPDrFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbihyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyYXlcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnbG9iYWwuVXNlck1hbmFnZXIuc3ltcHRvbXNbc2VsZi5zeW1wdG9tTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN5bXB0b21BbHJlYWR5QWRkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRhIHF1YW50aSBnaW9ybmkgbW9zdHJpIGlsIHNpbnRvbW86IFwiK3RoaXMuc3ltcHRvbU5hbWUrXCI/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVXRpbGl6emEgdW4gdmFsb3JlIG51bWVyaWNvIHBlciBmYXZvcmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQW51bGxhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZTogZGlhbG9ncy5pbnB1dFR5cGUudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yLnJlc3VsdCA9IGZhbHNlIChjYW5jZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vci5yZXN1bHQgPSB0cnVlIChvaylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIucmVzdWx0KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiB2YWxpZGF0aW9uIGZvciByLnRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5Vc2VyTWFuYWdlci5zeW1wdG9tc1tzZWxmLnN5bXB0b21OYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLlVzZXJNYW5hZ2VyLnN5bXB0b21zW3NlbGYuc3ltcHRvbU5hbWVdLnRpbWVQcmVzZW50ID0gcGFyc2VGbG9hdChyLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLlVzZXJNYW5hZ2VyLnN5bXB0b21zW3NlbGYuc3ltcHRvbU5hbWVdLnByb2JhYmlsaXR5VG9CZUNhdXNlZEJ5Q09WSUQgPSBNYXRoTWFuYWdlci5jYWxjdWxhdGVQcm9iYWJpbGl0eVRoYXRPbmVTeW1wdG9tSXNGcm9tQ09WSUQoc2VsZi5zeW1wdG9tTmFtZSwgZmFsc2UsIHBhcnNlRmxvYXQoci50ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01hdGhNYW5hZ2VyLmNhbGN1bGF0ZVByb2JhYmlsaXR5VGhhdE9uZVN5bXB0b21Jc0Zyb21DT1ZJRChzZWxmLnN5bXB0b21OYW1lLCBmYWxzZSwgcGFyc2VGbG9hdChyLnRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50ZXh0ID0gc2VsZi50ZXh0ICsgXCIgc2luY2UgXCIgK3IudGV4dCsgXCJkYXlzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnN5bXB0b21BbHJlYWR5QWRkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJEaWFsb2cgcmVzdWx0OiBcIiArIHIucmVzdWx0ICsgXCIsIHRleHQ6IFwiICsgci50ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sYnV0dG9uRGlzZWFzZUFycmF5W2ldKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uUGFnZUxvYWRlZChhcmdzKXtcclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcclxuICAgIGNvbnNvbGUubG9nKFwiV2VsY29tZSBQYWdlIExvYWRlZFwiKTtcclxuICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCIvaG9tZS9ob21lLXBhZ2VcIik7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xyXG5leHBvcnRzLm9uUGFnZUxvYWRlZCA9IG9uUGFnZUxvYWRlZDtcclxuXHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3dlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICJdLCJzb3VyY2VSb290IjoiIn0=