// Exercise 4 : Welcome

// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function pasteName (name){
const nm = document.createElement("li");
nm.innerText = name;
document.querySelector("ul").appendChild(nm);
nm.setAttribute("class", "nav-item p-2");
})("John")