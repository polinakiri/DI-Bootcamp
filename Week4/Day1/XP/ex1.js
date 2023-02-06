// Exercise 1 : Scope

// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1 - a = 3, it was changed in the function 
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
//funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? - will be an error, as you cannot reassign const variable;

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
// funcThree() - alert 0
// funcTwo() - reassign a to 5
// funcThree() - alert 5
// #2.2 What will happen if the variable is declared 
// with const instead of let ? - type error in funcTwo


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
// funcFour()
// funcFive() - a = 0

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
// funcSix() - error, variable a was already declared
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console - in the if block 5; outside - 2
// #5.2 What will happen if the variable is declared 
// with const instead of let ? - in the if block 5; outside - 2