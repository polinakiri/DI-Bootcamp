// Exercise 2: Display Student Info

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser){
    const { first: f, last: l} = objUser;
    console.log(`Your fill name is ${f} ${l}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});