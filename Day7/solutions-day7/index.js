// Exercies: Level 1

// 1
function fullName(){
    let fname = 'Akande';
    let lname = 'Olalekan Toheeb';
    let fullName = fname + ' ' + lname;

    return fullName;
}

// 2
function fulName(firstName, lastName){
    let fullName = `${firstName} ${lastName}`;

    return fullName;
}

// 3
function addNumbers(x, y){
    let sum = x + y;

    return sum;
}

// 4
function areaOfRectangle(length, width){
    let area = length * width;

    return area;
}

// 5
function perimeterOfRectangle(length, width){
    let perimeter = 2*(length + width);

    return perimeter;
}

// 6
function volumeOfRectPrism(length, width, height){
    let volume = length * width * height;

    return volume;
}

// 7
function areaOfCircle(r){
    let area = Math.PI * (r**2);

    return area;
}

// 8
function circumOfCircle(r){
    let circumOfCircle = 2 * Math.PI * r;

    return circumOfCircle;
}

// 9
function density(mass, volume){
    let density = mass / volume;

    return density;
}

// 10
function speed(distance, timeTaken){
    let aveSpeed = distance / timeTaken;

    return aveSpeed;
}

// 11
function weight(mass, gravity = 9.8){
    let weight = mass * gravity;

    return weight;
}

// 12
function convertCelsiusToFahrenheit(tempInCelcius){
    let tempInFah =  (tempInCelcius * 9/5) + 32; 

    return tempInFah;
}

// 13
function calBMI(weight, height){
    let BMI = weight / (height * height);

    let returnVal = BMI < 18.5 ? 'Underweight' : BMI >= 18.5 && BMI <= 24.9 ? 'Normal weight': BMI >= 25 && BMI <= 29.9 ? 
    'Overweight': BMI >= 30 ? 'Obese': 'Input Weight';

    return returnVal;
}

// 14
function checkSeason(month){
    let returnVal = ''

    if(month.toLowerCase() == 'september' || month.toLowerCase() === 'october' || month.toLowerCase() === 'november'){
        returnVal = 'Autumn';
    } else if(month.toLowerCase() == 'december' || month.toLowerCase() === 'january' || month.toLowerCase() === 'february'){
        returnVal = 'Winter';
    } else if(month.toLowerCase() == 'march' || month.toLowerCase() === 'april' || month.toLowerCase() === 'may'){
        returnVal = 'Spring';
    } else if(month.toLowerCase() == 'june' || month.toLowerCase() === 'july' || month.toLowerCase() === 'august'){
        returnVal = 'Summer';
    }

    return returnVal;
}

// 15
function findMax(x, y, z){
    let nums = [x, y, z];
    let max = 1;

    for(let i = 0; i < nums.length; i++){
        nums[i] > max ? max = nums[i] : max;
    }

    // nums.map((num) => {
    //     num > max ? max = num : max;
    // })
    return max;
}

// Exercise: Level 2

1
function solveLinEquation(a,b,c){
    let equation = `(${a}*x) + (${b}*y) + ${c}`;
    return equation;
}



// 2
function solveQuadEquation(a,b,c){
    let discriminant = (b**2) - (4*a*c);
    
    let root1 = 0;
    let root2 = 0;

    if(discriminant > 0){
        root1 = (-b + Math.sqrt(b**2 - 4*a*c)) / 2*a;
        root2 = (-b - Math.sqrt(b**2 - 4*a*c)) / 2*a;
    } else if(discriminant === 0){
        root1 = -b / 2*a;
        root2 = root1
    } else if(discriminant < 0){
        root1 = (-b / 2*a) + ( ('i' + Math.sqrt(-(b**2) - 4*a*c)) / 2*a );
        root2 = (-b / 2*a) - ( ('i' + Math.sqrt(-(b**2) - 4*a*c)) / 2*a )
    }

    let ans = [root1, root2];

    return ans;
}

// 3
function printArray(arr){
    for(let i = 0; i < arr.length ; i++){
        console.log(arr[i]);
    }
}


// 4
function  showDateTime(){
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let today = `${month} / ${date} / ${year}`;

    return today;
}

// 5
function swapValues(x, y){
    [x, y] = [y, x];

    return [x, y];
}

// 6
function reverseArray(arr){
    let reversedArr = [];

    for(let i = 0; i < arr.length; i++){
        reversedArr.unshift(arr[i]);
    }

    return reversedArr;
}

// 7
function capitalizeArray(arr){
    let captalizedArray = [];

    for(let i = 0; i < arr.length; i++){
        captalizedArray.push(arr[i].toUpperCase());
    }

    return captalizedArray;
}

// 8
function addItem(item){
    let items = [];
    items.push(item);

    return items;
}

// 9
function removeItem(item){
    let items = ['akande', 'toheeb', 'olalkean'];
    let itemToremove = item.toLowerCase();

    let index = items.indexOf(itemToremove);
    if(index > -1){
        items.splice(index, 1);
    }

    return items
}

