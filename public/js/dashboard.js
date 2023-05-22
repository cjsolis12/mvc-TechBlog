const createNewBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blogTitle').value.trim();
    const content = document.querySelector('#blogText').value.trim();

    console.log(title, content)

    if(title && content){
        const response = await fetch (`api/blogposts/`, {
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

document.querySelector('#newPostBtn').addEventListener('click', createNewBlog)
