const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// lets will eventually create the degrees for the clock at current time but for now set to random deg numbers
let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;
// then apply numbers above as degrees in the in-line styles for transform in each of the objects
HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";