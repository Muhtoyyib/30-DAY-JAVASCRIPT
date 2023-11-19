// Exercises: Level 1

function personInfo(fname, lname){
    let firsrtName = fname;
    let lastName = lname;

    function getFullName(){
        let fullName = `${firsrtName} ${lastName}`;

        return fullName
    }

    return { fullName: getFullName() }
}

let innerfunc = personInfo('Akande', 'Toheeb');

console.log(innerfunc.fullName);


// Exercises: Level 2

function getInfo(fname, lname, age, contact, address, occupation, salary){
    let firsrtName = fname;
    let lastName = lname;
    let age = age;
    let contact = contact;
    let address = address;
    let occupation = occupation;
    let salary = salary

    function getFullName(){
        return `${firsrtName} ${lastName}`;
    }

    function getContactInfo(){
        return `${contact} ${address}`
    }

    function getJobInfo(){
        return `${occupation}: ${salary}`
    }

    return {
        fullname: getFullName(), 
        contactInfo: getContactInfo(),
        jobInfo: getJobInfo()
    };
}

// Exercises: Level 3

// Check day17 to try it out