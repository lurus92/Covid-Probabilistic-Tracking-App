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

exports.onNavigatingTo = onNavigatingTo;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlFQUFPLENBQUMseUNBQWtCO0FBQzFCLGNBQWMsbUJBQU8sQ0FBQywwREFBNkI7OztBQUduRCxzQkFBc0IsbUJBQU8sQ0FBQywwQ0FBc0I7QUFDcEQsZUFBZSxtQkFBTyxDQUFDLHdEQUE0Qjs7QUFFbkQ7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsc0RBQTJCOztBQUVuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLDZEQUE2RDtBQUN4RixLQUFLO0FBQ0wsQyIsImZpbGUiOiJidW5kbGUuNmE3YmE4ZWQ4MTAxZmI1MDFiNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZG9tXCIpO1xyXG52YXIgZGlhbG9ncyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XHJcblxyXG5cclxuY29uc3QgSG9tZVZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuL3dlbGNvbWUtdmlldy1tb2RlbFwiKTtcclxuY29uc3QgQnV0dG9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYnV0dG9uXCIpLkJ1dHRvbjtcclxuXHJcbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSG9tZVZpZXdNb2RlbCgpO1xyXG5cclxuICAgIC8vVGhhdCdzIG91ciBtYWluXHJcbiAgICAvL0lmIHRoZSB1c2VyIGlzIHByZXNlbnQgSSBzaG91bGQgaW1tZWRpYXRlbHkgZ28gdG8gdGhlIGhvbWUgcGFnZS5cclxuXHJcbiAgICAvL2lmIChnbG9iYWwuVXNlck1hbmFnZXIuc3RhdHVzID09IFwiaW5pdGlhbGl6ZWRcIilcclxuXHJcblxyXG4gICAgLy9TZXQgdXAgc29tZSBsaXN0ZW5lcnMgdG8gdGhlIGJ1dHRvbnNcclxuICAgIHZhciBlbnVtcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCIpO1xyXG5cclxuICAgIC8vcGFnZS5mcmFtZS5uYXZpZ2F0ZShcIi9ob21lL2hvbWUtcGFnZVwiKTtcclxuXHJcbiAgICB2YXIgZmlyc3RCdXR0b24gPSBwYWdlLmdldFZpZXdCeUlkKFwiYnV0dG9uMVwiKTtcclxuICAgIGZpcnN0QnV0dG9uLm9uKFwidGFwXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgc2Vjb25kQ29udGFpbmVyID0gcGFnZS5nZXRWaWV3QnlJZChcInNlY29uZC1jb250YWluZXJcIik7XHJcbiAgICAgICAgLy9DcmVhdGlvbiBvZiB0aGUgYnV0dG9uc1xyXG4gICAgICAgIHZhciBidXR0b25Db250YWluZXIgPSBwYWdlLmdldFZpZXdCeUlkKFwic3ludG9tcy1ncmlkXCIpO1xyXG4gICAgICAgIHZhciByID0gMDtcclxuICAgICAgICB2YXIgYyA9IDE7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBnbG9iYWwuTWF0aE1hbmFnZXIuc3ltcHRvbXMpe1xyXG4gICAgICAgICAgICBjb25zdCBncmlkQnV0dG9uID0gbmV3IEJ1dHRvbigpO1xyXG4gICAgICAgICAgICBncmlkQnV0dG9uLnRleHQgPSBpO1xyXG4gICAgICAgICAgICBncmlkQnV0dG9uLmNsYXNzTmFtZSA9IFwiYnV0dG9uLWRpc2Vhc2VcIlxyXG4gICAgICAgICAgICBncmlkQnV0dG9uLnJvdyA9IHI7XHJcbiAgICAgICAgICAgIGdyaWRCdXR0b24uY29sID0gYztcclxuICAgICAgICAgICAgZ3JpZEJ1dHRvbi5zeW1wdG9tTmFtZSA9IGk7XHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hZGRDaGlsZChncmlkQnV0dG9uKTtcclxuICAgICAgICAgICAgYysrO1xyXG4gICAgICAgICAgICBpZiAoYz4yKXsgYyA9IDE7IHIrKyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlY29uZENvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC01MDAsIHk6IDB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVuYWJsZUJ1dHRvbnMoKTtcclxuICAgIH0sdGhpcylcclxuICAgIHZhciBzZWNvbmRCdXR0b24gPSBwYWdlLmdldFZpZXdCeUlkKFwiYnV0dG9uMlwiKTtcclxuICAgIHNlY29uZEJ1dHRvbi5vbihcInRhcFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9BbmltYXRpb24gKyB1cGRhdGUgb2YgdGhlIGFnZVxyXG4gICAgICAgIFVzZXJNYW5hZ2VyLnVwZGF0ZUFnZShnZXRFbGVtZW50QnlJZChcInllYXItaW5wdXRcIikudGV4dCk7XHJcbiAgICAgICAgVXNlck1hbmFnZXIucHJvYmFiaWxpdHlUb0JlUG9zaXRpdmUgPSBNYXRoTWFuYWdlci5jYWxjdWxhdGVPdmVyYWxsUHJvYmFiaWxpdHlUb0hhdmVDT1ZJRCgpO1xyXG4gICAgICAgIC8vQW5pbWF0aW9uXHJcbiAgICAgICAgdmFyIHRoaXJkQ29udGFpbmVyID0gcGFnZS5nZXRWaWV3QnlJZChcInRoaXJkLWNvbnRhaW5lclwiKTtcclxuICAgICAgICB0aGlyZENvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IC01MDAsIHk6IDB9LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgICAgICAgY3VydmU6IGVudW1zLkFuaW1hdGlvbkN1cnZlLmVhc2VJblxyXG4gICAgICAgIH0pO1xyXG4gICAgfSx0aGlzKTtcclxuICAgIHZhciB0aGlyZEJ1dHRvbiA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJidXR0b24zXCIpO1xyXG4gICAgdGhpcmRCdXR0b24ub24oXCJ0YXBcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vY2FsbCB0byBsb2NhdGlvbk1hbmFnZXJcclxuICAgICAgICBnbG9iYWwuTG9jYXRpb25NYW5hZ2VyLmVuYWJsZUxvY2F0aW9uKCk7XHJcbiAgICAgICAgZ2xvYmFsLlVzZXJNYW5hZ2VyLnNldEFjdGl2ZSgpOyBcclxuICAgICAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKFwiL2hvbWUvaG9tZS1wYWdlXCIpO1xyXG4gICAgICBcclxuICAgIH0pXHJcbiAgICBmdW5jdGlvbiBlbmFibGVCdXR0b25zKCl7XHJcbiAgICAgICAgdmFyIGJ1dHRvbkRpc2Vhc2VBcnJheSA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidXR0b24tZGlzZWFzZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhidXR0b25EaXNlYXNlQXJyYXkubGVuZ3RoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNpYW9cIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGk8YnV0dG9uRGlzZWFzZUFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgYnV0dG9uRGlzZWFzZUFycmF5W2ldLm9uKFwidGFwXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ltcHRvbUFscmVhZHlBZGRlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJWdW9pIHJpbXVvdmVyZSBpbCBzaW50b21vP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiU8OsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm9cIixcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JheVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGdsb2JhbC5Vc2VyTWFuYWdlci5zeW1wdG9tc1tzZWxmLnN5bXB0b21OYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3ltcHRvbUFscmVhZHlBZGRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MucHJvbXB0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGEgcXVhbnRpIGdpb3JuaSBtb3N0cmkgaWwgc2ludG9tbzogXCIrdGhpcy5zeW1wdG9tTmFtZStcIj9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVdGlsaXp6YSB1biB2YWxvcmUgbnVtZXJpY28gcGVyIGZhdm9yZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJBbnVsbGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRUeXBlOiBkaWFsb2dzLmlucHV0VHlwZS50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3IucmVzdWx0ID0gZmFsc2UgKGNhbmNlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yLnJlc3VsdCA9IHRydWUgKG9rKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5yZXN1bHQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE86IHZhbGlkYXRpb24gZm9yIHIudGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLlVzZXJNYW5hZ2VyLnN5bXB0b21zW3NlbGYuc3ltcHRvbU5hbWVdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuVXNlck1hbmFnZXIuc3ltcHRvbXNbc2VsZi5zeW1wdG9tTmFtZV0udGltZVByZXNlbnQgPSBwYXJzZUZsb2F0KHIudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuVXNlck1hbmFnZXIuc3ltcHRvbXNbc2VsZi5zeW1wdG9tTmFtZV0ucHJvYmFiaWxpdHlUb0JlQ2F1c2VkQnlDT1ZJRCA9IE1hdGhNYW5hZ2VyLmNhbGN1bGF0ZVByb2JhYmlsaXR5VGhhdE9uZVN5bXB0b21Jc0Zyb21DT1ZJRChzZWxmLnN5bXB0b21OYW1lLCBmYWxzZSwgcGFyc2VGbG9hdChyLnRleHQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTWF0aE1hbmFnZXIuY2FsY3VsYXRlUHJvYmFiaWxpdHlUaGF0T25lU3ltcHRvbUlzRnJvbUNPVklEKHNlbGYuc3ltcHRvbU5hbWUsIGZhbHNlLCBwYXJzZUZsb2F0KHIudGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRleHQgPSBzZWxmLnRleHQgKyBcIiBzaW5jZSBcIiArci50ZXh0KyBcImRheXNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3ltcHRvbUFscmVhZHlBZGRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkRpYWxvZyByZXN1bHQ6IFwiICsgci5yZXN1bHQgKyBcIiwgdGV4dDogXCIgKyByLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSxidXR0b25EaXNlYXNlQXJyYXlbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xyXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vd2VsY29tZS1zZXR0aW5ncy93ZWxjb21lLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9