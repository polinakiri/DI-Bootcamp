// Daily Challenge : HTML Form

// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

document.querySelector("form").addEventListener("submit", retrieveData);

function retrieveData (event) {
    event.preventDefault();
    const form = new FormData(document.querySelector("form"));
    const entries = form.entries();
    const data = Object.fromEntries(entries);

    const string = JSON.stringify(data);
    const text = document.createElement("p");
    text.innerText = string;
    document.body.appendChild(text);
}