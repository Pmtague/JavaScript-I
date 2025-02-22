// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery@wik2imedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:
const internOne = {
  id: 0,
  email: 'mmelloy0@psu.edu',
  firstName: 'Mitzi',
  gender: 'F'
}

const internTwo = {
  id: 1,
  email: 'kdiben1@tinypic.com',
  firstName: 'Kennan',
  gender: 'M'
}

const internThree = {
  id: 2,
  email: 'kmummery@wik2imedia.org',
  firstName: 'Keven',
  gender: 'M'
}

const internFour = {
  id: 3,
  email: 'gmartinson3@illinois.edu',
  firstName: 'Gannie',
  gender: 'F'
}

const internFive = {
  id: 4,
  email: 'adaine5@samsung.com',
  firstName: 'Antonietta',
  gender: 'F'
}

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

//Mitzi's name
console.log(internOne.firstName)

// Kennan's ID
console.log(internTwo.id)

// Keven's email
console.log(internThree.email)

// Gannie's name
console.log(internFour.firstName)

// Antonietta's Gender
console.log(internFive.gender)

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());
internTwo.speak = 'Hello, my name is Kennan!'
console.log(internTwo.speak)

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));
internFive.multiplyNums = (a, b) => a * b 
console.log(internFive.multiplyNums(3, 4))

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: 'Susan',
  age: 70,
  child: {
    name: 'George',
    age: 50,
    grandchild: {
      name: 'Sam',
      age: 30
    }
  }

}

// Log the parent object's name
console.log(parent.name)

// Log the child's age
console.log(parent.child.age)

// Log the name and age of the grandchild
console.log(parent.child.grandchild.name, parent.child.grandchild.age)

// Have the parent speak
parent.speak = 'Susan!'
console.log(parent.speak)

// Have the child speak
parent.child.speak = 'George!'
console.log(parent.child.speak)

// Have the grandchild speak
parent.child.grandchild.speak = 'Sam!'
console.log(parent.child.grandchild.speak)
