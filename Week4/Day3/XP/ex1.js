// Exercise 1 : Analyzing

// Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// Output will be an array with elements from vegatebles array and fruits array

// ------2------
const country = "USA";
console.log([...country]);

// Output: ['U', 'S', 'A']; Splits string into characters, similar to the .split()

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);