const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

let secondaryHeading = document.getElementById('secondaryHeading');
secondaryHeading.innerHTML = `Total number of countries: ${countries.length}`;
let result_summary = document.getElementById('result-summary');

let search = document.getElementById('search');

let startingWord = document.getElementById('starting-word');
let searchWithAnyWord = document.getElementById('any-word');
let az = document.getElementById('a-z');

startingWord.addEventListener('click', () => {
    searchWithAnyWord.classList.remove('active');
    startingWord.classList.add('active');
    az.classList.remove('active');

    let row = document.getElementById('row');
    row.innerHTML = '';

   let searchInput = document.getElementById('search');
   result_summary.innerHTML = '';

   searchInput.addEventListener('change', (event) => {
    row.innerHTML = '';

    let searchField = event.target.value.toLowerCase();

    let filteredCountries = countries.filter((country) => {
        return country.toLowerCase().startsWith(searchField);
    })

    if(filteredCountries.length == 0){
        let result = document.createElement('h2');
        result.innerHTML = `There are no countries that contains with <span style="color: red;">${searchField.toUpperCase()}</span>`;

        result_summary.innerHTML = `Countries that contains with <span style="color: red;">${searchField.toUpperCase()}</span> are 
        <span style="color: #63e6be;">${filteredCountries.length}</span>`;

        row.appendChild(result);
    } else {
        filteredCountries.forEach((country) => {

            let countryDiv = document.createElement('div');
            countryDiv.classList.add('col-1-of-6');
    
            let card = document.createElement('div');
            card.classList.add('card');
            
            let cardText = document.createElement('h2');
            cardText.classList.add('card--text');
            cardText.textContent = country;
    
            result_summary.innerHTML = `Countries that starts with <span style="color: red;">${searchField.toUpperCase()}</span> are 
            <span style="color: #63e6be;">${filteredCountries.length}</span>`;
            card.appendChild(cardText);
            countryDiv.appendChild(card);
            row.appendChild(countryDiv);
        })
    }

    searchField.value = "";
    })
})


searchWithAnyWord.addEventListener('click', () => {
    startingWord.classList.remove('active');
    az.classList.remove('active');
    searchWithAnyWord.classList.add('active');

    let row = document.getElementById('row');
    row.innerHTML = '';
        
    let searchInput = document.getElementById('search');
    let result_summary = document.getElementById('result-summary');
    result_summary.innerHTML = '';

    searchInput.addEventListener('change', (event) => {
        row.innerHTML = '';
        let searchField = event.target.value.toLowerCase();

        

        let filteredCountries = countries.filter((country) => {
            return country.toLowerCase().includes(searchField);
        })

        if(filteredCountries.length == 0){
            let result = document.createElement('h2');
            result.innerHTML = `There are no countries that contains with <span style="color: red;">${searchField.toUpperCase()}</span>`;

            result_summary.innerHTML = `Countries that contains with <span style="color: red;">${searchField.toUpperCase()}</span> are 
            <span style="color: #63e6be;">${filteredCountries.length}</span>`;

            row.appendChild(result);
        } else{

            filteredCountries.forEach((country) => {

                let countryDiv = document.createElement('div');
                countryDiv.classList.add('col-1-of-6');
    
                let card = document.createElement('div');
                card.classList.add('card');
                
                let cardText = document.createElement('h2');
                cardText.classList.add('card--text');
                cardText.textContent = country;
    
                result_summary.innerHTML = `Countries that contains with <span style="color: red;">${searchField.toUpperCase()}</span> are 
                <span style="color: #63e6be;">${filteredCountries.length}</span>`;
                card.appendChild(cardText);
                countryDiv.appendChild(card);
                row.appendChild(countryDiv);
            })
        }


        searchField.value = "";
    })
})
 
az.addEventListener('click', () => {
    startingWord.classList.remove('active');
    searchWithAnyWord.classList.remove('active');
    az.classList.add('active');
    result_summary.innerHTML = '';

    let row = document.getElementById('row');
    row.innerHTML = '';

    let sortedCountries = countries.sort();


    sortedCountries.forEach((country) => {

        let countryDiv = document.createElement('div');
        countryDiv.classList.add('col-1-of-6');

        let card = document.createElement('div');
        card.classList.add('card');
        
        let cardText = document.createElement('h2');
        cardText.classList.add('card--text');
        cardText.textContent = country;

        card.appendChild(cardText);
        countryDiv.appendChild(card);
        row.appendChild(countryDiv);
    })
})
