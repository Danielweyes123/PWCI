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

    const username = document.getElementById('username');
    validateField(username);

    const password = document.getElementById('password');
    validateField(password);

    if (missingFields > 0) {
        alert("PLEASE_COMPLETE_ALL_FIELDS_BEFORE_SUBMITTING.");
        event.preventDefault(); 
    }
});
