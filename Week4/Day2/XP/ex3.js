// Exercise 3 : Fortune Teller

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function fortune(num, name, geo, job){
    document.querySelector("body").innerText = (`You will be a ${job} in ${geo}, and married to ${name} with ${num} kids.`)
})(2, "Alena", "Portugal", "Web Developer")