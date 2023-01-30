// Exercise 5 : Event Listeners

// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.
const box = document.querySelector("div");

box.addEventListener("click", click);
box.addEventListener("dblclick", doubleClick);
box.addEventListener("mouseover", mouseOver);
box.addEventListener("mouseout", mouseOut);

function mouseOver () {
    box.style.backgroundColor = "seagreen";
    box.innerText = "Click On Me";
}

function click () {
    box.style.backgroundColor = "sienna";
    box.innerText = "Double Click On Me";
}


function doubleClick () {
    box.style.backgroundColor = "crimson";
    box.innerText = "Mouse Out";
}

function mouseOut () {
    box.style.backgroundColor = "teal";
    box.innerText = "Mouse Over Me";
}