// Daily Challenge: Letters

// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions

const body = document.querySelector("body");
const div = document.createElement("div");
let input = document.createElement("input");

div.appendChild(input);
body.appendChild(div);
input.setAttribute("type", "text");


function findLetters (el) {
    let letters = /^[a-zA-Z]*$/;
    if (el.target.value.match(letters)) {
        console.log("no error");
    } else {
        el.target.value = el.target.value.slice(0, -1);
    }
}

input.addEventListener("input", findLetters);