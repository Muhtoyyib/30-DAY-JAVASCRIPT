// Exercises: Level 1

// 1
const dog = {}

// 2
console.log(dog);

// 3
dog.name = 'Jack';
dog.legs = 2;
dog.color = 'oragne';
dog.age = '6 Months';
dog.bark = () => {
  let sound = 'woof woof'

  return sound
}

// 4
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark() );

// 5
dog.breed = 'German Sherperd';
dog.getDogInfo = function (){
  let name = this.name;

  return name
} 

// Exercises: Level 2

// 1
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

function getMostSkilled(){
  let objValues = Object.values(users);
  console.log(objValues.length);
  let numOfSkills = 0;
  let mostSkilledUser = {};

  for(let i = 0; i < objValues.length; i++){
      if(objValues[i].skills.length > numOfSkills){
          numOfSkills = objValues[i].skills.length;
          mostSkilledUser = objValues[i];
      }
  }

  return mostSkilledUser;
} 


// 2
function countLoggedUsers(){
  let objValues = Object.values(users);
  let loggedUsers = [];
  let usersNotLoggeIn = [];
  let numOfLoggedUsers = 0;
  let numOfUsersNotLoggeIn = 0; 

  for(let i = 0; i < objValues.length; i++){
      if(objValues[i].isLoggedIn == true){
          loggedUsers.push(objValues[i]);
      } else if(objValues[i].isLoggedIn == false) {
          usersNotLoggeIn.push(objValues[i]);
      }
  } 

  numOfLoggedUsers = loggedUsers.length;
  numOfUsersNotLoggeIn = usersNotLoggeIn.length

  let returnStatement = `UsersLoggedIn: ${numOfLoggedUsers} , UsersNotLoggeIn: ${numOfUsersNotLoggeIn}`;

  return returnStatement;
}

// 3
function findMernDev (){
  let objValues = Object.values(users);
  let mernDev = []

  for(let i = 0; i < objValues.length; i++){
      let skills = objValues[i].skills;
      console.log(skills.includes('MongoDB'));
      if(skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && (skills.includes('Node') || skills.includes('Node.js'))){
        mernDev.push(objValues[i]);
      }   
  }

  return mernDev;
}

// 4
users.Toyyib = {
email: 'akandeolalekantoheeb94@gmail.com',
skills: ['HTML', 'CSS', 'JavaScript', 'SASS', 'Bootstrap', 'React', 'Firebase', 'AWS'],
age: 23,
isLoggedIn: false,
points: 80
}

// 5
console.log(Object.keys(users));

// 6s
console.log(Object.values(users));

// 7
const countries = require('./contries');
const usableCountriesArray = countries.countries_data;

for(let i = 0; i < usableCountriesArray.length; i++){
console.log(`Country Name: ${usableCountriesArray[i].name} \n Country Capital: ${usableCountriesArray[i].capital} \n
Population: ${usableCountriesArray[i].populatiin} \n Languages: ${usableCountriesArray[i].languages}`);
}

// Exercises: Level 3

// 1
const personAccount = {
firstName: 'Akande',
lastName: 'Olalekan Toheeb',
income: {
  technicalWriting: {
    amount: 400,
    description: 'Freenlacing'
  },
  teaching: {
    amount: 200,
    description: 'Some funds from student'
  },
},
expenses: {
  groceries: {
    amount: 100,
    description: 'Every sunday'
  },
  transport: {
    amount: 50,
    description: 'Transportation'
  },
},
totalIncome: function (){
  const income = Object.values(this.income);
  let totalIncome = 0;

  for(let i = 0; i < income.length; i++){
    totalIncome += income[i].amount;
  }

  return totalIncome;
},
totalExpense: function (){
  const expenses = Object.values(this.expenses);
  let totalExpenses = 0;

  for(let i = 0; i < expenses.length; i++){
    totalExpenses += expenses[i].amount;
  }

  return totalExpenses;
},
accountInfo: function (){
  const acctName = 'Akande Olalekan Toheeb';
  const bankName = 'First Bank';
  let acctBalance = 500;
  let accountInfo = {
    acctName: acctName,
    bankName: bankName,
    balance: acctBalance
  }

  return accountInfo;
},
addIncome: function (source, amount, description){
  this.income[`${source}`] = {
    amount: amount,
    description: description
  };

  return this.income[`${source}`];
},
addExpense: function (source, amount, description){
  this.expenses[`${source}`] = {
    amount: amount,
    description: description
  };

  return this.income[`${source}`];
},
accountBalance: async function (){
  let accountInfo = await this.accountInfo();
  let currentBalance = accountInfo.balance
  let income = await this.totalIncome();
  let expenses = await this.totalExpense();
  let balanceAfterIncome = currentBalance + income;
  let accountBalance = balanceAfterIncome - expenses;

  console.log(currentBalance, income, expenses, balanceAfterIncome, accountBalance);

  return accountBalance;
}
}

