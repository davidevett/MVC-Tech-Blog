const signup = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
  const response = await fetch("/api/users/signup", {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: { "Content-Type": "application/json" },
  });


  if (response.ok) {
    //const userData = await response.json();
    document.location.replace(`/`);
    //TODO send new useres to welcome page
  } else {
    alert(response.statusText);
  }
}
};
document.querySelector("#signup").addEventListener("submit", signup);
