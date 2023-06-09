const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username_signup").value.trim();
  const password = document.querySelector("#password_signup").value.trim();

  console.log(username, password);
  if (username && password) {
    const response = await fetch("/api/user/", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
      alert("Account Created!");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#registerBtn")
  .addEventListener("click", signupFormHandler);