// 2
const acctUsers = [
{
  _id: 'ab12ex',
  username: 'Alex',
  email: 'alex@alex.com',
  password: '123123',
  createdAt:'08/01/2020 9:00 AM',
  isLoggedIn: false
},
{
  _id: 'fg12cy',
  username: 'Asab',
  email: 'asab@asab.com',
  password: '123456',
  createdAt:'08/01/2020 9:30 AM',
  isLoggedIn: true
},
{
  _id: 'zwf8md',
  username: 'Brook',
  email: 'brook@brook.com',
  password: '123111',
  createdAt:'08/01/2020 9:45 AM',
  isLoggedIn: true
},
{
  _id: 'eefamr',
  username: 'Martha',
  email: 'martha@martha.com',
  password: '123222',
  createdAt:'08/01/2020 9:50 AM',
  isLoggedIn: false
},
{
  _id: 'ghderc',
  username: 'Thomas',
  email: 'thomas@thomas.com',
  password: '123333',
  createdAt:'08/01/2020 10:00 AM',
  isLoggedIn: false
}
];

// 2.1
function signUp(userName, mail, pass){
let id = Math.random().toString(36).substring(2, 8)
let newUser = {
  id: id,
  username: userName,
  email: mail,
  password: pass,
  createdAt: new Date(),
  isLoggedIn: true
}

for (let i = 0; i < acctUsers.length; i++) {
  const username = acctUsers[i].username.toLowerCase();
  const newUserUsername = newUser.username.toLowerCase();

  if(username === newUserUsername){
    console.log(`Error! Username already exist`);
    break;
  } else{
    acctUsers.push(newUser);
    break;
  }
}

return acctUsers;
}

// 2.2
function signIn(userName, pass){
let username = userName;
let password = pass;
let loginStatement = '';

for(let i = 0; i < acctUsers.length; i++){
  if(username.toLowerCase() === acctUsers[i].username.toLowerCase() && password === acctUsers[i].password){
    acctUsers[i].isLoggedIn === false ? loginStatement = `Successful` : loginStatement = `Already logged in`
    break;
  } else {
    // alert(`Username or password incorrect`);
    loginStatement = `Username or password incorrect`
  }
}

return loginStatement;
}

// 3
const products = [
{
    _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]
// 3.1
function rateProduct(productId, username, userRating){
let id  = productId;
let raterId = '';
let product = {};

for(let i = 0; i < acctUsers.length; i++){
  if(acctUsers[i].username.toLowerCase() === username.toLowerCase()){
    raterId = acctUsers[i]._id;
    break; 
  }
}

let newRating = {
  userId: raterId,
  rate: userRating
}

if(raterId.length > 0){
  for(let i = 0; i < products.length; i++){
    if(id === products[i]._id){
      products[i].ratings.push(newRating);
      product = products[i];
      break;
    }
  }

  if(Object.values(product).length === 0){
    console.log(`Product does not exist`);
  }
} else{
  console.log(`User does not exist`);
}

return product;
}



// 3.2
function averageRating(id){
let productId  = id;
let rating = 0;

for(let i = 0; i < products.length; i++){
  if(productId === products[i]._id){
    let ratings = products[i].ratings;
    let rates = [];
    let sumOfRates = 0;

    if (ratings.length > 0) {
      for(let i = 0; i < ratings.length; i++){
        rates.push(ratings[i].rate);
      }

      for(let i = 0; i<rates.length; i++){
        sumOfRates += rates[i];
      }

      let actualRating = sumOfRates / rates.length;
      rating = actualRating;

      break;
    } else {
      rating = `No ratings recorded for the product`;
    }

    break;
  } else {
    rating = `Id does not exist`
  }
}

return rating;
}

// 4
function likeProduct(productId, username){
let id  = productId;
let raterId = '';
let product = {};

for(let i = 0; i < acctUsers.length; i++){
  if(acctUsers[i].username.toLowerCase() === username.toLowerCase()){
    raterId = acctUsers[i]._id;
    break; 
}
}


if(raterId.length > 0){
  for(let i = 0; i < products.length; i++){
    if(id === products[i]._id){
      product = products[i];
      let likes = products[i].likes;

      for(let i = 0; i < likes.length; i++){
        if(raterId !== likes[i]){
          likes.push(raterId)
          break;
        } else{
          likes.splice(i, 1);
          break;
        }
      }
      break;
    } 
  }

  if(Object.values(product).length === 0){
    console.log(`Product does not exist`);
  }
} else{
  console.log(`User does not exist`);
}

return product;
}