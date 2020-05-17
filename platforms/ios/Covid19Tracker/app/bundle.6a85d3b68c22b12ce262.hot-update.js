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
    console.log("Welcome Page Loaded")
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS54bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRUFBTyxDQUFDLHlDQUFrQjtBQUMxQixjQUFjLG1CQUFPLENBQUMsMERBQTZCOzs7QUFHbkQsc0JBQXNCLG1CQUFPLENBQUMsMENBQXNCO0FBQ3BELGVBQWUsbUJBQU8sQ0FBQyx3REFBNEI7O0FBRW5EOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHNEQUEyQjs7QUFFbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QztBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw2REFBNkQ7QUFDeEYsS0FBSztBQUNMLEM7Ozs7Ozs7OztBQ3hJQSxpK0VBQWkrRSxTQUFTLDh0RTtBQUMxK0UsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsOERBQThEO0FBQ3pGLEtBQUs7QUFDTCxDIiwiZmlsZSI6ImJ1bmRsZS42YTg1ZDNiNjhjMjJiMTJjZTI2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kb21cIik7XHJcbnZhciBkaWFsb2dzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiKTtcclxuXHJcblxyXG5jb25zdCBIb21lVmlld01vZGVsID0gcmVxdWlyZShcIi4vd2VsY29tZS12aWV3LW1vZGVsXCIpO1xyXG5jb25zdCBCdXR0b24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIikuQnV0dG9uO1xyXG5cclxuZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIb21lVmlld01vZGVsKCk7XHJcblxyXG4gICAgLy9UaGF0J3Mgb3VyIG1haW5cclxuICAgIC8vSWYgdGhlIHVzZXIgaXMgcHJlc2VudCBJIHNob3VsZCBpbW1lZGlhdGVseSBnbyB0byB0aGUgaG9tZSBwYWdlLlxyXG5cclxuICAgIC8vaWYgKGdsb2JhbC5Vc2VyTWFuYWdlci5zdGF0dXMgPT0gXCJpbml0aWFsaXplZFwiKVxyXG5cclxuXHJcbiAgICAvL1NldCB1cCBzb21lIGxpc3RlbmVycyB0byB0aGUgYnV0dG9uc1xyXG4gICAgdmFyIGVudW1zID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIik7XHJcblxyXG4gICAgLy9wYWdlLmZyYW1lLm5hdmlnYXRlKFwiL2hvbWUvaG9tZS1wYWdlXCIpO1xyXG5cclxuICAgIHZhciBmaXJzdEJ1dHRvbiA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJidXR0b24xXCIpO1xyXG4gICAgZmlyc3RCdXR0b24ub24oXCJ0YXBcIixmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBzZWNvbmRDb250YWluZXIgPSBwYWdlLmdldFZpZXdCeUlkKFwic2Vjb25kLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAvL0NyZWF0aW9uIG9mIHRoZSBidXR0b25zXHJcbiAgICAgICAgdmFyIGJ1dHRvbkNvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJzeW50b21zLWdyaWRcIik7XHJcbiAgICAgICAgdmFyIHIgPSAwO1xyXG4gICAgICAgIHZhciBjID0gMTtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGdsb2JhbC5NYXRoTWFuYWdlci5zeW1wdG9tcyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGdyaWRCdXR0b24gPSBuZXcgQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIGdyaWRCdXR0b24udGV4dCA9IGk7XHJcbiAgICAgICAgICAgIGdyaWRCdXR0b24uY2xhc3NOYW1lID0gXCJidXR0b24tZGlzZWFzZVwiXHJcbiAgICAgICAgICAgIGdyaWRCdXR0b24ucm93ID0gcjtcclxuICAgICAgICAgICAgZ3JpZEJ1dHRvbi5jb2wgPSBjO1xyXG4gICAgICAgICAgICBncmlkQnV0dG9uLnN5bXB0b21OYW1lID0gaTtcclxuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFkZENoaWxkKGdyaWRCdXR0b24pO1xyXG4gICAgICAgICAgICBjKys7XHJcbiAgICAgICAgICAgIGlmIChjPjIpeyBjID0gMTsgcisrIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2Vjb25kQ29udGFpbmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTUwMCwgeTogMH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZW5hYmxlQnV0dG9ucygpO1xyXG4gICAgfSx0aGlzKVxyXG4gICAgdmFyIHNlY29uZEJ1dHRvbiA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJidXR0b24yXCIpO1xyXG4gICAgc2Vjb25kQnV0dG9uLm9uKFwidGFwXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAvL0FuaW1hdGlvbiArIHVwZGF0ZSBvZiB0aGUgYWdlXHJcbiAgICAgICAgVXNlck1hbmFnZXIudXBkYXRlQWdlKGdldEVsZW1lbnRCeUlkKFwieWVhci1pbnB1dFwiKS50ZXh0KTtcclxuICAgICAgICBVc2VyTWFuYWdlci5wcm9iYWJpbGl0eVRvQmVQb3NpdGl2ZSA9IE1hdGhNYW5hZ2VyLmNhbGN1bGF0ZU92ZXJhbGxQcm9iYWJpbGl0eVRvSGF2ZUNPVklEKCk7XHJcbiAgICAgICAgLy9BbmltYXRpb25cclxuICAgICAgICB2YXIgdGhpcmRDb250YWluZXIgPSBwYWdlLmdldFZpZXdCeUlkKFwidGhpcmQtY29udGFpbmVyXCIpO1xyXG4gICAgICAgIHRoaXJkQ29udGFpbmVyLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogLTUwMCwgeTogMH0sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogZW51bXMuQW5pbWF0aW9uQ3VydmUuZWFzZUluXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LHRoaXMpO1xyXG4gICAgdmFyIHRoaXJkQnV0dG9uID0gcGFnZS5nZXRWaWV3QnlJZChcImJ1dHRvbjNcIik7XHJcbiAgICB0aGlyZEJ1dHRvbi5vbihcInRhcFwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy9jYWxsIHRvIGxvY2F0aW9uTWFuYWdlclxyXG4gICAgICAgIGdsb2JhbC5Mb2NhdGlvbk1hbmFnZXIuZW5hYmxlTG9jYXRpb24oKTtcclxuICAgICAgICBnbG9iYWwuVXNlck1hbmFnZXIuc2V0QWN0aXZlKCk7IFxyXG4gICAgICAgIHBhZ2UuZnJhbWUubmF2aWdhdGUoXCIvaG9tZS9ob21lLXBhZ2VcIik7XHJcbiAgICAgIFxyXG4gICAgfSlcclxuICAgIGZ1bmN0aW9uIGVuYWJsZUJ1dHRvbnMoKXtcclxuICAgICAgICB2YXIgYnV0dG9uRGlzZWFzZUFycmF5ID0gZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ1dHRvbi1kaXNlYXNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbkRpc2Vhc2VBcnJheS5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2lhb1wiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaTxidXR0b25EaXNlYXNlQXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBidXR0b25EaXNlYXNlQXJyYXlbaV0ub24oXCJ0YXBcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zeW1wdG9tQWxyZWFkeUFkZGVkKXtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLnByb21wdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlZ1b2kgcmltdW92ZXJlIGlsIHNpbnRvbW8/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJTw6xcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJOb1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJhY2tncm91bmRDb2xvciA9IFwibGlnaHRncmF5XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZ2xvYmFsLlVzZXJNYW5hZ2VyLnN5bXB0b21zW3NlbGYuc3ltcHRvbU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zeW1wdG9tQWxyZWFkeUFkZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9ncy5wcm9tcHQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJEYSBxdWFudGkgZ2lvcm5pIG1vc3RyaSBpbCBzaW50b21vOiBcIit0aGlzLnN5bXB0b21OYW1lK1wiP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlV0aWxpenphIHVuIHZhbG9yZSBudW1lcmljbyBwZXIgZmF2b3JlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkFudWxsYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vci5yZXN1bHQgPSBmYWxzZSAoY2FuY2VsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3IucmVzdWx0ID0gdHJ1ZSAob2spXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLnJlc3VsdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogdmFsaWRhdGlvbiBmb3Igci50ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWwuVXNlck1hbmFnZXIuc3ltcHRvbXNbc2VsZi5zeW1wdG9tTmFtZV0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5Vc2VyTWFuYWdlci5zeW1wdG9tc1tzZWxmLnN5bXB0b21OYW1lXS50aW1lUHJlc2VudCA9IHBhcnNlRmxvYXQoci50ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbC5Vc2VyTWFuYWdlci5zeW1wdG9tc1tzZWxmLnN5bXB0b21OYW1lXS5wcm9iYWJpbGl0eVRvQmVDYXVzZWRCeUNPVklEID0gTWF0aE1hbmFnZXIuY2FsY3VsYXRlUHJvYmFiaWxpdHlUaGF0T25lU3ltcHRvbUlzRnJvbUNPVklEKHNlbGYuc3ltcHRvbU5hbWUsIGZhbHNlLCBwYXJzZUZsb2F0KHIudGV4dCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9NYXRoTWFuYWdlci5jYWxjdWxhdGVQcm9iYWJpbGl0eVRoYXRPbmVTeW1wdG9tSXNGcm9tQ09WSUQoc2VsZi5zeW1wdG9tTmFtZSwgZmFsc2UsIHBhcnNlRmxvYXQoci50ZXh0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudGV4dCA9IHNlbGYudGV4dCArIFwiIHNpbmNlIFwiICtyLnRleHQrIFwiZGF5c1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zeW1wdG9tQWxyZWFkeUFkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRGlhbG9nIHJlc3VsdDogXCIgKyByLnJlc3VsdCArIFwiLCB0ZXh0OiBcIiArIHIudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LGJ1dHRvbkRpc2Vhc2VBcnJheVtpXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBvblBhZ2VMb2FkZWQoYXJncyl7XHJcbiAgICBjb25zdCBwYWdlID0gYXJncy5vYmplY3Q7XHJcbiAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUgUGFnZSBMb2FkZWRcIilcclxufVxyXG5cclxuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xyXG5leHBvcnRzLm9uUGFnZUxvYWRlZCA9IG9uUGFnZUxvYWRlZDtcclxuXHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi93ZWxjb21lLXNldHRpbmdzL3dlbGNvbWUtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3dlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS1wYWdlLmpzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxubW9kdWxlLmV4cG9ydHMgPSBcIjxQYWdlXFxyXFxuICAgIG5hdmlnYXRpbmdUbz1cXFwib25OYXZpZ2F0aW5nVG9cXFwiICBcXHJcXG4gICAgbG9hZGVkPVxcXCJvblBhZ2VMb2FkZWRcXFwiXFxyXFxuICAgIHhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiPlxcclxcblxcclxcbiAgICA8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJDT1ZJRC0xOSBUcmFja2VyXFxcIj48L0xhYmVsPlxcclxcbiAgICA8L0FjdGlvbkJhcj5cXHJcXG5cXHJcXG4gICAgPEFic29sdXRlTGF5b3V0PlxcclxcblxcclxcbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiBpZD1cXFwibWFpbi1jb250YWluZXJcXFwiIGNsYXNzPVxcXCJ3ZWxjb21lLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGl0bGVcXFwiIHRleHQ9XFxcIkJlbnZlbnV0b1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10ZXh0XFxcIiBpZD1cXFwid2VsY29tZS1kZXNjcmlwdGlvblxcXCIgdGV4dD1cXFwiUXVlc3RhIGFwcCB0aSBwZXJtZXR0ZXLDoCBkaSB2ZWRlcmUgbGEgdHVhIHByb2JhYmlsaXTDoCBkaSBwb3NpdGl2aXTDoCBhbGxhIG1hbGF0dGlhIENPVklELTE5LCBpbiBiYXNlIGFsIHR1byBwcm9maWxvIG1lZGljbyBlIGFpIHR1b2kgc3Bvc3RhbWVudGlcXFwiIHRleHRXcmFwID0gXFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGV4dFxcXCIgaWQ9XFxcIndlbGNvbWUtZGVzY3JpcHRpb24xXFxcIiB0ZXh0PVxcXCJRdWVzdG8gYWl1dGVyw6AgdGUsIGUgbGUgcGVyc29uZSBjaGUgdGkgc29ubyB2aWNpbm8sIGEgY2FwaXJlIGNvbWUgY29tcG9ydGFydGkgZHVyYW50ZSBxdWVzdGEgZW1lcmdlbnphXFxcIiB0ZXh0V3JhcCA9IFxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ3ZWxjb21lLXRleHRcXFwiIGlkPVxcXCJ3ZWxjb21lLWRlc2NyaXB0aW9uMlxcXCIgdGV4dD1cXFwiUmljb3JkYSBzZW1wcmUgY2hlIHF1ZXN0J2FwcCBub24gc29zdGl0dWlzY2UgaW4gYWxjdW4gbW9kbyB1biBwYXJlcmUgbWVkaWNvIGUgdHV0dGkgaSBzdW9pIGRhdGkgc29ubyBwdXJhbWVudGUgaW5kaWNhdGl2aVxcXCIgdGV4dFdyYXAgPSBcXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10ZXh0XFxcIiBpZD1cXFwid2VsY29tZS1kZXNjcmlwdGlvbjNcXFwiIHRleHQ9XFxcIlNlIHRpIHNlbnRpIG1hbGUsIHZhIGRhIHVuIG1lZGljb1xcXCIgdGV4dFdyYXAgPSBcXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10ZXh0XFxcIiBpZD1cXFwid2VsY29tZS1kZXNjcmlwdGlvbjRcXFwiIHRleHQ9XFxcIkUgc2Ugc3RhaSBiZW5lLCBsaW1pdGEgaSB0dW9pIG1vdmltZW50aSBpbCBwacO5IHBvc3NpYmlsZS5cXFwiIHRleHRXcmFwID0gXFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJ3ZWxjb21lLWJ1dHRvblxcXCIgaWQ9XFxcImJ1dHRvbjFcXFwiIHRleHQ9XFxcIkhvIGNhcGl0b1xcXCI+PC9CdXR0b24+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuICAgIDxTY3JvbGxWaWV3IGlkPVxcXCJzZWNvbmQtY29udGFpbmVyXFxcIiBjbGFzcz1cXFwid2VsY29tZS1jb250YWluZXJcXFwiPlxcclxcbiAgICA8U3RhY2tMYXlvdXQgb3JpZW50YXRpb249XFxcInZlcnRpY2FsXFxcIiAgPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ3ZWxjb21lLXRpdGxlXFxcIiB0ZXh0PVxcXCJJbCBtaW8gcHJvZmlsb1xcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10ZXh0XFxcIiBpZD1cXFwid2VsY29tZS1kZXNjcmlwdGlvblxcXCIgdGV4dD1cXFwiUGVyIHBvdGVyIGZvcm5pcnRpIHVuYSBzdGltYSBlZmZpY2FjZSwgbCdhcHAgZGV2ZSBzYXBlcmUgcGnDuSBpbmZvcm1hemlvbmkgbWVkaWNoZSBzdSBkaSB0ZS5cXFwiIHRleHRXcmFwID0gXFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGV4dFxcXCIgaWQ9XFxcIndlbGNvbWUtZGVzY3JpcHRpb25cXFwiIHRleHQ9XFxcIlF1ZXN0ZSBpbmZvcm1hemlvbmkgc2FyYW5ubyBzYWx2YXRlIHN1IHF1ZXN0byB0ZWxlZm9ubyBlIG5vbiBzYXJhbm5vIG1haSBjb25kaXZpc2UgY29uIG5lc3N1bm9cXFwiIHRleHRXcmFwID0gXFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8RG9ja0xheW91dCBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCIgY2xhc3M9XFxcImZvcm0tcm93XFxcIj5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQW5ubyBkZWxsYSB0dWEgbmFzY2l0YVxcXCIgZG9jaz1cXFwibGVmdFxcXCIgaWQ9XFxcInllYXItZmllbGRcXFwiIGNsYXNzPVxcXCJ3ZWxjb21lLXRleHRcXFwiID48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XFxcIndlbGNvbWUtaW5wdXRcXFwiIGlkPVxcXCJ5ZWFyLWlucHV0XFxcIiBoaW50PVxcXCJJbnNlcmlzY2kgYW5ub1xcXCIga2V5Ym9hcmRUeXBlPVxcXCJwaG9uZVxcXCI+PC9UZXh0RmllbGQ+XFxyXFxuICAgICAgICAgICAgPCEtLUxpc3RQaWNrZXIgaXRlbXM9XFxcInt7IFsxLDIgXX19XFxcIiBjbGFzcz1cXFwicGlja2VyXFxcIiB0ZXh0RmllbGQ9XFxcInllYXItZmllbGRcXFwiLy0tPlxcclxcbiAgICAgICAgPC9Eb2NrTGF5b3V0PlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ3ZWxjb21lLXRleHRcXFwiIGlkPVxcXCJ3ZWxjb21lLW90aGVyLXN5bnRob21zXFxcIiB0ZXh0PVxcXCJIYWkgYXZ1dG8gcXVhbGN1bm8gZGkgcXVlc3RpIHNpbnRvbWkgdWx0aW1hbWVudGU/XFxcIiB0ZXh0V3JhcCA9IFxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IGlkPVxcXCJzeW50b21zLWdyaWRcXFwiIGNvbHVtbnM9XFxcIiosMTUwLCAxNTAsKlxcXCIgcm93cz1cXFwiMTUwLCAxNTAsIDE1MCwxNTAsIDE1MCwgMTUwLDE1MFxcXCIgID5cXHJcXG4gICAgICAgICAgICA8IS0tXFxyXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3M9XFxcImJ1dHRvbi1kaXNlYXNlXFxcIiB0ZXh0PVxcXCJGZWJicmVcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiA+PC9CdXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiVG9zc2UsIGdvbGEgc2VjY2FcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIyXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJGYXRpY2FcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIxXFxcIiA+PC9CdXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiQ29uZ2VzdGlvbmUgbmFzYWxlXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMlxcXCIgPjwvQnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIk5hdXNlYVxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiID48L0J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJDb25mdXNpb25lXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMlxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICAgICAgLS0+XFxyXFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJ3ZWxjb21lLWJ1dHRvblxcXCIgaWQ9XFxcImJ1dHRvbjJcXFwiIHRleHQ9XFxcIkF2YW50aVxcXCI+PC9CdXR0b24+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgIDwvU2Nyb2xsVmlldz5cXHJcXG5cXHJcXG5cXHJcXG4gICAgPFN0YWNrTGF5b3V0IG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCIgaWQ9XFxcInRoaXJkLWNvbnRhaW5lclxcXCIgY2xhc3M9XFxcIndlbGNvbWUtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10aXRsZVxcXCIgdGV4dD1cXFwiTGEgdHVhIHBvc2l6aW9uZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10ZXh0XFxcIiBpZD1cXFwid2VsY29tZS1kZXNjcmlwdGlvblxcXCIgdGV4dD1cXFwiTCdhcHBsaWNhemlvbmUgdXRpbGl6emEgbGEgdHVhIHBvc2l6aW9uZSBwZXIgbW9uaXRvcmFyZSBpIHR1b2kgc3Bvc3RhbWVudGkgZSBjYXBpcmUgc2UgdmllbmkgYSBjb250YXR0byBjb24gcGVyc29uZSBjb250YWdpYXRlXFxcIiB0ZXh0V3JhcCA9IFxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJ3ZWxjb21lLXRleHRcXFwiIGlkPVxcXCJ3ZWxjb21lLWRlc2NyaXB0aW9uXFxcIiB0ZXh0PVxcXCJQZXIgcGVybWV0dGVyZSBxdWVzdGEgb3BlcmF6aW9uZSBpIHR1b2kgc3Bvc3RhbWVudGkgdmVuZ29ubyBhbm9uaW1penphdGkgZSBjb25mcm9udGF0aSBjb24gcXVlbGxpIGRpIGFsdHJpIHV0ZW50aVxcXCIgdGV4dFdyYXAgPSBcXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgIDxMYWJlbCBjbGFzcz1cXFwid2VsY29tZS10ZXh0XFxcIiBpZD1cXFwid2VsY29tZS1kZXNjcmlwdGlvblxcXCIgdGV4dD1cXFwiUGVyIGZhciBxdWVzdG8sIHBlcsOyLCBkZXZpIGF1dG9yaXp6YXJlIGwnYXBwbGljYXppb25lIGEgdXRpbGl6emFyZSBsYSB0dWEgcG9zaXppb25lLCBzZW1wcmUsIGFuY2hlIHF1YW5kbyDDqCBjaGl1c2FcXFwiIHRleHRXcmFwID0gXFxcInRydWVcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcIndlbGNvbWUtdGV4dFxcXCIgaWQ9XFxcIndlbGNvbWUtZGVzY3JpcHRpb25cXFwiIHRleHQ9XFxcIlNlIHBlciB0ZSB2YSBiZW5lIHR1dHRvIGNpw7IsIHNlbGV6aW9uYSBDbGljY2Egc3VsIHB1bHNhbnRlIGUgY2xpY2NhIHN1ICdTRU1QUkUnXFxcIiB0ZXh0V3JhcCA9IFxcXCJ0cnVlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJ3ZWxjb21lLWJ1dHRvblxcXCIgaWQ9XFxcImJ1dHRvbjNcXFwiIHRleHQ9XFxcIkF0dGl2YSBMb2NhbGl6emF6aW9uZVxcXCI+PC9CdXR0b24+XFxyXFxuICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuXFxyXFxuICAgIDwvQWJzb2x1dGVMYXlvdXQ+XFxyXFxuXFxyXFxuXFxyXFxuPC9QYWdlPlxcclxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3dlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3dlbGNvbWUtc2V0dGluZ3Mvd2VsY29tZS1wYWdlLnhtbFwiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9