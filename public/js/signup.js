const loginFormHandler = async (event) => {
    // TODO: Add a comment describing the functionality of this statement
    event.preventDefault();
  
    // TODO: Add a comment describing the functionality of these expressions
    const user_name = document.querySelector('#signup_username').value.trim();
    const password = document.querySelector('#signup_password').value.trim();
  
    if (email && password) {
      // TODO: Add a comment describing the functionality of this expression
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ user_name, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);