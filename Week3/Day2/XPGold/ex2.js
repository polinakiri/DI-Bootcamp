// Exercise 2: Delete Colors

// Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.

document.querySelector("input").addEventListener("click", removeColor);

function removeColor () {
    const sel = document.querySelector("#colorSelect");
    // if (sel.length > 0) {
    //     sel.remove(sel.length - 1);
    // }

    for (let i = sel.options.length - 1; i > 0; i--) {
        if (sel.options[i].selected) {
            sel.remove(i);
        } 
    }
}