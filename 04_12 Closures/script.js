// function doSomeMath() {
// 	var a = 5;
// 	var b = 4;
// 	var sum = a + b;
//
// 	return sum;
// }
//
// var theResult = doSomeMath();
//
// console.log("The result: ", theResult);
// Calling for variables a or b in the console results in:
// an uncaught reference error because the variables are only defined in the function, which we know
function doSomeMath() {
	var a = 5;
	var b = 4;

	function multiply() {
		var result = a*b;
		return result;
	}
	return multiply;
}

var theResult = doSomeMath();

// console.log("The result: ", theResult); in the console this shows the function multiply itself 
// we can add parenthesis to theResult in the console log to treat it as a function 

console.log("The result: ", theResult());
// The console outputs that the result is 20 - even though var a and b are not root variables and only defined in the function 
// We've created a CLOSURE ! 
// A closure is a function inside of another function that relies on variables defined in the outer function to work 
// The browser understands closures to keep var a and b alive even though doSomeMath is shut down; so the multiply function can still use var a and b 



