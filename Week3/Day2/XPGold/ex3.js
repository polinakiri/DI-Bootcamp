// Exercise 3 : Create A Shopping List

// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList = [];

const form = document.createElement("form");
const input = document.createElement("input");
const btn = document.createElement("button");
const clearBtn = document.createElement("button");

input.setAttribute("type", "text");
btn.setAttribute("type", "button");
btn.setAttribute("class", "submit-btn");
btn.innerText = "Add item";
clearBtn.setAttribute("type", "button");
clearBtn.setAttribute("class", "clear-btn");
clearBtn.innerText = "Clear all";

form.append(input, btn, clearBtn);
document.querySelector("#root").appendChild(form);

document.querySelector(".submit-btn").addEventListener("click", addItem);
document.querySelector(".clear-btn").addEventListener("click", clearAll);

function addItem () {
    shoppingList = input.value;
    const para = document.createElement("p");
    const items = document.createTextNode(shoppingList);
    para.appendChild(items);
    document.querySelector("#root").appendChild(para);
    console.log(shoppingList);
}

function clearAll () {
    const parent = document.querySelector("#root");
    console.log(parent);

    const itemsToRemove = document.querySelectorAll("p");
    for (let i = 0; i < itemsToRemove.length; i++){
    itemsToRemove[i].remove();
}
}