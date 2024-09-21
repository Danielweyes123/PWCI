const buyCourseBtn = document.getElementById('buyCourseBtn');
const modal = document.getElementById('paymentModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const completePurchaseBtn = document.getElementById('completePurchaseBtn');
const paymentMethod = document.getElementById('paymentMethod');
const cardDetails = document.getElementById('cardDetails');

const cardNumber = document.getElementById('cardNumber');
const cardName = document.getElementById('cardName');
const cardExpiry = document.getElementById('cardExpiry');
const cardCVC = document.getElementById('cardCVC');

buyCourseBtn.onclick = function() {
    modal.style.display = "block";
};

closeModalBtn.onclick = function() {
    modal.style.display = "none";
};

paymentMethod.onchange = function() {
    if (paymentMethod.value === "card") {
        cardDetails.classList.remove("hidden");
    } else {
        cardDetails.classList.add("hidden");
    }
};

function validateCardDetails() {
    const cardNumberRegex = /^[0-9]{16}$/;
    const cardExpiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;  
    const cardCVCRegex = /^[0-9]{3}$/;

    if (!cardNumberRegex.test(cardNumber.value.replace(/\s/g, ''))) {
        cardNumber.style.borderColor = "red";
        alert("Número de tarjeta inválido. Debe tener 16 dígitos.");
        return false;
    }else {
        cardNumber.style.borderColor = "";
    }

    if (cardName.value.trim() === "") {
        cardName.style.borderColor = "red";
        alert("Por favor, ingrese el nombre en la tarjeta.");
        return false;
    }else {
        cardName.style.borderColor = "";
    }

    if (!cardExpiryRegex.test(cardExpiry.value)) {
        cardExpiry.style.borderColor = "red";
        alert("Fecha de expiración inválida. Use el formato MM/AA.");
        return false;
    }else {
        cardExpiry.style.borderColor = "";
    }

    if (!cardCVCRegex.test(cardCVC.value)) {
        cardCVC.style.borderColor = "red";
        alert("CVC inválido. Debe tener 3 dígitos.");
        return false;
    }else {
        cardCVC.style.borderColor = "";
    }

    return true;
}

completePurchaseBtn.onclick = function() {
    if (paymentMethod.value === "none") {
        paymentMethod.style.borderColor = "red";
        alert("Por favor, seleccione un método de pago.");
    } else if (paymentMethod.value === "paypal") {
        alert("Pago realizado con Paypal. Gracias por su compra.");
        paymentMethod.style.borderColor = "";
            modal.style.display = "none"; 
    } else if (paymentMethod.value === "card") {
        if (validateCardDetails()) {
            alert("Pago realizado con tarjeta. Gracias por su compra.");
            modal.style.display = "none"; 
        }
    }
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
