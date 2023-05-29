const createNewComment = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#blogText').value.trim();
    
    if(text){
        const response = await fetch ('api/comments', {
            method: 'POST',
            body: JSON.stringify({text}),
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

document.querySelector('#newCommentBtn').addEventListener('click', createNewComment)

document.querySelector('#commentBtn').addEventListener('click', function(){
// Show the comment modal
$('#commentModal').modal('show');
})