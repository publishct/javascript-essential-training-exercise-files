const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

// random numbers from beginning 
// let hrPosition = 20;
// let minPosition = 130;
// let secPosition = 267;
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

// the second hand takes 60 "steps" to go around the circle
// so take 60 and divide by 360 degrees
// then add up how many "steps" we want to move 
// same goes for minute (60 steps, 60 minutes in 1 hour)
// for the hour hand, we divide 12 by 360 degrees  

