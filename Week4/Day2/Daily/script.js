// Daily Challenge: Groceries

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

// Invoke the cloneGroceries function.

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


let displayGroceries = () => groceries.fruits.forEach(fruit => {console.log(fruit)});
displayGroceries();

let cloneGroceries = () => {
    const user = client;
    client = "Betty";
    console.log(user);

    const shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.payed = false;
    
    console.log(shopping);
}

cloneGroceries();