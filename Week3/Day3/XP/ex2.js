// Exercise 2 : Move The Box

// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions
const btn = document.querySelector("button");
const red = document.querySelector("#animate");

function run () {
let m = 0;
let id = setInterval(move, 10);

function move() {
    if (m === 350) {
        clearInterval(id);
    } else {
        m++;
        red.style.left = m +"px";
    }
}
}

btn.addEventListener("click", run);