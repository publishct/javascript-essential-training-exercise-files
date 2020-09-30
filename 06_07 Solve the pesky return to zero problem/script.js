const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

// moving the var date and lets above and outside the runTheClock function allows us to reach the current time
// we'll use pure math to figure out how much the hands should move within the function 

function runTheClock() {

    // hrPosition = hrPosition+(30/3600); OR:
    hrPosition = hrPosition+(3/360); // simplified from above 
    // minPosition = minPosition+(1/60)*6; OR: 
    minPosition = minPosition+(6/60); // simplified from above 
    secPosition = secPosition+6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
