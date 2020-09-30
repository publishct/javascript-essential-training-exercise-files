

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

// To get the clock to show us the current time and not a random time we'll use math so JavaScript can tell us what time it is 
// we'll use the Date() object
var date = new Date();
// check the console to remind yourself what this looks like (the date is pulled off the browser)
console.log(date);
// then use methods to pull out what I want from the date object, like just hours or minutes
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
//console log it all out for individual variables for each
console.log("Hour: " + hr + "Minute: " + min + "Second: " + sec);
// this shows in military time in the console, so the next trick will be to convert the results of each let above into degrees on a circle (using fancy math)

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

