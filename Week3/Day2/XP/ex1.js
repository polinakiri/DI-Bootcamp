//Exercise 1 : Change The Article

// Using a DOM property, retrieve the h1 and console.log it.
const header = document.querySelector("h1");
console.log(header);

// Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.querySelector("article");
article.removeChild(article.lastElementChild);

// Add an event listener which will change the background color of the h2 to red, when it’s clicked on.
function colorToRed () {
    document.querySelector("h2").style.backgroundColor = "red";
}

document.querySelector("h2").addEventListener("click", colorToRed);

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
function hide () {
    document.querySelector("h3").style.display = "none";
}

document.querySelector("h3").addEventListener("click", hide);

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
function bold () {
    const paragraph = document.querySelectorAll("p")
    for (let i = 0; i < paragraph.length; i++ ){
    paragraph[i].style.fontWeight = "bold";
    }
}

document.querySelector("button").addEventListener("click", bold);