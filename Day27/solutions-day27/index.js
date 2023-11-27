const techologies = [
    "<span style='color: #748ffc'> HTML</span>",
    "<span style='color: #3bc9db'> CSS </span>",
    "<span style='color: #20c997'> Sass </span>",
    "<span style='color: #f08c00'> JavaScript </span>",
    "<span style='color: #1864ab> jQuery </span>",
    "<span style='color: #862e9c'> React </span>",
    "<span style='color: #e03131'> Git and GitHub </span>",
    "<span style='color: #343a40'> AWS </span>"
];

const skills__text = [
    "<i class='skills__icon icon-basic-laptop' style='color: #0b7285'></i> <span class='skills__text'> Front-end Developer</span>",
    "<i class='skills__icon icon-basic-sheet-txt' style='color: #862e9c'></i><span class='skills__text'> Technical Writer </span>",
    "<i class='skills__icon icon-basic-cloud' style='color: #748ffc'></i><span class='skills__text'> Cloud Engineer </span>"
];

const techology = document.getElementById("techology");
const skillsText = document.getElementById("skills__text");
let currentTechnologyIndex = 0;
let currentSkillsIndex = 0;


function changeSkillsText() {
    skillsText.innerHTML = skills__text[currentSkillsIndex];
    techology.innerHTML = techologies[currentTechnologyIndex];
    currentTechnologyIndex = (currentTechnologyIndex + 1) % techologies.length;
    currentSkillsIndex= (currentSkillsIndex+ 1) % skills__text.length;
}

setInterval(changeSkillsText, 4000);
changeSkillsText();