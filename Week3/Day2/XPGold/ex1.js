// Exercise 1 : Select A Kind Of Music

// Display the value of the selected option.
console.log(document.querySelector("#genres").value);

// Add an additional option to the select tag:
// <option value="classic">Classic</option>
const newOption = document.createElement("option");
newOption.text = "Classic";

document.querySelector("#genres").options.add(newOption, 1);

// The newly added option should be selected by default.
newOption.setAttribute("selected","selected");