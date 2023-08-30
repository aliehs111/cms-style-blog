document.addEventListener("DOMContentLoaded", () => {
  // This code will run when the DOM is fully loaded
  document
    .querySelector("#create-comment-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      // const title = document.querySelector("comment-title").value;
      const content = document.querySelector("#comment-content").value;
      const post_id = document.querySelector("#post-id").value;

      const newCommentData = {
        content,
        post_id,
      };

      try {
        const response = await fetch("/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCommentData),
        });

        if (response.ok) {
          const data = await response.json();
          window.location.replace(`/post/${post_id}`);
          // Redirect to a new page or perform other actions
        } else {
          showErrorMsg("Error creating comment. Try again.");
        }
      } catch (error) {
        showErrorMsg("Error creating comment. Try again.");
        console.error(error);
      }
    });
});
