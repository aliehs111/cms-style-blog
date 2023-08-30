const withAuth = require("../../utils/auth");

const editPostForm = document.querySelector("#edit_post");
const postID = editPostForm.getAttribute("data-post-id");


  // Show the "Edit My Post" button
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.id = "goto_edit_post";
  editButton.textContent = "Edit My Post";
  editButton.addEventListener("click", () => {
    // Redirect to the edit page or perform other actions
    window.location.replace(`/edit-post/${postID}`); // Replace postID with the actual post ID
    // Replace postID with the actual post ID
  });
  editPostForm.appendChild(editButton);


editPostForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
  const content = document.querySelector("#post-content").value;

  const newPostData = {
    title,
    content,
  };
  try {
    const response = await fetch("/api/posts", {
      method: "PUT",
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
      showErrorMsg("Error editing post. Try again.");
    }
  } catch (error) {
    showErrorMsg("Error editing post. Try again.");
  }
});
