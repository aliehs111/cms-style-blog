document.addEventListener("DOMContentLoaded", () => {
  // This code will run when the DOM is fully loaded
  document
    .querySelector("#create-post-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const title = document.querySelector("#post-title").value;
      const content = document.querySelector("#post-content").value;

      const newPostData = {
        title,
        content,
      };

      try {
        const response = await fetch("/api/posts", {
          method: "POST",
          credentials: "include",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPostData),
        });

        if (response.ok) {
          const data = await response.json();
          window.location.replace("/dashboard");
          // Redirect to a new page or perform other actions
        } else {
          showErrorMsg("Error creating post. Try again.");
        }
      } catch (error) {
        showErrorMsg("Error creating post. Try again.");
      }
    });
});
