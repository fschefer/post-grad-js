const prompt = require("prompt-sync")()
const age = prompt("Please type your age:")
const height = prompt("Please type your height:")
const weight = prompt("Please type your weight:")
const bmi = weight/(height * height);
let classification;


if (age < 20 || age > 60){
    console.log("Sorry, you are not suited for this program");
} else {
    if (bmi < 18.5){
        classification = "You are underweight"
    } else if (bmi >= 18.5 && bmi <= 24.99 ){
        classification = "You are on your normal weight"
    } else if (bmi >= 25 && bmi <= 29.99 ){
        classification = "You are overweight"
    } else {
        classification = "You are obese"
    }
} console.log (classification)
