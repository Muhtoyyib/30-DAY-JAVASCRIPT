const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Exercises: Level 1

// 1
const getCountry = async () => {
    let countries = [];
    try{
        const response = await fetch(countriesAPI).then(response => response.json());
        countries = response;
    } catch(err){
        console.error(`${err.name}: ${err.messase}`);
    }

    let usableCountriesData = countries.map((country) => {
        return [`name: ${country.name}`, `capital: ${country.capital}`, `languages: ${country.languages}`, 
        `population: ${country.population}`, `area: ${country.area}`];
    });

    console.table(usableCountriesData);

    return usableCountriesData;
}

getCountry();

// Exercises: Level 2

// catsAPI not working

const getCat = async () => {
    let cats = [];
    try{
        const response = await fetch(catsAPI).then(response => response.json());
        cats = response;

    } catch(err){
        console.error(`${err.name}: ${err.messase}`);
    }

    let usableCatsData = cats.map((cat) => {
        return [`catName: ${cat.name}`];
    });

    console.log(usableCatsData);

    return usableCatsData;
}

getCat();

// Exercises: Level 3

// 1

// catsAPI not working

// 2

const largestCountries = async (num) => {
    let countries = [];
    try{
        const response = await fetch(countriesAPI).then(response => response.json());
        countries = response;
    } catch(err){
        console.error(`${err.name}: ${err.messase}`);
    }

    countries.sort((a, b) => {
        return b.population - a.population
    })

    const largestCountries = countries.slice(0, num);


    console.log(largestCountries);
}

largestCountries(10);

// 3

// No entry for officail language in the data recieved

const countUniqueOfficialLanguages = async () => {
    let countries = [];
    try{
        const response = await fetch(countriesAPI).then(response => response.json());
        countries = response;
    } catch(err){
        console.error(`${err.name}: ${err.messase}`);
    } 
    let languages = countries.map(country => {
        return {countryName: country.name , language: country.languages};
    });

    return languages;
}

countUniqueOfficialLanguages();