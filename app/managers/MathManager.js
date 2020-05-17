//var x = require("norm-dist");

import UserManager from "./UserManager";

export default class MathManager{
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
        this.normDistributionModule = require("normal-distribution");
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


