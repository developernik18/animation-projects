document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Simulate login (replace this with your authentication logic)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if username and password are not empty
    if (username && password) {
      alert('Login successful!');
    } else {
      alert('Please enter valid credentials.');
    }
  });
  