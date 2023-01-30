// Exercise 2 : Work With Forms

// Retrieve the form and console.log it.
console.log(document.querySelector("form"));

// Retrieve the inputs by their id and console.log them.
console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"));
console.log(document.getElementById("submit"));

// Retrieve the inputs by their name attribute and console.log them.
console.log(document.getElementsByName("fname"));
console.log(document.getElementsByName("lname"));

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ? -----to prevent the form from execution
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
document.querySelector("form").addEventListener("submit", value);

const fname = document.forms[0].elements.fname;
const lname = document.forms[0].elements.lname;

function value (event) {
    event.preventDefault();
    const valueFName = event.target.fname.value;
    const valueLName = event.target.lname.value;
    const li1 = document.createElement("li");
    li1.innerHTML = valueFName;
    const li2 = document.createElement("li");
    li2.innerHTML = valueLName;
    const ul = document.querySelector("ul");
    ul.append(li1, li2);
}