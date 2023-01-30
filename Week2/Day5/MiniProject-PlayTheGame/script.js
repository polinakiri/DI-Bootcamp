const computerNumber = Math.floor(Math.random() * 1);

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
    const userNumber = parseInt(prompt("Please enter a number between 0 and 10"));
    if (userNumber == computerNumber) {
        console.log(userNumber, computerNumber)
        alert("WINNER!");
    } else if (userNumber > computerNumber) {
        console.log(`${userNumber} is bigger ${computerNumber}`)
        alert("Your number is bigger then the computers, guess again");
        prompt("Enter a new number.");
    } else if (userNumber < computerNumber) {
        console.log(`${userNumber} is less ${computerNumber}`)
        alert("Your number is smaller then the computers, guess again");
        prompt("Enter a new number.");
    } else if (num1 == 3) {
        alert("out of chances")
    }
}


function numberOfChances () {
    let num;
    for (let i = 0; i < 3; i++) {
        num += i;
    }
    return num;
}

const num1 = numberOfChances();

// Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.