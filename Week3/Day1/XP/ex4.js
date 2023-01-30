//Exercise 4 : My Book List

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const allBooks = [
    {
        title: "The Mysterious Island",
        author: "Jules Verne",
        image: "https://picsum.photos/100",
        alreadyRead: true
    }, 
    {
        title: "Jane Eyre",
        author: "Charlotte Bronte",
        image: "https://picsum.photos/100",
        alreadyRead: true
    }
]

const table = document.createElement("table");

table.innerHTML = `
<thead> 
<tr> 
<th> Book List </th>
</tr>
</thead>
<tbody>
<tr class="${allBooks[0].alreadyRead ? 'red' : ''}">
<td>${allBooks[0].title}</td>
<td>${allBooks[0].author}</td>
<td><img src="${allBooks[0].image}"/></td> 
</tr>
<tr class="${allBooks[1].alreadyRead ? 'red' : ''}">
<td>${allBooks[1].title}</td>
<td>${allBooks[1].author}</td>
<td><img src="${allBooks[1].image}"/></td> 
</tr>
</tbody>
`
const bookList = document.querySelector(".listBooks");
bookList.appendChild(table);

console.log(bookList)