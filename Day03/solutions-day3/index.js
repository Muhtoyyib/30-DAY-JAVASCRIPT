// Exerice: Level 1

// 1

{
let firstName = 'Olalekan';
let lastName = 'Akande';
let country = 'Nigeria';
let city = 'Ibadan';
let age = '23';
let isMarried = false
let year = 2023;
console.log( typeof firstName);
console.log( typeof lastName);
console.log( typeof country);
console.log( typeof city);
console.log( typeof age);
console.log( typeof isMarried);
console.log( typeof year);
}

// 2
console.log(typeof '10' === 10);

// 3 
console.log(typeof parseInt('9.8') === 10);

// 4
console.log(4>3);
console.log(3>2);
console.log(true);

console.log(4<3);
console.log(2>4);
console.log(false);

// 5 Kindly figure it out

// 6 Kindly figure it out

// 7
let today = new Date();
console.log(today.getFullYear());
console.log(today.getMonth() + 1);
console.log(today.getDate());
console.log(today.getDay() + 1);
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getTime());

// Exercise: Level 2

// 1
let base = prompt('Input base', 20);
let height = prompt('Input height', 10);
let areaOfTriangle = 0.5 * Number(base) * Number(height);
console.log(areaOfTriangle);

// 2
let sideA = prompt('Input side a', 5);
let sideB = prompt('Input side b', 4);
let sideC = prompt('Input side c', 3);
let perimeterOfTriangle = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
console.log(perimeterOfTriangle);

// 3
let length = prompt('Input length');
let width = prompt('Input width');
let areaOfRectangle = Number(length) * Number(width);
let perimeterOfRectangle = 2 * (Number(length) + Number(width));
console.log(areaOfRectangle, perimeterOfRectangle);

// 4
let pi = Math.PI;
let radius = prompt('Input radius', 5);
let areaOfCircle = pi * (Number(radius)**2);
let circumferenceOfCircle = 2 * pi * Number(radius);
console.log(areaOfCircle, circumferenceOfCircle);

// 5
let y = 'y';
let x = 'x';
let m = 2;
let c = -2;

let slope = m;
let xIntercept = -(c/m);
let yIntercept = c;
console.log(slope);
console.log(xIntercept);
console.log(yIntercept);

// 6
let y1 = 2;
let y2 = 10;
let x1 = 2;
let x2 = 6;
let m2 = (y2 - y1) / (x2 - x1);
console.log(m2);

// 7
console.log(m === m2);

// 8

{
let y;
let x = prompt('Input x');
y = ((Number(x) ** 2) + (6 * Number(x)) + 9);
console.log(y);
}

// 9

let workingHours = prompt('Enter Hours', 40);
let ratePerHour = prompt('Enter Rate per Hour', 28);
let weeklyEarning = Number(workingHours) * parseInt(ratePerHour);
alert(weeklyEarning);

// 10
let fullName = "Akande Olalekan Toheeb";
fullName.length > 7 ? alert(`Your name is long`) : `Your name is short`;

// 11

let firstName = 'Olalekan'
let lastName = 'Akande'

firstName.length > lastName.length ?
 alert(`Your first name, ${firstName} is longer than your family name, ${lastName}`) : `Oops!`;

// 12

let myAge = 250;
let yourAge = 25;
let ageDifference = myAge - yourAge;

alert(`I am ${ageDifference} years older than you.`);

// 13

let birthYear = prompt('Emter birth year', 2000);
let age = 2023 - parseInt(birthYear);
let waitYear = 18 - age;

age > 18 ? alert(`You are ${age}. You are old enough to drive`): 
alert(`You are ${age}. You will be allowed to drive after ${waitYear} years.`);

// 14

let yearsLived = 100;
let secondsLived = 262800 * 12 * yearsLived;
console.log(secondsLived);

// 15

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
console.log(`${date}-${year}-${month} ${hour}:${minutes}`);
console.log(`${date}/${year}/${month} ${hour}:${minutes}`);

// Exercise: Level 3

month < 10 ? month = `0${month}`: month;
date < 10 ? day = `0${date}`: date;
hour < 10 ? hour = `0${hour}`: hour;
minutes < 10 ? minutes = `0${minutes}`: minutes;
console.log(`${year}-${month}-${date} ${hour}:${minutes}`);

