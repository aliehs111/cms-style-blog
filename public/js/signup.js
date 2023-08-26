const signupFormHandler = async (event) => {
  
  event.preventDefault();


  const user_name = document.querySelector("#signup_username").value.trim();
  const password = document.querySelector("#signup_password").value.trim();

  if (user_name && password) {
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
    }
   
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ user_name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Error occurred. Try again");
    }
  }
};

const loginFormHandler = async (event) => {

  event.preventDefault();


  const user_name = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (user_name && password) {
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
    }
 
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ user_name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to log in");
    }
  }
};
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
