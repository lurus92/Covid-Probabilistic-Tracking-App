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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUFPLENBQUMseUNBQWtCO0FBQzFCLGNBQWMsbUJBQU8sQ0FBQywwREFBNkI7OztBQUduRCxzQkFBc0IsbUJBQU8sQ0FBQywwQ0FBc0I7QUFDcEQsZUFBZSxtQkFBTyxDQUFDLHdEQUE0Qjs7QUFFbkQ7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHNEQUEyQjs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw2REFBNkQ7QUFDeEYsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmE4NjI2MWI3MjFiMDA0ZjViOGZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRvbVwiKTtcclxudmFyIGRpYWxvZ3MgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpO1xyXG5cclxuXHJcbmNvbnN0IEhvbWVWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi93ZWxjb21lLXZpZXctbW9kZWxcIik7XHJcbmNvbnN0IEJ1dHRvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKS5CdXR0b247XHJcblxyXG5mdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzKSB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhvbWVWaWV3TW9kZWwoKTtcclxuXHJcbiAgICAvL1RoYXQncyBvdXIgbWFpblxyXG4gICAgLy9JZiB0aGUgdXNlciBpcyBwcmVzZW50IEkgc2hvdWxkIGltbWVkaWF0ZWx5IGdvIHRvIHRoZSBob21lIHBhZ2UuXHJcblxyXG5cclxuXHJcbiAgICAvL1NldCB1cCBzb21lIGxpc3RlbmVycyB0byB0aGUgYnV0dG9uc1xyXG4gICAgdmFyIGVudW1zID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIik7XHJcblxyXG4gICAgLy9wYWdlLmZyYW1lLm5hdmlnYXRlKFwiL2hvbWUvaG9tZS1wYWdlXCIpO1xyXG5cclxuICAgIHZhciBmaXJzdEJ1dHRvbiA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJidXR0b24xXCIpO1xyXG4gICAgZmlyc3RCdXR0b24ub24oXCJ0YXBcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBzZWNvbmRDb250YWluZXIgPSBwYWdlLmdldFZpZXdCeUlkKFwic2Vjb25kLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAvL0NyZWF0aW9uIG9mIHRoZSBidXR0b25zXHJcbiAgICAgICAgdmFyIGJ1dHRvbkNvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJzeW50b21zLWdyaWRcIik7XHJcbiAgICAgICAgdmFyIHIgPSAwO1xyXG4gICAgICAgIHZhciBjID0gMTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGdsb2JhbC5NYXRoTWFuYWdlci5zeW1wdG9tcyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRCdXR0b24gPSBuZXcgQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIGdyaWRCdXR0b24udGV4dCA9IGk7XHJcbiAgICAgICAgICAgIGdyaWRCdXR0b24uY2xhc3NOYW1lID0gXCJidXR0b24tZGlzZWFzZVwiXHJcbiAgICAgICAgICAgIGdyaWRCdXR0b24ucm93ID0gcjtcclxuICAgICAgICAgICAgZ3JpZEJ1dHRvbi5jb2wgPSBjO1xyXG4gICAgICAgICAgICBncmlkQnV0dG9uLnN5bXB0b21OYW1lID0gaTtcclxuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFkZENoaWxkKGdyaWRCdXR0b24pO1xyXG4gICAgICAgICAgICBjKys7XHJcbiAgICAgICAgICAgIGlmIChjPjIpeyBjID0gMTsgcisrIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2Vjb25kQ29udGFpbmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTUwMCwgeTogMH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgfSx0aGlzKVxyXG4gICAgdmFyIHNlY29uZEJ1dHRvbiA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJidXR0b24yXCIpO1xyXG4gICAgc2Vjb25kQnV0dG9uLm9uKFwidGFwXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAvL0FuaW1hdGlvbiArIHVwZGF0ZSBvZiB0aGUgYWdlXHJcbiAgICAgICAgVXNlck1hbmFnZXIudXBkYXRlQWdlKGdldEVsZW1lbnRCeUlkKFwieWVhci1pbnB1dFwiKS50ZXh0KTtcclxuICAgICAgICBVc2VyTWFuYWdlci5wcm9iYWJpbGl0eVRvQmVQb3NpdGl2ZSA9IE1hdGhNYW5hZ2VyLmNhbGN1bGF0ZU92ZXJhbGxQcm9iYWJpbGl0eVRvSGF2ZUNPVklEKCk7XHJcbiAgICAgICAgLy9BbmltYXRpb25cclxuICAgICAgICB2YXIgdGhpcmRDb250YWluZXIgPSBwYWdlLmdldFZpZXdCeUlkKFwidGhpcmQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXJkQ29udGFpbmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTUwMCwgeTogMH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LHRoaXMpO1xyXG4gICAgdmFyIHRoaXJkQnV0dG9uID0gcGFnZS5nZXRWaWV3QnlJZChcImJ1dHRvbjNcIik7XHJcbiAgICB0aGlyZEJ1dHRvbi5vbihcInRhcFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9jYWxsIHRvIGxvY2F0aW9uTWFuYWdlclxyXG4gICAgICAgIGdsb2JhbC5Mb2NhdGlvbk1hbmFnZXIuZW5hYmxlTG9jYXRpb24oKTtcclxuICAgICAgICBnbG9iYWwuVXNlck1hbmFnZXIuc2V0QWN0aXZlKCk7IFxyXG4gICAgICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCIvaG9tZS9ob21lLXBhZ2VcIik7XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbnMoKXtcclxuICAgICAgICB2YXIgYnV0dG9uRGlzZWFzZUFycmF5ID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ1dHRvbi1kaXNlYXNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbkRpc2Vhc2VBcnJheS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2lhb1wiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaTxidXR0b25EaXNlYXNlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBidXR0b25EaXNlYXNlQXJyYXlbaV0ub24oXCJ0YXBcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zeW1wdG9tQWxyZWFkeUFkZGVkKXtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlZ1b2kgcmltdW92ZXJlIGlsIHNpbnRvbW8/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTw6xcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmF5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZ2xvYmFsLlVzZXJNYW5hZ2VyLnN5bXB0b21zW3NlbGYuc3ltcHRvbU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zeW1wdG9tQWxyZWFkeUFkZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEYSBxdWFudGkgZ2lvcm5pIG1vc3RyaSBpbCBzaW50b21vOiBcIit0aGlzLnN5bXB0b21OYW1lK1wiP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlV0aWxpenphIHVuIHZhbG9yZSBudW1lcmljbyBwZXIgZmF2b3JlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkFudWxsYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vci5yZXN1bHQgPSBmYWxzZSAoY2FuY2VsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3IucmVzdWx0ID0gdHJ1ZSAob2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogdmFsaWRhdGlvbiBmb3Igci50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuVXNlck1hbmFnZXIuc3ltcHRvbXNbc2VsZi5zeW1wdG9tTmFtZV0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5Vc2VyTWFuYWdlci5zeW1wdG9tc1tzZWxmLnN5bXB0b21OYW1lXS50aW1lUHJlc2VudCA9IHBhcnNlRmxvYXQoci50ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5Vc2VyTWFuYWdlci5zeW1wdG9tc1tzZWxmLnN5bXB0b21OYW1lXS5wcm9iYWJpbGl0eVRvQmVDYXVzZWRCeUNPVklEID0gTWF0aE1hbmFnZXIuY2FsY3VsYXRlUHJvYmFiaWxpdHlUaGF0T25lU3ltcHRvbUlzRnJvbUNPVklEKHNlbGYuc3ltcHRvbU5hbWUsIGZhbHNlLCBwYXJzZUZsb2F0KHIudGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9NYXRoTWFuYWdlci5jYWxjdWxhdGVQcm9iYWJpbGl0eVRoYXRPbmVTeW1wdG9tSXNGcm9tQ09WSUQoc2VsZi5zeW1wdG9tTmFtZSwgZmFsc2UsIHBhcnNlRmxvYXQoci50ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGV4dCA9IHNlbGYudGV4dCArIFwiIHNpbmNlIFwiICtyLnRleHQrIFwiZGF5c1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zeW1wdG9tQWxyZWFkeUFkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByLnJlc3VsdCArIFwiLCB0ZXh0OiBcIiArIHIudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LGJ1dHRvbkRpc2Vhc2VBcnJheVtpXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBvblBhZ2VMb2FkZWQoYXJncyl7XHJcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUgUGFnZSBMb2FkZWRcIik7XHJcbiAgICBpZiAoZ2xvYmFsLlVzZXJNYW5hZ2VyLnN0YXR1cyA9PSBcImluaXRpYWxpemVkXCIpXHJcbiAgICAgICAgcGFnZS5mcmFtZS5uYXZpZ2F0ZShcIi9ob21lL2hvbWUtcGFnZVwiKTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnRzLm9uTmF2aWdhdGluZ1RvID0gb25OYXZpZ2F0aW5nVG87XHJcbmV4cG9ydHMub25QYWdlTG9hZGVkID0gb25QYWdlTG9hZGVkO1xyXG5cclxuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3dlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vd2VsY29tZS1zZXR0aW5ncy93ZWxjb21lLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==