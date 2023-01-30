// Daily Challenge: 99 Bottles Of Beer

// Prompt the user for a number to begin counting down bottles.

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.

// The song should end with “0 bottle of beer on the wall” or “no bottle of beer on the wall”


// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall

// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall

// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ect …

// ==============================

const userNumber = parseInt(prompt("Enter a number."));

for (let i = 1; i < userNumber; i++) {
console.log(`
${userNumber} bottles of beer on the wall
${userNumber} bottles of beer
Take ${i} down, pass them around
${userNumber - i} bottles of beer on the wall
`);
}