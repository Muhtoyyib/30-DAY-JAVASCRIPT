// Exercise: Level 1

// 1
let challenge = '30 Days Of JavaScript';

// 2
console.log(challenge);

// 3
console.log(challenge.length);

// 4
challenge.toUpperCase();

// 5
challenge.toLowerCase();

// 6
console.log(challenge.substring(0, 2));

// 7
console.log(challenge.substr(0, 1));

// 8
console.log(challenge.substring(3, 22 ));

// 9
console.log(challenge.includes('Script'));

// 10
console.log(challenge.split());

// 11
console.log(challenge.split(' '));

// 12
let newStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
console.log(newStr.split(','));

// 13
console.log(challenge.replace('JavaScript', 'Python'));

// 14
const charAtIndex15 = challenge.charAt(15);

// 15
const charCodeOfJ = challenge.charCodeAt(11);

// 16
const firstAIndex = challenge.indexOf('a');

// 17
const lastAIndex = challenge.lastIndexOf('a');

// 18
const firstBecauseIndex = 'You cannot end a sentence with because because because is a conjunction'.indexOf('because'); 

// 18
const lastBecauseIndex = 'You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because');

// 19
const searchResult = 'You cannot end a sentence with because because because is a conjunction'.search('because');

// 20
const trimmedStr = ' 30 Days Of JavaScript '.trim(); 

// 21
const startsWithResult = challenge.startsWith('30 Days Of JavaScript');

// 22
const endsWithResult = challenge.endsWith('30 Days Of JavaScript');

// 23
const allOccurrencesOfA = challenge.match(/a/g); 

// 24
const concatenatedStr = '30 Days of '.concat('JavaScript');

// 25
const repeatedStr = challenge.repeat(2);


// Exercise: Level 2

{   
    // 1
    let str = `The quote 'There is no exercise better for the heart than reaching down
    and lifting people up.'
    by John Holmes teaches us to help one another.`;
    console.log(str);

    // 2
    let newStr = `"Love is not patronizing and charity isn't about pity, it is about love.
    Charity and love are the same -- 
    with charity you give love, so don't just give money but reach out your hand instead."`;
    console.log(newStr);

    // 3
    console.log('10' === 10);
    console.log(+'10'=== 10);

    // 4
    console.log(parseFloat('9.8') === 10);
    console.log(parseFloat('9.8'));
    console.log(Math.round(parseFloat('9.8')) === 10);

    // 5
    console.log('python'.includes('on'));
    console.log('jargon'.includes('on'));

    // 6
    console.log("I hope this course is not full of jargon".includes('jargon'));

    // 7
    let randomNum = Math.floor(Math.random() * 101);
    console.log(randomNum);

    // 8
    let randomNum50 = Math.floor(Math.random() * (((100 - 50) + 1) + 50));
    console.log(randomNum50);

    // 9
    // Generate a random number between 0 and 255 inclusively
    const randomNum1 = Math.floor(Math.random() * 256);
    console.log(randomNum1);

    // 10
    const jsString = 'JavaScript';
    const randomNum2 = Math.floor(Math.random() * jsString.length);
    const randomChar = jsString.charAt(randomNum2);

    console.log(`Random number: ${randomNum}`);
    console.log(`Random character in 'JavaScript': ${randomChar}`);


    // 11
    let escapeStr = `1\t 1\t 1\t 1\t 1\n
    2\t 1\t 2\t 4\t 8\n
    3\t 1\t 3\t 9\t 27\n
    4\t 1\t 4\t 16\t 64\n
    5 \t1 5\t 25\t 125`;
    console.log(escapeStr);

    // 12
    const sentence = 'You cannot end a sentence with because because because is a conjunction';
    const extractedPhrase = sentence.substr(31, 22);
    console.log(extractedPhrase);
}


// Exercise 3

{
    // 1
    let str = `'Love is the best thing in this world. Some found their love and some are still looking for their love.'`;
    console.log(str.match(/love/gi).length);

    // 2
    const sentence = 'You cannot end a sentence with because because because is a conjunction';
    const matchCount = (sentence.match(/because/g) || []).length;

    console.log(`Number of occurrences of 'because': ${matchCount}`);

    // 3
    const sentence1 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    // Regular expressions will be covered later in the course

    // 4
    const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

    // Using regular expressions to extract numbers '\d+' is used to match numbers
    const numbers = text.match(/\d+/g);

    // Calculate the total annual income
    let totalAnnualIncome = 0;
    if (numbers) {
        numbers.forEach(number => {
            totalAnnualIncome += parseInt(number);
        });
    }

    console.log('Total Annual Income:', totalAnnualIncome);

    // This will become more clear when we delve into regular expressions.
}

