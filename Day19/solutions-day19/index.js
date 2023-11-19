// Exercises: Level 1

{
    function getInfo(fname, lname){
    let firsrtName = fname;
    let lastName = lname;

    function getFullName(){
        return `${firsrtName} ${lastName}`;
    }

    return getFullName;
    }
}

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

// Repeated Exercise