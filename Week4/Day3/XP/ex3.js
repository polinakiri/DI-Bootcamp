// Exercise 3 : Star Wars

// Use the reduce() method to combine all of these into a single string.

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const sent = (a, b) => a + b;

console.log(epic.reduce(sent));