// Exercise 4 : Colors

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach ((color, i = 1) => {
    i++;
    console.log(`${i}# choice is ${color}`)
})

colors.some((color) => color === "Violet" ? console.log("Yeah") : console.log("No"));