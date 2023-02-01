// Exercise 1: Timer

// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
setTimeout(helloWorld, 2000);

function helloWorld () {
    alert("hello world")
}

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
setTimeout(newPara, 2000);

function newPara () {
    const para = document.createElement("p");
    const text = document.createTextNode("Hello World");
    para.appendChild(text);
    document.querySelector("div").appendChild(para);
}


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
let id = setInterval(anotherPara, 2000);
const btn = document.querySelector("button");
btn.addEventListener("click", clear);
const div = document.querySelector("div");

function anotherPara () {
    const para = document.createElement("p");
    const text = document.createTextNode("Hello World");
    para.appendChild(text);
    div.appendChild(para);
    const num = div.getElementsByTagName("p").length;
    if (num > 4) clearInterval(id);
}

function clear () {
    clearInterval(id);
    console.log("stoped")
}