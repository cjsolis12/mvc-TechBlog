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
            document.location.replace('/');
        } else {
            alert( `Failed to create new post`)
        }
    }
}

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

document.querySelector('#newPostBtn').addEventListener('click', createNewBlog)

document.querySelectorAll('.fa-trash-can').forEach((button) => { 
    button.addEventListener('click', deleteBlog); 
});