const logout = async () => {
       // directing the logout route in the api/users/logout.js file
      const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log out");
      }
    };

    document
  .querySelector("#logout")
  .addEventListener("click", logout);

  