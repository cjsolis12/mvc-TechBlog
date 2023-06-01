// function for creating new blog
const createNewBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blogTitle').value.trim();
    const content = document.querySelector('#blogText').value.trim();

    if(title && content){
        const response = await fetch (`api/blogs`, {
            method: 'POST',
            body: JSON.stringify({title, content }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            alert( `Failed to create new post`)
        }
    }
}
// function for deleting a blog
const deleteBlog = async (event) => {
    const blogPostId = event.target.dataset.id;
    const response = await fetch (`api/blogs/${blogPostId}`, {
        method: 'DELETE',
    });
    if (response.ok){
        location.reload();
    } else {
        elert('Failed to delete blog post')
    }
}

// Creating a new post
document.querySelector('#newPostBtn').addEventListener('click', createNewBlog)

// delete button icon
document.querySelectorAll('.fa-trash-can').forEach((button) => { 
    button.addEventListener('click', deleteBlog); 
});

//updating a blogpost
document.querySelectorAll('.update').forEach((button) => {
    button.addEventListener('click', async (event) => {
        const blogPostId = event.target.getAttribute('data-id');
        const updateTitle = document.querySelector(`#updateTitle${blogPostId}`).value.trim();
        const updateContent = document.querySelector(`#updateContent${blogPostId}`).value.trim();

        if ( updateTitle && updateContent) {
            const response = await fetch(`api/blogs/${blogPostId}` , {
                method: 'PUT',
                body: JSON.stringify({ title: updateTitle, content: updateContent}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(response.ok) {
                document.location.reload();
            } else {
                alert('Failed to update blog post')
            }
        }
    })
});