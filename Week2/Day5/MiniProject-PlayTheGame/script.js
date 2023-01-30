// Exercise 1 : Play A Guessing Game

const computerNumber = Math.floor(Math.random() * 10);
let numberOfTries = 0;

function playTheGame() {
    const q = confirm("Would you like to play the game?");
    
    if (q === false) {
        alert("No problem, Goodbye!")
    } else {
        compareNumbers();
    }
}

function userNum() {
    let num = parseInt(prompt("Please enter a number between 0 and 10"));
    if (typeof (num) != 'number') {
        alert("Sorry Not a Number, Goodbye.")
    } else if (num > 10) {
        alert("Sorry its not a good number, Goodbye.")
    } else if (num <= 10) {
        alert(`The right number is ${computerNumber}`)
    }
}

function compareNumbers() {
    let userNumber = parseInt(prompt("Please enter a number between 0 and 10"));
    while (userNumber != computerNumber) {
        numberOfTries += 1;
        if (numberOfTries === 3) {
            return alert("Out of chances")
        } else if (userNumber > computerNumber) {
            alert("Your number is bigger then the computers, guess again");
            userNumber = parseInt(prompt("Enter another number"));
        } else if (userNumber < computerNumber) {
            alert("Your number is smaller then the computers, guess again");
            userNumber = parseInt(prompt("Enter another number"));
        }
    }
    alert("WINNER!");
}