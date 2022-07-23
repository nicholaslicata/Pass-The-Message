// Global Variables
const input = document.querySelector('.input');
const form = document.querySelector('.form');
const submit = document.querySelector('.submit');
const message = document.querySelector('.message');

// Event Listeners
form.addEventListener('submit', function(e) {
    if (input.validity.valueMissing) {
        e.preventDefault();
        message.textContent = 'Please Enter A Message!';
        message.style.color = 'red';
    } else if (input.validity.valid) {
        e.preventDefault();
        newMessage();
        message.style.color = 'white';
    }
})

function newMessage() {
    message.textContent = input.value;
    input.value = '';
}

