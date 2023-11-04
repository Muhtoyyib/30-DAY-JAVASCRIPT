// Exercise: Level 1

// 1 
{
    let age = prompt('Enter your age');
    let ageDif = 18 - parseInt(age);

    if(parseInt(age) >  18){
        console.log(`You are old enough to drive.`);
    } else {
        console.log(`You are left with ${ageDif} years to drive.`)
    }
}

// 2

let myAge = prompt('Enter your age(user1)');
let yourAge = prompt('Enter your age(user2)');
let ageDif = myAge - yourAge;

ageDif > 0 ? console.log(`I'm older than you`) : console.log(`You are older`);

// 3

let a = 5;
let b = 17;

// 3.1 
if(a > b){
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}

// 3.2
a > b ? console.log(`${a} is greater than ${b}`): console.log(`${a} is less than ${b}`);

// 4
let num = 6;
num % 2 === 0 ? console.log(`${num} is an even number`) : console.log(`${num} is an odd number`);

// Exercise: Level 2

// 1
let score = 75;
switch(true){
    case score >= 80 && score <= 100:
        console.log(`A`);
        break;
    case score >= 70 && score <= 79:
        console.log(`B`);
        break; 
    case score >= 60 && score <= 69:
        console.log(`C`);
        break; 
    case num >= 50 && num <= 59:
        console.log(`D`);
        break; 
    case num >= 0 && num <= 49:
        console.log(`F`);
        break; 
}

// 2

let season = 'september';
switch(true){
    case season.toLowerCase() == 'september' || season.toLowerCase() === 'october' || season.toLowerCase() === 'november':
        console.log(`Autumn`);
        break;
    case season.toLowerCase() === 'december' || season.toLowerCase() === 'january' || season.toLowerCase() === 'february':
        console.log(`Winter`);
        break;
    case season.toLowerCase() === 'march' || season.toLowerCase() === 'april' || season.toLowerCase() === 'may':
        console.log(`Spring`)
        break;
    case season.toLowerCase() === 'june' || season.toLowerCase() === 'july' || season.toLowerCase() === 'august':
        console.log(`Summer`);
        break;
}

// 3
let day = `Wednesday`;
day.toLowerCase() === `monday` || day.toLowerCase() === `tueday` || day.toLowerCase()
 === `wednesday` || day.toLowerCase() === `thursday` || day.toLowerCase() === `friday` ?
   console.log(`${day} is a Weekend`) : console.log(`${day} is a Weekday`);

// Exercise: Level 3

let month = 'September';
let year = 'Leap';

year.toLowerCase() === 'regular' && month.toLowerCase() === `january` || month.toLowerCase() === `march` ||
month.toLowerCase() === `may` || month.toLowerCase() === `july` || month.toLowerCase() === `august` ||
month.toLowerCase() === `october` || month.toLowerCase() === `december` ? console.log(`${month} has 31 days`) : 
month.toLowerCase() === `april` || month.toLowerCase() === `june` || month.toLowerCase() === `september` || 
month.toLowerCase() === `november` ? console.log(`${month} has 30 days`) : 
month.toLowerCase() === `february` && year.toLowerCase() == 'regular'  ? console.log(`${month} has 28 days`) : 
month.toLowerCase() === `february` && year.toLowerCase() == 'leap' ? console.log(`${month} has 29 days`): 
console.log(`Please Input the month and year`);




