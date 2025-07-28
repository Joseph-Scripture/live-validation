
const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email + .error');
const country = document.querySelector('#country');
const countryError = document.querySelector('#country + .error');
const zip = document.querySelector('#zip');
const zipError = document.querySelector('#zip + .error');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#password + .error');
const passwordConfirm = document.querySelector('#password-confirm');
const passwordConfirmError = document.querySelector('#password-confirm + .error');
const successMessage = document.querySelector('#success-message');




email.addEventListener('input', (event) => {
    if (email.validity.valid) {
        
        emailError.textContent = ''; 
    } else {
      
        showEmailError();
    }
});

country.addEventListener('input', (event) => {
    if(country.validity.valid){
        countryError.textContent = '';
    } else {
        showCountryError();
    }
});

zip.addEventListener('input', (event) => {
    if(zip.validity.valid){
        zipError.textContent = '';
    } else {
        showZipError();
    }
});

password.addEventListener('input', (event) => {
    if (password.validity.valid) {
        passwordError.textContent = '';
    } else {
        showPasswordError();
    }
    
    validatePasswordConfirm();
});

passwordConfirm.addEventListener('input', (event) => {
    validatePasswordConfirm();
});




form.addEventListener('submit', (event) => {
    
    event.preventDefault();

   
    if (!email.validity.valid || !country.validity.valid || !zip.validity.valid || !password.validity.valid || password.value !== passwordConfirm.value) {
        successMessage.textContent = 'Please correct the errors before submitting.';
        successMessage.className = 'error';
        return;
    }

   
    successMessage.textContent = 'High five! 🙌 Form submitted successfully!';
    successMessage.className = 'success';
    form.reset(); 
});




function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'You need to enter an email address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email address.';
    } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
}

function showCountryError() {
    if(country.validity.valueMissing){
        countryError.textContent = 'You need to enter a country.';
    }
}

function showZipError() {
    if(zip.validity.valueMissing){
        zipError.textContent = 'You need to enter a postal code.';
    }
}

function showPasswordError() {
    if (password.validity.valueMissing) {
        passwordError.textContent = 'You need to enter a password.';
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Password must be at least ${password.minLength} characters.`;
    }
}

function validatePasswordConfirm() {
    if (passwordConfirm.value !== password.value) {
        passwordConfirm.setCustomValidity('Passwords do not match.');
        passwordConfirmError.textContent = 'Passwords do not match.';
    } else {
        passwordConfirm.setCustomValidity(''); 
        passwordConfirmError.textContent = '';
    }
}