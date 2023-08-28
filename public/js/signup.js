
const signupFormHandler = async (event) => {
  event.preventDefault();

  const user_name = document.querySelector("#signup_username").value.trim();
  const password = document.querySelector("#signup_password").value.trim();

  if (user_name && password) {
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
    }

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ user_name, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // After successful signup, perform login
        await login(user_name, password);
        document.location.replace("/dashboard");
        console.log("Success");
        alert("Success");
      } else {
        alert("Error occurred. Try again");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred. Try again");
    }
  }
};

const login = async (user_name, password) => {
  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ user_name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error("Failed to log in");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Failed to log in");
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

    await login(user_name, password);
    document.location.replace("/dashboard");
  }
};

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);
