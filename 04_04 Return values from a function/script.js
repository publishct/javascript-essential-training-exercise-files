function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b]
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

// findBiggestFraction(firstFraction,secondFraction); // this does not display anything in the console log
// one option is to wrap findBiggestFraction in a console.log 
//console.log(findBiggestFraction(firstFraction,secondFraction));

// OR 
// create a new variable like fractionResults below
// var fractionResults = findBiggestFraction(firstFraction,secondFraction);
// console.log(fractionResults);

//This work for a simple function allows us to create context in the result as below
var fractionResults = findBiggestFraction(firstFraction,secondFraction);
console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResults[0] + " with a value of " + fractionResults[1] + " is the biggest!");

//Above is a complete named function with arguments that return a value to be used elsewhere