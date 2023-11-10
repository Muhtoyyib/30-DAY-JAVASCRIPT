// Exercises: Level 1

// 1
for (let i = 0; i <= 10; i++){
    console.log(i);
}

let i = 0;
while (i <= 10){
    console.log(i);
    i++
}


do{
    console.log(i);
    i++
} while(i<=10)

// 2

for (let i = 10; i>=0; i--){
    console.log(i);
}

i = 10
while(i >= 0){
    console.log(1);
    i--
}

do{
    console.log(1);
    i--
} while(i>=0);

// 3
let n = 5
for (let i = 0; i<= n; i++){
    console.log(i);
}

// 4
let val = '';
for (let i = 0; i<=7; i++){
   console.log( val += '#' );
}

// 5

for (let i = 0; i<=10; i++){
    console.log(`${i} * ${i} = ${i * i}`);
}

// 6
for(let i=0; i<=10; i++){
    console.log(`${i} ${i**2} ${i**3}`);
}

// 7
i = 0;
while(i<=100){
    if(i%2 === 0){
        console.log(i);
    }

    i++
}

// 8
while(i<=100){
    if(i%2 !== 0){
        console.log(i);
    }

    i++
}

// 9


for(let number = 1; number <= 100; number++){
    let isPrime = true;
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    
  
    else if (number > 1) {
    
      
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    
        if (isPrime) {
            console.log(`${number} is a prime number`);
        } else {
            console.log(`${number} is a not prime number`);
        }
    }
}

// 10
{let num = 0;
for(let i =0; i<=100; i++){
    num+=i;
}
console.log(num);}

// 11
let sumOfEvens = 0;
for(let i =0; i<=100; i++){
    if(i%2 === 0){
        sumOfEvens += i;
    }
}
console.log(sumOfEvens);

let sumOfOdds = 0;
for(let i =0; i<=100; i++){
    if(i%2 !== 0){
        sumOfOdds += i;
    }
}
console.log(sumOfOdds);

// 12
let sumOddEven = [sumOfEvens, sumOfOdds];
// for(let i = 0; i<=100; i++){
//     if(i%2 !== 0){
//         oddSum += i;
//     }
//     if(i%2 === 0){
//         evenSum += i;
//     }
// }

console.log(sumOddEven);

// 13
{
  let randomNums = [];

  for(let i = 0; i < 5; i++){
    let randomNum = Math.random();
    randomNums.push(randomNum);
 }

}


//14

const uniqueRandomNumbers = [];

while (uniqueRandomNumbers.length < 5) {
  const randomNumber = Math.floor(Math.random() * 100); // Adjust the range as needed
  if (!uniqueRandomNumbers.includes(randomNumber)) {
    uniqueRandomNumbers.push(randomNumber);
  }
}

console.log(uniqueRandomNumbers);

// 15
let id = Math.random().toString(36).substring(2, 8);
console.log(id);

// Exercise: Level 2

// 1

let idNoLimit = Math.random().toString(36).substring(2);
console.log(idNoLimit);

// 2
let randomHexa = '#' + Math.random().toString(16).substring(2,8);
console.log(randomHexa);

// 3
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);
let rgb = `rgb(${r}, ${g}, ${b})`;
console.log(rgb);

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Iceland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

// 4
let countriesToUpperCase = []
for(let i = 0; i < countries.length; i++){
  countriesToUpperCase.push(countries[i].toUpperCase());
}


const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// 5
let conutriesLength = []
for(let i = 0; i<countries.length; i++){
  conutriesLength.push(countries[i].length);
}
console.log(conutriesLength);

// 6
let newCountryArray = []
for(let i = 0; i<countries.length; i++){
  newCountryArray.push(`${countries[i]},${countries[i].substr(0,3).toUpperCase()}, ${countries[i].length}`);
}
console.log(newCountryArray);

// 7
let countriesWithLand = []
for(let i = 0; i<countries.length; i++){
  if(countries[i].match(/land/gi)){
      countriesWithLand.push(countries[i]);
  } 
}
if(countriesWithLand.length !== 0){
  console.log(countriesWithLand);
} else{
  console.log('All these countries are without land');
}

// 8
let countriesWithIA = []
for(let i = 0; i<countries.length; i++){
  if(countries[i].match(/ia/gi)){
      countriesWithIA.push(countries[i]);
  } 
}

if(countriesWithIA.length !== 0){
  console.log(countriesWithIA);
} else{
  console.log('All these countries are without ia');
}

// 9
let cwlc = '';
for(let i = 0; i<countries.length; i++){
  if(cwlc.length < countries[i].length){
      cwlc = countries[i];
  }
}

console.log(cwlc);

// 10
let cw5Char = [];
for(let i = 0; i<countries.length; i++){
  if(countries[i].length === 5){
      cw5Char.push(countries[i]);
  }
}
console.log(cw5Char);

// 11
let Word = '';
for(let i = 0; i<webTechs.length; i++){
  if(longestWord.length < webTechs[i].length){
      longestWord = webTechs[i];
  }
}

console.log(longestWord);

// 12
let newWebArray = [];
for(let i = 0; i<webTechs.length; i++){
  newWebArray.push([`${webTechs[i]}, ${webTechs[i].length}`]);
}

console.log(newWebArray);

// 13
let stack = ''
for(let i = 0; i<mernStack.length; i++){
  stack += mernStack[i].substr(0,1);
}

console.log(stack);

// 14
for(let i = 0; i<webTechs.length; i++){
  console.log(webTechs[i]);
}

// 15
let fruits = ['banana', 'orange', 'mango', 'lemon'];
let reversedFruits = [];
for(let i = 0; i<fruits.length; i++){
  reversedFruits.unshift(fruits[i]);
}

console.log(reversedFruits);

// 16
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
for(let i = 0; i<fullStack.length; i++){
  let arr = fullStack[i];
  {if(arr) {
  for(let i = 0; i< arr.length; i++){
      console.log(arr[i]);
  }
  } else{
    console.log('not found');

  } }
}

// Exercise: Level 3

// 1
let newCArr = [];
for(let i = 0; i<countries.length; i++){
  newCArr.push(countries[i]);
}

console.log(newCArr);

// 2
let sortedCountries = newCArr.sort();
console.log(sortedCountries);

// 3 
console.log(webTechs.sort());
console.log(mernStack.sort());

// 4
{
  const countriesWithLand = [];

  for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) {
      countriesWithLand.push(countries[i]);
    }
  }
}

console.log(countriesWithLand);

// 5
let countryWithHC = ''
for(let i = 0; i < countries.length; i++){
  if(countryWithHC.length < countries[i].length){
      countryWithHC = countries[i];
  }
}

console.log(countryWithHC);

// 6
// Same as 4

// 7
let countrieWith4Char = [];
for(let i = 0; i < countries.length; i++){
  countries[i].length === 4 ? countrieWith4Char.push(countries[i]) : countries[i];
}
console.log(countrieWith4Char);

// 8
let countriesWith2OrMoreChar = [];
for(let i = 0; i < countries.length; i++){
  countries[i].length === 2 || countries[i].length > 2  ? countriesWith2OrMoreChar.push(countries[i]) : countries[i];
}
console.log(countriesWith2OrMoreChar);

// 9
let reversedCountry = [];
for (let i = 0; i < countries.length; i++) {
  reversedCountry.unshift(countries[i].toUpperCase());
}
console.log(reversedCountry);