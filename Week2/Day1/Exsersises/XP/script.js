//Exercise 1: Your Favorite Food

//Store your favorite food into a variable.
//Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner).
//Console.log I eat <favorite food> at every <favorite meal>.

const favFood = "pizza";
const favMeal = "dinner";

console.log(`I eat ${favFood} at every ${favMeal}`);

// Exercise 2 : Series

// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you have made.

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = 3;
let myWatchedSeriesSentence = `I watched ${myWatchedSeriesLength} series: ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`;

console.log(myWatchedSeriesSentence);

myWatchedSeries[2] = 'friends';
myWatchedSeries.push('how i met your mother');
myWatchedSeries.unshift('stranger things');
delete myWatchedSeries[1];

console.log(myWatchedSeries[1,2])

console.log(myWatchedSeries)

// Exercise 3 : The Temperature Converter

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const celsius = 20;
const fahrenheit = celsius / 5 * 9 + 32;

console.log(`${celsius}°C is ${fahrenheit}°F.`);

// Exercise 4 : Guess The Answers #1

// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55, as a and b are nubers stored in variables;
// Actual: 55;

a = 2;

console.log(a+b) //second expression
// Prediction: 23, as number a was changed;
// Actual: 23;

// Exercise 5 : Guess The Answers #2

// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

typeof(15)
// Prediction: number, as the typeof operator returns the data type;
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: number
// Actual: number

typeof("hello")
// Prediction: string
// Actual:

typeof(true)
// Prediction: boolean
// Actual:

typeof(1 != 2)
// Prediction: boolean
// Actual:

"hamburger" + "s"
// Prediction: hamburgers, as its a concatenation of strings
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN
// Actual:NaN

"1" + "3"
// Prediction: 13, as its a concatenation of strings
// Actual:13

"1" - "3"
// Prediction:
// Actual: -2;

"johnny" + 5
// Prediction: johnny5, as its a concatenation of strings
// Actual: johnny5

"johnny" - 5
// Prediction: NaN, as johnny is not a number
// Actual: NaN

99 * "hello"
// Prediction: NaN, as hello is not a number
// Actual: NaN

1 != 1
// Prediction: false, as 1 is 1
// Actual: false

1 == "1"
// Prediction: true, as == compares the equality of two operands without considering type
// Actual: true

1 === "1"
// Prediction: false, as === compares equality of two operands with type
// Actual: false

// Exercise 6 : Guess The Answers #3

// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

5 + "34"
// Prediction: 534
// Actual: 534, as its a concatenation of number and string

5 - "4"
// Prediction: 1, the subtraction operator converts both operands to numeric values and carries out either number subtraction
// Actual: 1

10 % 5
// Prediction: 0, as modulo returns the remainder of two integers that have been divided
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction:JavaScript, as its a concatenation of strings
// Actual:JavaScript

" " + " "
// Prediction:   ,as nothing + nothing = nothing
// Actual:

" " + 0
// Prediction: 0, as empty string + 0
// Actual: 0

true + true
// Prediction: 2, the + operator is assumed to mean numeric addition and not string concatenation, the result is 1 if the argument is true, the result is +0 if the argument is false
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1 
// Actual: 1 

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false, not true is false
// Actual: false

3 - 4
// Prediction: -1, the subtraction operator converts both operands to numeric values and carries out either number subtraction
// Actual: -1

"Bob" - "bill"
// Prediction: NaN, the subtraction operator converts both operands to numeric values and string is Not a Number
// Actual: NaN