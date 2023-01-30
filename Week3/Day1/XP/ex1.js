// Exercise 1 : Users

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// Delete the <li> that contains the text node “Sarah”.

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

const element = document.getElementById("container");
console.log(element);

let newName1 = document.querySelector(".list").children[1].innerHTML = "Richard";
console.log(newName1);

const lists = document.querySelectorAll(".list");
lists.forEach(list => list.firstElementChild.innerHTML = "Polina");

lists[1].children[1].remove();