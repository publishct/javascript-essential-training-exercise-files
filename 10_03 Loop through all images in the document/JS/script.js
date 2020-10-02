const IMAGES = document.querySelectorAll("img");

for (let i = 0; i<IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0, -8) // go to end of array and strip off last 8 characters
    console.log(imgSrc);

    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);
}
