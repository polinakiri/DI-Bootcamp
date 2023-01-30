//Exercice 4 : Volume Of A Sphere

//Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base.
const form = document.forms[0];
form.addEventListener("submit", calculate);

function calculate (event) {
    event.preventDefault();

    const radius = event.target.radius.value;
    document.querySelector("#volume").value = 4/3 * 3.14 * Math.pow(radius, 3);
}