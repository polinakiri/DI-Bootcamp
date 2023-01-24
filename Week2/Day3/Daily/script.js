// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by youself, without looking at the answers on the internet.

//1.0

let star = ["*", "* *", "* * *", "* * * *", "* * * * *", "* * * * * *"];

for (let i = 0; i < 7; i++) {
    console.log(star[i]);
}

//1.1

let star2 = " "
for (let i = 0; i < 6; i++) {
    console.log(star2 += " * ")
}

//2.0

for (let i = 0; i < 1; i++) {
    console.log(star[i]);
    for (let j = 1; j < 6; j++) {
        console.log(star[j])
    }
}

//2.1

for (let i = 0; i < 6; i++) {
    let quantity = i+1;
    let row = "";
    for (let j = 0; j < quantity; j++) {
        row += " * "
    }
    console.log(row);
}