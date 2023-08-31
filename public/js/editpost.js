
const editPostForm = document.querySelector("#edit-post-form");
const postID = document.querySelector("#post-id").value;

  
editPostForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-title").value;
  const content = document.querySelector("#post-content").value;

  const editPostData = {
    title,
    content,
  };
  try {
    const response = await fetch(`/api/posts/${postID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPostData),
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

document.querySelector("#del_post").addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(`/api/posts/${postID}`, {
      method: "DELETE",
    });

    if (response.ok) {
      window.location.replace("/dashboard");
      // Redirect to a new page or perform other actions
    } else {
      showErrorMsg("Error deleting post. Try again.");
    }
  } catch (error) {
    showErrorMsg("Error deleting post. Try again.");
  }
})
