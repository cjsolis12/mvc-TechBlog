const createNewComment = async (postId) => {
    const text = document.querySelector('#commentText').value.trim();

    if (text) {
        const response = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({ text, postId }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        if (response.ok) {
            window.location.replace('/');
        } else {
            alert('Sorry could not make a comment')
        }
    }
}

// Event listener for the commentSubmit button
document.querySelectorAll('.commentBtn').forEach((button) => {
    button.addEventListener('click', function () {
      const postId = this.dataset.id;
      console.log('Post ID:', postId);
      $('#commentModal' + postId).modal('show');
  
      // Event listener for the commentSubmit button inside the modal
      const commentSubmitBtn = document.querySelector(`#commentSubmit[data-id="${postId}"]`);
      commentSubmitBtn.addEventListener('click', function () {
        createNewComment(postId);
      });
    });
  });





