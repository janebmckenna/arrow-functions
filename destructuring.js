/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages =[30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
/** The code above is the same as the code below but uses destructuring to write it in a less verbose way */
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects

let jobs = {
    mike: "designer",
    jill: 'developer',
    alicia: 'accountant',
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);
console.log(jobs);

/** Seem to use [] for an array and {} for an object? */

// Destructuring subsets
let languages = ['english', 'french', 'spainish', 'german', 'japansese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);
/** if you want to skip values to chose different items in an array use a comma see 
 * above there are two commas before maryNative */

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese',
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

/** If your are destructuring an object you can just use their property names */

// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;


console.log(favorite);
console.log(secondFavorite);
console.log(...others);

/** if you put the dots in the console log then it logs the individual items 
 * as a stirng of text if you dont it logs an array still in square brackets */

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak',
}

let {brian, anna, ...rest} = favoriteFoods;

console.log(brian);
console.log(anna);
console.log(rest);