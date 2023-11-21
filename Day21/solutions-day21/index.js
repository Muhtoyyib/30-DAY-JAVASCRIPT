// Exercise: Level 1

// 1
const firstParagraph = document.querySelector('p');

// 2
const firstParagraphById = document.querySelector('#first-paragraph');
const secondParagraphById = document.querySelector('#second-paragraph');
const thirdParagraphById = document.querySelector('#first-paragraph');
const fourthParagraphById = document.querySelector('#fourth-paragraph');

// 3
const paragraphs = document.querySelectorAll('p');

// 4
paragraphs.forEach((p) => {
    return p.textContent;
})

// 5
// paragraphs[3].textContent = 'Fourth Paragraph'

// 6
paragraphs.forEach((p) => {
    p.setAttribute('class', 'paragraphs')
})

// paragraphs.forEach((p) => {
//     p.className = 'init'
// })

// Exercise: Level 2

// 1 
paragraphs.forEach((p) => {
    p.style.fontSize = '14px';
    p.style.fontFamily = 'sans-serif';
})

// 2
paragraphs.forEach((p, i) => {
    if(i % 2 === 0){
        p.style.color = 'red';
    } else{
        p.style.color = 'green'
    }
})

// 3
// Did this in exercise Level 1 exercises

// Exercise: Level 3

// 1
const changeYearColor = () => {
    let element = document.getElementById('year');
    const randomColor = '#'  + Math.random().toString(16).substring(2,8);

    return element.style.color = randomColor;
};
setInterval(changeYearColor, 1000);

// 2
function updateDateAndTime() {
    const datElement = document.getElementById('date-and-time');
    let now = new Date();
    let year = now.getFullYear();
    let monthIndex = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let monthOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'];
    let month = monthOfTheYear[monthIndex]

    datElement.textContent = `${month} ${date}, ${year} ${hour}:${minutes}:${seconds}`

    const randomColor = '#'  + Math.random().toString(16).substring(2,8);

    datElement.style.backgroundColor = randomColor;
}

setInterval(updateDateAndTime, 1000);

// 3, 4, 5
const lists = document.querySelectorAll('li');
lists.forEach((li) => {
    let className = li.className;
    console.log(className);
    if(className === 'completed'){
        li.style.backgroundColor = 'green'
    } else if(className === 'ongoing'){
        li.style.backgroundColor = 'yellow'
    } else{
        li.style.backgroundColor = 'red'
    }
})


