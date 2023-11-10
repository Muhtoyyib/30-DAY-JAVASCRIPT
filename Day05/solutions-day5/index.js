// Exercise: Level 1

// 1
const myArray = [];

// 2 
const courses = ['CSC112', 'ICS106', 'MAT114', 'MAT112', 'PHY152', 'TCS112', 'GNS112', 'STA124'];

// 3
console.log(courses.length);

// 4
console.log(courses[0], courses[(Math.floor(courses.length/2))], courses[(courses.length - 1)]);

// 5
const mixedDataTypes = ['Akande', 5, {name: 'Toyyib'}, true, null, undefined];

// 6
const itCompanies  = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
console.log(itCompanies[1], itCompanies[[(Math.floor(itCompanies.length/2))]], itCompanies[(itCompanies.length - 1)]);

// 10
console.log(itCompanies.toString());

// 11
console.log(itCompanies.toString().toUpperCase());

// 12
console.log(`${itCompanies.join(',')} are big companies`);

// 13
itCompanies.includes('Apple') ? console.log(itCompanies[itCompanies.findIndex((company) => company === 'Apple')]) : console.log('Company not found');

// 14
{console.log(itCompanies.splice(0,2));}

// 15
itCompanies.sort()

// 16
itCompanies.reverse();
console.log(itCompanies);

// 17
{console.log(itCompanies.slice(0,3));}

// 18
{console.log(itCompanies.slice(4,7));}

// 19
{console.log(itCompanies.slice(3));}

// 20
itCompanies.shift();
console.log(itCompanies);

// 21
console.log(itCompanies.slice(3));

// 22
itCompanies.pop()
console.log(itCompanies);

// 22
itCompanies.length = 0;


// Exercie: Level 2

// 1
const countries = require('./contries');
const usableCountriesArray = countries.countries;
const webTechs = require('./web_techs');
const usableWebTechsArray = webTechs.webTechs;

// 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/g, '').split(' ');
console.log(`Array of words: ${words}`);
console.log(`Number of words: ${words.length}`);

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' at the beginning if it's not already in the cart
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end if it's not already in the cart
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// Remove 'Honey' if allergic
const allergicToHoney = true; // Set to true if allergic
if (allergicToHoney) {
  const honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

// 4 

if (usableCountriesArray.includes('Ethiopia')) {
    const countryIndex = usableCountriesArray.indexOf('Ethiopia');

    console.log(usableCountriesArray[countryIndex].toUpperCase());
  
}

// 5
if(usableWebTechsArray.includes('Sass')){
    console.log('Sass is a CSS preprocess.');
} else {
    usableWebTechsArray.push('Sass');
    console.log(usableWebTechsArray);
}

// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);

// Exercise: Level 3

// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort((a, b) => {
    return a - b;  // ascending order
    // return b - a;  // descending order
});

console.log(ages);
// let myString = ages.toString();
// console.log(myString);
let min = ages[0];
let max = ages[ages.length - 1];
console.log(`min: ${min}, max: ${max}`);

let median = (ages[4] + ages[5])/ 2 ;
console.log(median);
let mean = (age[0] + age[1] + age[2] + age[3] + age[4] + age[5] + age[6] + age[7] + age[8] + age[9]) / age.length;
let range = max - min;
(Math.abs(min - average) === Math.abs(max - average));

// 2
const middleCountry = countries[(Math.floor(countries.length / 2))];

// 3

let firstHalf;
let secondHalf;

if (countries.length % 2 === 0) {
  const middleIndex = countries.length / 2;
  firstHalf = countries.slice(0, middleIndex);
  secondHalf = countries.slice(middleIndex);
} else {
  const middleIndex = Math.floor(countries.length / 2);
  firstHalf = countries.slice(0, middleIndex + 1);
  secondHalf = countries.slice(middleIndex + 1);
}

console.log('First Half:', firstHalf);
console.log('Second Half:', secondHalf);
