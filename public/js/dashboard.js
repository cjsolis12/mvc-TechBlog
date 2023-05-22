const createNewBlog = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blogTitle').value.trim();
    const content = document.querySelector('#blogContent').value.trim();

    console.log(title, content)
}

document.querySelector('#newPostBtn').addEventListener('click', createNewBlog)

//   // Get the modal element
//   const modal = document.getElementById('exampleModal');

//   // Get the button that triggers the modal
//   const button = document.querySelector('[data-bs-target="#exampleModal"]');

//   // Add a click event listener to the button
//   button.addEventListener('click', function () {
//     // Show the modal by adding the 'show' class
//     modal.classList.add('show');
//     modal.style.display = 'block';
//     modal.removeAttribute('aria-hidden');
//   });

//   // Hide the modal when the close button is clicked
//   const closeButton = modal.querySelector('.btn-close');
//   closeButton.addEventListener('click', function () {
//     modal.classList.remove('show');
//     modal.style.display = 'none';
//     modal.setAttribute('aria-hidden', 'true');
//   });