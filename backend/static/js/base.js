document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const messageBox = document.getElementById('message');
    
    if (password !== confirmPassword) {
        messageBox.textContent = 'Passwords do not match!';
    } else {
        messageBox.textContent = '';
        // Here you can add code to submit the form data to your server
        console.log('Form submitted successfully!');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        
        messageBox.style.color = 'green';
        messageBox.textContent = 'Form submitted successfully!';
    }
});
