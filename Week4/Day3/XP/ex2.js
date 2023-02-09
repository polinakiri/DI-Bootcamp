// Exercise 2 : Employees

// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// Using the filter() method, create a new array, containing only the Full Stack Residents.

// Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let welcomeStudents;
const hello = (name) => {
    return `Hello ${name.firstName}`
}
welcomeStudents = users.map(hello);
console.log(welcomeStudents);


const funcFilter = (roles) => {
    return roles.role === "Full Stack Resident"
}
const residents = users.filter(funcFilter);
console.log(residents);

const lName = (name) => {
    return name.lastName
}
residents.map(lName);
console.log(residents)