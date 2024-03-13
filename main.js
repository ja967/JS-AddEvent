// Function to validate the username
function validateUsername(username) {
    return /^[a-zA-Z0-9_]{3,}$/.test(username);
}

// Function to validate the email
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the username
        if (!validateUsername(usernameInput.value)) {
            usernameError.textContent = 'Username must be at least 3 characters long and can only contain letters, numbers, and underscores.';
        } else {
            usernameError.textContent = '';
        }

        // Validate the email
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Invalid email address.';
        } else {
            emailError.textContent = '';
        }
    });

    // Add event listeners for input fields
    usernameInput.addEventListener('input', function() {
        if (validateUsername(usernameInput.value)) {
            usernameError.textContent = '';
        } else {
            usernameError.textContent = 'Username must be at least 3 characters long and can only contain letters, numbers, and underscores.';
        }
    });

    emailInput.addEventListener('input', function() {
        if (validateEmail(emailInput.value)) {
            emailError.textContent = '';
        } else {
            emailError.textContent = 'Invalid email address.';
        }
    });
});
