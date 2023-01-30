// Daily Challenge: Tell The Story

// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a Mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

document.forms[0].addEventListener("submit", getValue);

const btn = document.querySelector("button");

function getValue (event) {
    event.preventDefault();

    const noun = event.target.noun.value;
    const adj = event.target.adjective.value;
    const sName = event.target.person.value;
    const verb = event.target.verb.value;
    const place = event.target.place.value;
    const para = document.createElement("p");
    const story = document.createTextNode(`One day in a ${place} I saw ${sName} acting ${adj}. ${sName} was ${verb}ing a big ${noun}.`);
    para.appendChild(story);
    document.querySelector("#story").appendChild(para);
}