// Daily Challenge : Go Wildcats

// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// const usernames = ["john!", "becky!", "susy!", "tyson!"]

// Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// const winners = ["becky", "susy"]

// Find and display the total score of the users. (Hint: The total score is 71)

const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

const usernames = [];

gameInfo.forEach((i) => {
    usernames.push(i.username + "!")
})

console.log(usernames);

const winners = [];

gameInfo.forEach((j) => {
    j.score > 5 ? winners.push(j.username) : false
})

console.log(winners);

let sum = 0;

gameInfo.forEach((x) => {
    sum += x.score;
})

console.log(sum);