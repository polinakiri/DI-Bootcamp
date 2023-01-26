// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.

const userText = prompt("Enter several words (separated by commas)");

const array = userText.split(",");

let longest = 0;
for (let i of array) {
    if (i.length > longest) {
        longest = i.length
    }
}
function frame() {
console.log("*".repeat(longest+5));
for (let i = 0; i < array.length; i++) {
    
    console.log(`* ${array[i]} ${" ".repeat(longest-array[i].length)} *`);
    
}
console.log("*".repeat(longest+5));
}

frame();