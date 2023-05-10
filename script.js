const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using constraint API
    isValid = form.checkValidity();
    
    if (!isValid) {
        message.textContent = 'Please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see if passwords match
    
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        // Style main message for success
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const userObj = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(userObj);
}

function processFormData(e) {
    e.preventDefault();
    // validate form
    validateForm();
    // Submit Data if is valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);