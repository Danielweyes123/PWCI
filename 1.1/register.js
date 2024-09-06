document.getElementById('registerForm').addEventListener('submit', function(event) {
    let missingFields = 0; 

    function validateField(field) {
        if (field.value.trim() === '') {
            field.style.borderColor = "red";
            missingFields++;
            return false;
        } else {
            field.style.borderColor = ""; 
            return true;
        }
    }

    document.getElementById('emailError').textContent = "";
    document.getElementById('passwordError').textContent = "";

    const fullname = document.getElementById('fullname');
    validateField(fullname);

    const username = document.getElementById('username');
    validateField(username);

    const email = document.getElementById('email');
    if (!validateField(email) || !validateEmail(email.value)) {
        email.style.borderColor = "red";
        missingFields++;
        document.getElementById('emailError').textContent = "Please enter a valid email.";
    } else {
        email.style.borderColor = "";
    }

    const password = document.getElementById('password');
    if (!validateField(password) || !validatePassword(password.value)) {
        password.style.borderColor = "red";
        missingFields++;
        document.getElementById('passwordError').textContent = "The password must be at least 8 characters, a capital letter, a number, and a special character.";
    } else {
        password.style.borderColor = "";
    }

    const birthdate = document.getElementById('birthdate');
    validateField(birthdate);

    const genderMale = document.getElementById('male');
    const genderFemale = document.getElementById('female');
    if (!genderMale.checked && !genderFemale.checked) {
        missingFields++;
        genderMale.parentElement.style.color = "red";
    } else {
        genderMale.parentElement.style.color = ""; 
    }

    const accountTypeTeacher = document.getElementById('teacher');
    const accountTypeStudent = document.getElementById('student');
    if (!accountTypeTeacher.checked && !accountTypeStudent.checked) {
        missingFields++;
        accountTypeTeacher.parentElement.style.color = "red";
    } else {
        accountTypeTeacher.parentElement.style.color = "";
    }


    if (missingFields > 0) {
        alert("Please complete all fields before submitting.");
        event.preventDefault();
    }
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('avatar-preview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
