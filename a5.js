const {calculateBMI, sum} = require("./functions")

const sumResult = sum (2, 3)

function calculateAverage(resultOfTheSum){
    return resultOfTheSum/2;
}

const average = calculateAverage(sumResult)


function showResult(result){
    console.log (average)
}

const BMI = calculateBMI (1.75, 97)
console.log(BMI)