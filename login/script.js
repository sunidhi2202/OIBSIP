// script.js
let users = [];

// Register event listener for register form
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        users.push({ username, password });
        alert('User registered successfully!');
        window.location.href = 'index.html';
    } else {
        alert('Passwords do not match!');
    }
});

// Register event listener for login form
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            window.localStorage.setItem('loggedInUser', username);
            window.location.href = 'secured.html';
            return;
        }
    }

    alert('Invalid username or password!');
});

// Check if user is logged in
if (window.localStorage.getItem('loggedInUser')) {
    window.location.href = 'secured.html';
}

// Secured page logic
if (window.location.href.includes('secured.html')) {
    if (!window.localStorage.getItem('loggedInUser')) {
        window.location.href = 'index.html';
    } else {
        document.body.innerHTML += `<p>Welcome, ${window.localStorage.getItem('loggedInUser')}!</p>`;
    }
}