//Declaring and using variables

let studentName = "Alton"; 
let studentAge = 38;
let isEnrolled = true

console.log(`My name is ${studentName} and I am ${studentAge} years old. And I am currently enrolled at Humber: ${isEnrolled}`);

//Demonstrate Data Types

let fullName = "Alton Junior Hudson";
console.log(fullName);

let height = 1.85; // floating-point number
console.log(height);

let assignmentComplete = true
console.log(assignmentComplete)

let fovouriteExcerise = ['squatting', 'lunging', 'benchpress', 'rowing']
console.log(fovouriteExcerise)

let person = {
    name: "Alton Hudson",
    age: 38,
    isEnrolled: true,
    height: 1.85,
    favouriteExcerise: ['squatting', 'lunging', 'benchpress', 'rowing']
}
console.log(`My name is ${person.name} and my age is ${person.age} years old. I am currently enrolled at Humber: ${person.isEnrolled}. My height is ${person.height}m and my favourite exercises are ${person.favouriteExcerise[0]}`);

//Using Basic Operators

console.log(6 * 2)
console.log(6 + 2)
console.log(6 - 2)
console.log(6 / 2)
console.log(6 % 2)

//Using Comparison Operators

let a = 12
let b = 4

console.log(a > 2)
console.log(b < 2)
console.log(b === 2)
console.log(a !== b)

//Using Logical Operators

let x = true
let y = false

console.log(x && y)
console.log(y || x)
console.log(!x)
