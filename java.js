// 1. Multiply - Function Declaration
// Create a function that multiples a number by another number.
function multiple_number(a){
    let b = a * Math.round(Math.random()*10)
    return b
}

let a = 5
console.log(multiple_number(a))


// 2. Multiply - Function Declarations as Values
// Rework the syntax of the above function so that the function declaration is stored as a value.

let b = function (a) {return a*Math.round(Math.random()*10)}
console.log(b(a))

// 3. Multiply - Arrow Function
// Rework the syntax of the function declaration so that is uses the arrow function shorthand.

let c = (d) => d*Math.round(Math.random()*10)
console.log(c(a))

// 4. Declarations
// Create functions (using all three declarations) to check the remainder of division given two numbers.
let x= Math.round(Math.random()*10)
let y= Math.round(Math.random()*10)
let save

if (x < y){
    save=y
    y=x
    x= save
}

// FIRST PART

console.log(x,y)
function first_remainder(x,y){
    return x % y
}
console.log(first_remainder(x,y))


// SECOND PART

let j = function (x,y){return x % y}

console.log( j(x,y))

// ThIRD PART

let f = (x,y) => x % y
console.log(f(x,y))
