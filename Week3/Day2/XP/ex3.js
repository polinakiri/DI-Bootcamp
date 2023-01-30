// Exercise 3 : Transform The Sentence

// In the JS file:

// Declare a global variable named allBoldItems.
let allBoldItems;

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems () {
    const boldItem = document.querySelectorAll("strong");
    allBoldItems = boldItem;
    return allBoldItems;
}

getBoldItems();

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight () {
    const bold = document.querySelectorAll("strong");
    for (let i = 0; i < bold.length; i++) {
        bold[i].style.color = "blue";
    }
}

highlight ();

// Create a function called return_normal() that changes the color of all the bold text back to black.
function returnNormal () {
    const bold = document.querySelectorAll("strong");
    for (let i = 0; i < bold.length; i++) {
        bold[i].style.color = "black";
    } 
}

returnNormal ();

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
document.querySelector("p").addEventListener("mouseover", highlight);
document.querySelector("p").addEventListener("mouseout", returnNormal);