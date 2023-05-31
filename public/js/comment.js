const createNewComment = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#blogText').value.trim();

    if (text) {
        const response = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        if (response.ok) {
            window.location.replace('/homepage');
        } else {
            alert('Sorry could not make a comment')
        }
    }
}

document.querySelector('#newCommentBtn').addEventListener('click', createNewComment)


// for all buttons to create a new blogpost
document.querySelectorAll('.commentBtn').forEach((button) => {
    button.addEventListener('click', function () {
        const postId = this.dataset.id
        console.log('Post ID:', postId);
        $('#commentModal' + postId).modal('show');
    })
})
