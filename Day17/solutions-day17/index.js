// Exercises: Level 1

// 1
class PersonInfo {
    constructor(firstName, lastName, age, country ,city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city
    }
}
let devInfo = JSON.stringify(new PersonInfo('Akande', 'Olalekan Toheeb', 25, 'Nigeria', 'Ibadan'));
localStorage.setItem('devInfo', devInfo);

// Exercises: Level 2

// 1

class Student extends PersonInfo {
    constructor(firstName, lastName, age, country , skills){
        super(firstName, lastName, age, country)
        this.skills = skills;
    }
}
let Student = JSON.stringify(new Student('Akande', 'Olalekan Toheeb', 25, 'Nigeria', ['Technical Writing', 'Public Speaking']));
localStorage.setItem('Student', Student);

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