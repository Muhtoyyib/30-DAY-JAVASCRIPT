// Exercises Level 1

// 1
class Animal {
    constructor(name, age, color, legs, properties){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
        this.properties = properties;
    }

    getInfo(){
        let name = this.name;
        let age = this.age;
        let color = this.color;

        let info = `${name} is a ${color}, it has lived for ${age}.`;

        return info;
    }
}

// 2
class Dog extends Animal{
    constructor(name, age, color, legs, properties, owner, type){
        super(name, age, color, legs, properties)
        this.owner = owner;
        this.type = type;
    }
}

class Cat extends Animal{
    constructor(name, age, color, legs, properties, owner, type){
        super(name, age, color, legs, properties)
        this.owner = owner;
        this.type = type;
    }
}

// Exercises Level 2
class Lion extends Animal{
    constructor(name, age, color, legs, properties, owner, type){
        super(name, age, color, legs, properties)
        this.owner = owner;
        this.type = type;
    }
    getInfo(){
        let name = this.name;
        let age = this.age;
        let color = this.color;
        let owner = this.owner;

        let info = `${name} is a ${color}, it has lived for ${age}.${owner} owns it.`;

        return info;
    }
}

// Exercises Level 3

// 1
class Statistics  {
    constructor(sample){
        this.sample = sample
    }

    count(){
        let array = this.sample;

        return array.length;
    }
    sum(){
        let array = this.sample;

        let sum = array.reduce((acc, num) => {
            return acc + num;
        }, 0)

        return sum
    }
    min(){
        let arr = this.sample;

        return Math.min(...arr);
    }
    max(){
        let arr = this.sample;

        return Math.max(...arr);
    }
    range(){
        let arr = this.sample;
        let range = Math.max(...arr) - Math.min(...arr)

        return range
    }
    mean(){
        let arr = this.sample;
        let length = arr.length;
        let sum = arr.reduce((acc, num) => {
            return acc + num;
        }, 0)
        
        let mean = sum / length;

        return mean;
    }
    median(){
        let arr = this.sample;

        arr.sort((a, b) => {
            return a - b;
        })
        let position = (arr.length + 1) / 2;
        console.log(`position: ${position - 1}`);
        let median = arr[position - 1];

        return median
    }
    mode(){
        let arr = this.sample;
        let numbers = new Set(arr);
        let occurrenceList = [];

        for(let number of numbers){
            const filteredNum = arr.filter((num) => num === number);
            occurrenceList.push({num:  number, count: filteredNum.length})
        }

        occurrenceList.sort((a, b) => {
            return b.count - a.count
        })

        let highestOcurrence = occurrenceList[0];

        return highestOcurrence;
    }
    variance(){
        let arr = this.sample;
        let length = arr.length;

        let mean = this.mean(arr);

        let deviation = arr.map(el => {
            return (el - mean);
        })

        let deviationSqaured = deviation.map( el => {
            return el ** 2;
        })

        let sumDeviationSqaured = deviationSqaured.reduce((acc, num) => {
            return acc + num;
        }, 0)

        let variance = sumDeviationSqaured / length;

        return variance;
    }
    std(){
        let arr = this.sample;
       return Math.sqrt(this.variance(arr));
    }
    freqDist(){
        let arr = this.sample;
        let occurrenceList = {};

        arr.forEach(num => {
            if(occurrenceList[num]){
                occurrenceList[num]++;
            }else{
                occurrenceList[num] = 1;
            }
        })

        let occurrenceRating = Object.entries(occurrenceList).map(([number, count]) => ({number, count}));
        let  occurrencePercentage = occurrenceRating.sort((a, b) => {
            return b.count - a.count
        }).map(({number, count}) => {
           let percentage = parseFloat((count / arr.length) * 100);
           count = percentage;

           return {number, count}
        })

        let freqDist = occurrencePercentage.map(({number, count}) => {
            let arrNum = [ count, +number]

            return arrNum;
        })

        return freqDist;
    }
    describe(){
        console.log('Count:', this.count()) // 25
        console.log('Sum: ', this.sum()) // 744
        console.log('Min: ', this.min()) // 24
        console.log('Max: ', this.max()) // 38 
        console.log('Range: ', this.range()) // 14
        console.log('Mean: ', this.mean()) // 30
        console.log('Median: ',this.median()) // 29
        console.log('Mode: ', this.mode()) // {'mode': 26, 'count': 5}
        console.log('Variance: ',this.variance()) // 17.5
        console.log('Standard Deviation: ', this.std()) // 4.2
        console.log('Frequency Distribution: ',this.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37),
    }
}

let ages = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]);
ages.describe()

// 2
class personAccount {
    constructor(firstName, lastName, income, expenses){
        this.firstName = firstName;
        this.lastName = lastName;
        this.income = income;
        this.expenses = expenses;
    }

    totalIncome(){
      const income = Object.values(this.income);
      let totalIncome = 0;
  
      for(let i = 0; i < income.length; i++){
        totalIncome += income[i].amount;
      }
  
      return totalIncome;
    }
    totalExpense(){
      const expenses = Object.values(this.expenses);
      let totalExpenses = 0;
  
      for(let i = 0; i < expenses.length; i++){
        totalExpenses += expenses[i].amount;
      }
  
      return totalExpenses;
    }
    accountInfo (){
      const acctName = 'Akande Olalekan Toheeb';
      const bankName = 'First Bank';
      let acctBalance = 500;
      let accountInfo = {
        acctName: acctName,
        bankName: bankName,
        balance: acctBalance
      }
  
      return accountInfo;
    }
    addIncome (source, amount, description){
      this.income[`${source}`] = {
        amount: amount,
        description: description
      };
  
      return this.income[`${source}`];
    }
    addExpense (source, amount, description){
      this.expenses[`${source}`] = {
        amount: amount,
        description: description
      };
  
      return this.income[`${source}`];
    }
    async accountBalance (){
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

