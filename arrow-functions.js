
/** Regular JS */
// function addTwoNumbers(a, b){
//     return a + b;
// }

// let sum = addTwoNumbers(3,5);
// console.log(sum);

/** arrow function with parameters */
const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(3,5);
console.log(sum);

/** single line arrow function with parameters */
/** addTwoNumbers2 = (a, b) => (a + b); also a valid way to write with brackets*/
addTwoNumbers2 = (a, b) => (a + b);

/** Implicit returns */

const saySomething = message => console.log(message);
/** This function will log to the console any message you put into the saySomething brackets see below */

saySomething('Hello There');

const sayHello = () => console.log('Hello');

sayHello();

/** Returning multiple lines of code */

const returnMultipleLines = () => (
    `<p> 
    This is a multi line string
    </p>
    `
)
 
console.log(returnMultipleLines());