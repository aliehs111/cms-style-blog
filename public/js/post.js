document.querySelector('#create-post-form').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value;
    const content = document.querySelector('#post-content').value;
  
    const newPostData = {
      title,
      content,
    };
  
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPostData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('New post created:', data);
        // Redirect to a new page or perform other actions
      } else {
        console.error('Error creating post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  });
  