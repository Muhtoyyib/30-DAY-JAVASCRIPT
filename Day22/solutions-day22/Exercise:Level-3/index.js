const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fa fa-linkedin"></i>'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fa fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fa fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
}

const primaryHeading = document.getElementById('primary-heading');
primaryHeading.innerHTML = `${asabenehChallenges2020.description} in <span id="year"> ${asabenehChallenges2020.challengeYear}</span>`;

const challengeSubtitle = document.getElementById('challenge-subtitle');
challengeSubtitle.innerHTML = `${asabenehChallenges2020.challengeSubtitle}`;

let container = document.getElementById('main-container');

// CHANGE YEAR COLOR
const changeYearColor = () => {
    let element = document.getElementById('year');
    const randomColor = '#'  + Math.random().toString(16).substring(2,8);

    return element.style.color = randomColor;
};
setInterval(changeYearColor, 1000);

// UPDATE DATE AND TIME
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

// CHALLENGES
{
    let challenges = asabenehChallenges2020.challenges;

    challenges.forEach((challenge) => {
        let row = document.createElement('div');
        row.className = 'row';

        // FIRST COLUMN
        let firstColumn = document.createElement('div');
        firstColumn.className = 'col-1-of-3';
        let challengeName = document.createElement('p');
        challengeName.innerHTML = `<u> ${challenge.name} </u>`;
        firstColumn.appendChild(challengeName);

        // SECOND COLUMN
        let secondColumn = document.createElement('div');
        secondColumn.className = 'col-1-of-3';

        let details = document.createElement('details');
        let summary = document.createElement('summary');
        summary.innerHTML = challenge.topics[0];
        let list = document.createElement('ul');
        let topics = challenge.topics;
        topics.forEach((topic) => {
            let li = document.createElement('li');
            li.innerHTML = topic;
            list.appendChild(li);
        })
        details.appendChild(summary);
        details.appendChild(list);
        secondColumn.appendChild(details);

        // THIRD COLUMN
        let thirdColumn = document.createElement('div');
        thirdColumn.className = 'col-1-of-3';
        thirdColumn.innerHTML = `<p> ${challenge.status} </p>`;

        if(challenge.status.toLowerCase() === 'done'){
            row.style.backgroundColor = '#087f5b'
        } else if(challenge.status.toLowerCase()=== 'ongoing'){
            row.style.backgroundColor = '#e67700'
        } else{
            row.style.backgroundColor = '#c92a2a'
        }

        row.appendChild(firstColumn);
        row.appendChild(secondColumn);
        row.appendChild(thirdColumn);

        container.appendChild(row);

    })
}

// AUTHOR
{
    const authorDetails = asabenehChallenges2020.author;

    // Author Full Name
    const authorName = document.createElement('h2');
    authorName.classList.add('author-name');
    authorName.innerHTML = `${authorDetails.firstName} ${authorDetails.lastName}`;
    container.appendChild(authorName);

    // Social Links
    const socialLinks = authorDetails.socialLinks;
    const socialLinkContainer = document.createElement('div');
    socialLinkContainer.classList.add('social-links')
    socialLinks.forEach((link) => {
        const socialLink = document.createElement('a');
        socialLink.classList.add('social-link');
        socialLink.href = link.url;
        socialLink.innerHTML = link.fontawesomeIcon;
        socialLinkContainer.appendChild(socialLink);
    });
    container.appendChild(socialLinkContainer);

    // Bio
    const bio = authorDetails.bio;
    const bioContainer = document.createElement('div');
    bioContainer.classList.add('row');
    const bioElement = document.createElement('p');
    bioElement.classList.add('bio');
    bioElement.innerHTML = bio;
    bioContainer.appendChild(bioElement);
    container.appendChild(bioContainer);

    // Title, Skills, Qualifications
    const titles = authorDetails.titles;
    const skills = authorDetails.skills;
    const qualifications = authorDetails.qualifications;


    let moreDetailsContainer = document.createElement('div');
    moreDetailsContainer.classList.add('row');

    // firstDetailsColumn
    let firstDetailsColumn = document.createElement('div');
    firstDetailsColumn.classList.add('col-1-of-3');
    let firstDetailsHeading = document.createElement('h3');
    firstDetailsHeading.style.fontSize = '2.5rem';
    firstDetailsHeading.innerHTML = 'Titles';
    firstDetailsColumn.appendChild(firstDetailsHeading);
    // let firstDetailsList = document.createElement('ul');
    titles.forEach((title) => {
        let li = document.createElement('p');
        li.style.fontSize = '1.6rem';
        li.innerHTML = title[0] + ' ' + title[1];
        firstDetailsColumn.appendChild(li);
    })

    moreDetailsContainer.appendChild(firstDetailsColumn);
    container.appendChild(moreDetailsContainer);

    // secondDetailsColumn
    let secondDetailsColumn = document.createElement('div');
    secondDetailsColumn.classList.add('col-1-of-3');
    secondDetailsColumn.id = 'text-align-left';
    let secondDetailsHeading = document.createElement('h3');
    secondDetailsHeading.style.fontSize = '2.5rem';
    secondDetailsHeading.innerHTML = 'Skills';
    secondDetailsColumn.appendChild(secondDetailsHeading);
    skills.forEach((skill) => {
        let li = document.createElement('p');
        li.style.fontSize = '1.6rem';
        li.innerHTML = `✅ ${skill}`;
        secondDetailsColumn.appendChild(li);
    })

    moreDetailsContainer.appendChild(secondDetailsColumn);
    container.appendChild(moreDetailsContainer);

    // thirdDetailsColumn
    let thirdDetailsColumn = document.createElement('div');
    thirdDetailsColumn.classList.add('col-1-of-3');
    thirdDetailsColumn.id = 'text-align-left';
    let thirdDetailsHeading = document.createElement('h3');
    thirdDetailsHeading.style.fontSize = '2.5rem';
    thirdDetailsHeading.innerHTML = 'Qualifications';
    thirdDetailsColumn.appendChild(thirdDetailsHeading);
    qualifications.forEach((qualification) => {
        let li = document.createElement('p');
        li.style.fontSize = '1.6rem';
        li.innerHTML = qualification;
        thirdDetailsColumn.appendChild(li);
    })

    moreDetailsContainer.appendChild(thirdDetailsColumn);
    container.appendChild(moreDetailsContainer);
}

// Keywords
{
    const keywords = asabenehChallenges2020.keywords;
    const keywordsContainer = document.createElement('div');
    keywordsContainer.classList.add('row');
    const keywordsHeading = document.createElement('h3');
    keywordsHeading.classList.add('keywords-heading');
    keywordsHeading.innerHTML = 'Keywords';
    keywordsContainer.appendChild(keywordsHeading);

    let keywordContainer = document.createElement('div');
    keywordContainer.classList.add('keyword-container');


    // Keyword
    keywords.forEach((keyword) => {
        const randomColor = '#'  + Math.random().toString(16).substring(2,8);
        const keywordElement = document.createElement('p');
        keywordElement.classList.add('keyword');
        keywordElement.innerHTML = `# ${keyword}`;
        keywordElement.style.backgroundColor = randomColor;
        keywordContainer.appendChild(keywordElement);
    })

    keywordsContainer.appendChild(keywordContainer);
    container.appendChild(keywordsContainer);
}




