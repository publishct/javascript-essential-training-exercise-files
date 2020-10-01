const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e,current) {
    e.preventDefault();
    // CTA.classList.toggle("hide");
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooops!" : CTA.innerHTML = "Book Now!";
    ALERT.classList.toggle("hide");
}

CTA.addEventListener('click', function(e){ reveal(e,this); }, false); // 'this' refers to the object we just clicked, the button, the CTA
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