// 10
function sumOfNumbers(num){
    let sumOfNumbers = 0;

    for(let i = 0; i <= num; i++){
        sumOfNumbers += i;
    }

    return sumOfNumbers;
}

// 11
function sumOfOdds(num){
    let sumOfOdds = 0;

    for(let i = 0; i<=num; i++){
        if(i%2 !== 0){
            sumOfOdds += i;
        }
    }

    return sumOfOdds;
}

// 12
function sumOfEven(num){
    let sumOfEven = 0;

    for(let i = 0; i<=num; i++){
        if(i%2 === 0){
            sumOfEven += i;
        }
    }

    return sumOfEven;
}

// 13
function evensAndOdds(num){
    let evenNums = [];
    let oddNums = [];

    for(let i = 0; i<=num; i++){
        if(i%2 === 0){
            evenNums.push(i);
        }
    }

    for(let i = 0; i<=num; i++){
        if(i%2 !== 0){
            oddNums.push(i);
        }
    }

    console.log(`The number of odds are ${evenNums.length}`);
    console.log(`The number of odds are ${oddNums.length}`);

}

// 14
let addNums = (...args) => {
    let sum = 0;

    for(let i = 0; i<args.length; i++){
        sum += args[i];
    }

    return sum
}

// 15
let randomUserIp = () => {
    function generateRandomOctet(max, min){
        let randomNum = Math.floor(Math.random() * (((max - min) + 1) + min));

        return randomNum;
    }

    let firstOctet = generateRandomOctet(255, 0);
    let secondOctet = generateRandomOctet(255, 0);
    let thirdOctet = generateRandomOctet(255, 0);
    let fourthOctet = generateRandomOctet(255, 0);

    let randomIp = `${firstOctet}.${secondOctet}.${thirdOctet}.${fourthOctet}`;

    return randomIp;
}

// 16

let randomMacAddress = () => {
    function generateRandomPiece(max, min){
        let id = Math.random().toString(36).substring(min, max).toUpperCase();

        return id;
    }

    let firstBin = generateRandomPiece(2, 4);
    let secondBin = generateRandomPiece(2, 4);
    let thirdBin = generateRandomPiece(2, 4);
    let fourthBin = generateRandomPiece(2, 4);
    let fifthBin = generateRandomPiece(2, 4);
    let sixthBin = generateRandomPiece(2, 4);


    let randomMacAdd = `${firstBin}.${secondBin}.${thirdBin}.${fourthBin}.${fifthBin}.${sixthBin}`;

    return randomMacAdd;
}

// 17
let randomHexaNumberGenerator = () => {
    let randomHexa = '#';
    randomHexa += Math.random().toString(16).substring(2,8);

    return randomHexa;
}

// 18
let  userIdGenerator = () => {
    let id = Math.random().toString(36).substring(2, 8);

    return id;
}

// Exercise: Level 3

// 1
let userIdGeneratedByUser = (numOfCharacter, numOfId) => {
    numOfCharacter = Number(prompt('Input number of character', 5));
    numOfId = Number(prompt('Input number of Id', 4));
    let max = 2 + numOfCharacter;
    let userId = [];

    function generateId (min, max){
        let id = Math.random().toString(36).substring(min, max);

        return id
    }

    for(let i = 0; i < numOfId; i++){
        userId.push(generateId(2, max));
    }

    return userId;
}

// 2
let rgbColorGenerator = () => {
    function generateRgbPiece(){
        let num = Math.floor(Math.random() * 256);

        return num;
    }

    let r = generateRgbPiece();
    let g = generateRgbPiece();
    let b = generateRgbPiece();
    let rgb = `rgb(${r}, ${g}, ${b})`;

    return rgb;
}

// 3
let arrayOfHexaColors = (numOfColors) => {
    let hexaColors = []

    let randomHexaNumberGenerator = () => {
        let randomHexa = '#';
        randomHexa += Math.random().toString(16).substring(2,8);
    
        return randomHexa;
    }

    for(let i = 0; i < numOfColors; i++){
        hexaColors.push(randomHexaNumberGenerator())
    }

    return hexaColors;
}

// 4
let arrayOfRgbColors = (numOfColors) => {
    let rgbColors = [];

    let generateRbgColor= () => {
        function generateRgbPiece(){
            let num = Math.floor(Math.random() * 256);
    
            return num;
        }
    
        let r = generateRgbPiece();
        let g = generateRgbPiece();
        let b = generateRgbPiece();
        let rgb = `rgb(${r}, ${g}, ${b})`;
    
        return rgb;
    }

    for(let i = 0; i < numOfColors; i++){
        rgbColors.push(generateRbgColor())
    }

    return rgbColors;
}

// 5
function convertHexToRgb(hexColor) {
    // Remove the "#" symbol if present
    if (hexColor.startsWith("#")) {
      hexColor = hexColor.slice(1);
    }
  
    // Convert the hexadecimal color to RGB components
    const red = parseInt(hexColor.substring(0, 2), 16);
    const green = parseInt(hexColor.substring(2, 4), 16);
    const blue = parseInt(hexColor.substring(4, 6), 16);
  
    // Return the RGB color as a string
    return `rgb(${red}, ${green}, ${blue})`;
  }
  

