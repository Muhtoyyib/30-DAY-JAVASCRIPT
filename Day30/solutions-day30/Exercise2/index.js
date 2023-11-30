let form = document.getElementById('form');
let submit = document.getElementById('submit');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const fname = document.getElementById('fname').value;
    const fnameElement = document.getElementById('fname');

    const lname = document.getElementById('lname').value;
    const lnameElement = document.getElementById('lname');

    const email = document.getElementById('email').value;
    const emailElement = document.getElementById('email');

    const password = document.getElementById('password').value;
    const passwordElement = document.getElementById('password');

    const tel = document.getElementById('tel').value;
    const telElement = document.getElementById('tel');

    const bio = document.getElementById('bio').value;
    const bioElement = document.getElementById('bio');

    // REGEX
    const nameRegex = /^[a-zA-Z]{3,16}$/;
    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^[a-zA-Z0-9@-]{6,20}$/;
    const telRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    const bioRegex = /^[a-z0-9_-]{8,50}$/;


    // Error Element
    let fnameError = document.getElementById('fnameE');
    let lnameError = document.getElementById('lnameE');
    let emailError = document.getElementById('emailE');
    let passwordError = document.getElementById('passwordE');
    let telError = document.getElementById('telE');
    let bioError = document.getElementById('bioE');

    if(nameRegex.test(fname) && nameRegex.test(lname) && emailRegex.test(email) && passwordRegex.test(password) && telRegex.test(tel) && bioRegex.test(bio)){
        form.reset();
        alert('Your message has been sent!');
    } else {
         // First Name VALIDATION
        if(nameRegex.test(fname)){
            fnameElement.classList.remove('error');
            fnameElement.classList.add('valid');
            fnameError.innerHTML = '';
        } else if(!nameRegex.test(fname)) {
            fnameElement.classList.add('error');
            fnameError.innerHTML = 'First name must be alphabetic and contain 3-16 character';
        }

        // LAST NAME VALIDATION
        if(nameRegex.test(lname)){
            lnameElement.classList.remove('error');
            lnameElement.classList.add('valid');
            lnameError.innerHTML = '';
        } else if(!nameRegex.test(lname)) {
            lnameElement.classList.add('error');
            lnameError.innerHTML = 'Last name must be alphabetic and contain 3-16 character';
        }

        // EMAIL VALIDATION
        if(emailRegex.test(email)){
            emailElement.classList.remove('error');
            emailElement.classList.add('valid');
            emailError.innerHTML = '';
        } else if(!emailRegex.test(email)) {
            emailElement.classList.add('error');
            emailError.innerHTML = `Email must be a valid address, e.g example@example.com`
        }

        // PASSWORD VALIDATION
        if(passwordRegex.test(password)){
            passwordElement.classList.remove('error');
            passwordElement.classList.add('valid');
            passwordError.innerHTML = '';
        } else if(!passwordRegex.test(password)) {
            passwordElement.classList.add('error');
            passwordError.innerHTML = `Password must be alphanumeric(@, and - are also allowed) and between 6-20 characters`
        }

        // TELEPHONE VALIDATION
        if(telRegex.test(tel)){
            telElement.classList.remove('error');
            telElement.classList.add('valid');
            telError.innerHTML = '';
        } else if(!telRegex.test(tel)){
            telElement.classList.add('error');
            telError.innerHTML = 'A valid Telephone number (11 digits and 333-333-3334)';
        }

        // BIO VALIDATION
        if(bioRegex.test(bio)){
            bioElement.classList.remove('error');
            bioElement.classList.add('valid');
            bioError.innerHTML = '';
        } else if(!bioRegex.test(bio)){
            bioElement.classList.add('error');
            bioError.innerHTML = 'bio must contain only lowercase letters , underscores, hyphens, and be 8-50 characters';
        }
    }

})