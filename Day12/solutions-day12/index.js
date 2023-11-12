// Exercises: Level 1

// 1
{
    let str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
    let pattern = /\d+/g;
    let income = str.match(pattern);
    let totalIncome = income.reduce((acc, num) => {
        return acc + Number(num);
    }, 0)

    console.log(totalIncome);
}

// 2
{
    let str = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'
    let pattern = /-?\d/g;
    let points = str.match(pattern);
    let furthestPoints = [Math.min(...points), Math.max(...points)];
    let distance = furthestPoints[1] - furthestPoints[0];

    console.log(distance);
}

// 3
{
    let is_valid_variable = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    console.log(is_valid_variable.test('first-name'));
}

// Exercises: Level 2

// 1

let str = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

const mostFrequentWords = (string, ratingNum) => {
    let pattern = /\b\w+\b/g;
    let words = string.match(pattern);

    let wordsSet = new Set(words);
    let counts = []

    for(w of wordsSet){
        const filteredWords = words.filter((word) => word === w);
        counts.push({word: w, count: filteredWords.length })
    }

    counts.sort((a, b) => {
        return b.count - a.count;
    })

    let rating = counts.slice(0, ratingNum)

    return rating;
}
console.log(mostFrequentWords(str, 10))

// Exercises: Level 3

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanText = (string) => {
    const pattern = /[%@$!&;?#]/g;
    let cleanedText = string.replace(pattern, '');

    return cleanedText;
}

let cleanedSentence = cleanText(sentence);
console.log(mostFrequentWords(cleanedSentence, 3));