// 6 
function convertRgbToHex(rgbColor) {
    // Extract the RGB components from the input string
    const match = rgbColor.match(/(\d+),\s*(\d+),\s*(\d+)/);
  
    if (!match) {
      throw new Error("Invalid RGB color format. Please use 'rgb(r, g, b)' format.");
    }
  
    const red = parseInt(match[1], 10);
    const green = parseInt(match[2], 10);
    const blue = parseInt(match[3], 10);
  
    // Convert RGB components to hexadecimal and pad with leading zeros if necessary
    const hexRed = red.toString(16).padStart(2, '0');
    const hexGreen = green.toString(16).padStart(2, '0');
    const hexBlue = blue.toString(16).padStart(2, '0');
  
    // Return the hexadecimal color as a string
    return `#${hexRed}${hexGreen}${hexBlue}`;
  }
  

// 7
let generateColors = (color, numOfColors) => {
    let colors = [];

    function arrayOfHexaColors(numOfColor){
        let randomHexaNumberGenerator = () => {
            let randomHexa = '#';
            randomHexa += Math.random().toString(16).substring(2,8);
        
            return randomHexa;
        }
    
        for(let i = 0; i < numOfColors; i++){
            colors.push(randomHexaNumberGenerator())
        }
    
        return colors;
    }

    let arrayOfRgbColors = (numOfColors) => {
        let generateRbgColor= () => {
            function generateRgbPiece(){
                let num = Math.floor(Math.random() * 256);
        
                return num;
            }
        
            let r = generateRgbPiece();
            let g = generateRgbPiece();
            let b = generateRgbPiece();
            let rgb = `rgb(${r}, ${g}, ${b})`;
        
            return rgb;
        }
    
        for(let i = 0; i < numOfColors; i++){
            colors.push(generateRbgColor())
        }
    
        return colors;
    }

    if(color.toLowerCase() === 'hexa' ){
        arrayOfHexaColors(numOfColors);
    } else if(color.toLowerCase() === 'rgb'){
        arrayOfRgbColors(numOfColors);
    }

    return colors;
}

// 8
function shuffleArray(array){
    let index = 0;
    for(let i = array.length - 1; i > 0; i--){
        index = Math.floor(Math.random() * (i+1));
        [array[i], array[index]] = [array[index], array[i]];
    }

    return array;
}

// 9
function factorial(num){
    let product = 1;
    for(let i=2; i <= num; i++){
        product *= i;
    }

    return product;
}

// 10
function isEmpty(param){
    let returnStatement = '';

    if(param.toString() === ''){
        returnStatement = 'Empty';
    } else{
        returnStatement = `${param} is Not Empty`;
    }

    return returnStatement;
}

// 11
// Check Level 2 , number 14.

// 12
function sumOfArrayItems(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        isNaN(array[i]) === false ? sum += array[i] : console.log(`${array[i]} is not a number`);
    }

    return sum;
}

// 13
function average(array){
    let sum = 0;
    let average = 0;
    let noOfNumbers = 0;

    for(let i = 0; i < array.length; i++){
        if(isNaN(array[i]) === false) {
            sum += array[i] 
            noOfNumbers += 1;
        } else{
            console.log(`${array[i]} is not a number`);
        } 
    }

    average = sum / noOfNumbers;

    return average;
}

// 14
function modifyArray(array){
    let modifiedItem = array[4].toUpperCase()
    array.length >= 5 ? array.splice(4,1, modifiedItem) : console.log('item not found');

    return array;
}

// 15
function isPrime(number){
        let isPrime = true;

        if (number === 1) {
            console.log("1 is neither prime nor composite number.");
        } else if (number > 1) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                }
            }
        }

       return isPrime;
}

// 16
// Question not clearly explained

// 17
function checkUniqueDataType(array){
    let dataType = typeof array[0];
    let result = true;

    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === dataType){
            result = result;
        } else{
            result = false;
            break;
        }
    }

    return result;
}

// 18

function isValidVariable(variableName) {
  // Check if the variableName starts with a letter, underscore, or dollar sign
  if (!/^[a-zA-Z_$]/.test(variableName)) {
    return false;
  }

  // Check if the rest of the variableName contains only letters, numbers, underscores, or dollar signs
  if (!/^[a-zA-Z0-9_$]+$/.test(variableName)) {
    return false;
  }

  return true;
}

// 19
function getUniqueRandomNumbers() {
    const uniqueNumbers = new Set();
  
    while (uniqueNumbers.size < 7) {
      const randomNumber = Math.floor(Math.random() * 10); 
      uniqueNumbers.add(randomNumber); 
    }
  
    return Array.from(uniqueNumbers); 
}

// 20
function reverseCountries(array){
    let newArray = [...array];
    newArray.reverse()

    return newArray;
}