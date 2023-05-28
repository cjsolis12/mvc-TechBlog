const createNewComment = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#commentContent').value.trim();
    
    if(content){
        const response = await fetch ('api/comments', {
            method: 'POST',
            body: JSOn.stringify({content}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
        if(response.ok){
            window.location.replace('/');
        } else {
            alert('Sorry could not make a comment')
        }
    }
}

document.querySelector('#newComment').addEventListener('click', createNewComment)