// Exercise 1 : Information

// Part I : function with no parameters


// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe () {
    console.log(`Hi! I'm Polina, 26 y.o., I love Web Development.`)
}

infoAboutMe();


// Part II : function with three parameters


// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson (personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, you are ${personAge}, your favorite color is ${personFavoriteColor}.`)
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


// Exercise 2 : Tips

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.
// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

function calculateTip () {
    const bill = prompt("Hi John! What is the amount of the bill?");
    const number = parseInt(bill);

    if (bill < 50) {
        console.log("Tip: 20%." + " " + "Final bill: " + (number + number * 0.2))
    } else if (bill >= 50 && bill <= 200) {
        console.log("Tip: 15%." + " " + "Final bill: " + (number + number * 0.15))
    } else if (bill > 200) {
        console.log("Tip: 10%." + " " + "Final bill: " + (number + number * 0.1))
    }
}

//calculateTip();


// Exercise 3 : Find The Numbers Divisible By 23

// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum

function isDivisible (x) {
    let sum = 0;
    for (i = 0; i < 500; i++) {
        if (i % x == 0) {
            console.log(i);
            sum = sum + i
    }
} 
console.log(sum);
}

// isDivisible(23);
// isDivisible(45);


// Exercise 4 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    for (const item of shoppingList) {
    let qnt = stock[item];
    const priceOfItem = prices[item];
    
    if (qnt > 0) {
        qnt = stock[item] - 1;
        total += priceOfItem
    } else {
        console.log(`Sorry! No ${item} left.`)
    }   
}
console.log(`Total price is: ${total}`)
}

myBill();


// Exercise 5 : What’s In My Wallet ?

// 1.Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price and an array representing the amount of change in your pocket.

// 2.In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// 3.Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01


// 4.To illustrate:

// After you created the function, invoke it like this:

//changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

function changeEnough (itemPrice, amountOfChange) {
    const sum = sumOfArray(amountOfChange);
    if (sum >= itemPrice) {
        console.log(true)
    } else {
        console.log(false)
    }
}

function sumOfArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let coin;
        const qnt = array[i];
        if (i === 0) {
            coin = 0.25
        } else if (i === 1) {
            coin = 0.10
        } else if (i === 2) {
            coin = 0.05
        } else if (i === 3){
            coin = 0.01
        }
        sum += qnt * coin;
    }
    console.log(`Total sum is ${sum}`);
    return sum;
}

changeEnough (5, [10, 50, 25, 0]) //true
changeEnough (10, [5, 0, 3, 7]) // false


// Exercise 6 : Vacations Costs

// Let’s create functions that calculate your vacation’s costs:

// 1.Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// 2.Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// 3.Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// 4.Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// 5.Call the function totalVacationCost()

// 6.Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.

const numberOfNights = prompt("How many nights do you want to stay?");
const destination = prompt("What is your destination?");
const numberOfDays = prompt("How many days do you want to rent a car for?");

function hotelCost (numberOfNights) {
    
    let totalCost = parseInt(numberOfNights) * 140;
    return totalCost;
}


function planeRideCost(destination) {
    
    if (destination === "London") {
        return 183;
    } else if (destination === "Paris") {
        return 220;
    } else {
        return 300;
    }
}

planeRideCost();

function rentalCarCost (numberOfDays) {
    
    let totalCarCost = parseInt(numberOfDays) * 40;
    if (parseInt(numberOfDays) > 10) {
        return totalCarCost *= 0.05;
    } else {
        return totalCarCost;
    }
}

rentalCarCost();

function totalVacationCost () {
    const hotel = hotelCost(numberOfNights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(numberOfDays);

    console.log(`The car cost: ${car}, the hotel cost: ${hotel}, the plane tickets cost: ${plane}.`)
}

totalVacationCost();

