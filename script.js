var form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    // Simple form validation
    if (!name || !email || !message) {
        alert('Please fill out all fields');
        return;
    }
    // Simulate sending data
    alert("Message sent by ".concat(name));
    form.reset();
});
