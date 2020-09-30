const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
    var date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
// we need to re run the static script above every second to update the positions of the clock hands
// to do that wrap it all in a function, all the script 
// then run the function every second using the setInterval method

var interval = setInterval(runTheClock,1000); // runs the clock every 1000 milliseconds (1 second) because that is the out of the box interval for the method

// run and save, it works!
// but the hand spins counter clockwise to get back to the 0 degree mark once it has passed the full circle
// we could solve this by taking out the CSS transition method but it lacks finesse in movement \
// we can workaround another way without compromising CSS