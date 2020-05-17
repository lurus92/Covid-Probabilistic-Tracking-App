const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();

    //That's our main
    var posPercentage = page.getViewById("positive-percentage");
    posPercentage.text = (global.UserManager.probabilityToBePositive * 100).toFixed(1) + "%";
    

}

exports.onNavigatingTo = onNavigatingTo;
