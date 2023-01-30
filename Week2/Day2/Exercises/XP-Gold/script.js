// Exercise 1 : The World Translator

// Hint: Use Switch Case

// 1.Ask the user which language they speak.
const language = prompt("What language do you speak?");
// 2.Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
// 3.Create a few conditions :
// 4.If the user speaks French : display “Bonjour”
// 5.If the user speaks English : display “Hello”
// 6.If the user speaks Hebrew : display “Shalom”
// 7.If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
switch (language.toLowerCase()) {
    case "french":
        alert("Bonjour")
        break;
    case "english":
        alert("Hello")
        break;
    case "hebrew":
        alert("Shalom")
        break;
    default:
        alert("01110011 01101111 01110010 01110010 01111001")
}

// Exercise 2 : The Grade Assigner

// 1.Ask the user for their grade.
const grade = prompt("What is your grade?");
// 2.If the grade is bigger than 90, console.log “A”
// 3.If the grade is between 80 and 90 (included), console.log “B”
// 4.If the grade is between 70(included) and 80 (included), console.log “C”
// 5.If the grade is lower than 70, console.log “D”
if (grade > 90) {
    console.log("A")
} else if (grade <= 90 && grade > 80) {
    console.log("B")
} else if (grade >= 70 && grade <= 80) {
    console.log("C")
} else if (grade < 70) {
    console.log("D")
}

// Exercise 3 : Verbing

// Prompt the user for a string. It must be a verb.
const verb = prompt("What are you doing?");
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.
if (verb.length >= 3 && !verb.endsWith("ing")) {
    console.log(`${verb}ing`)
} else if (verb.length >= 3 && verb.endsWith("ing")) {
    console.log(`${verb}ly`)
} else if (verb.length < 3) {
    console.log(verb)
}