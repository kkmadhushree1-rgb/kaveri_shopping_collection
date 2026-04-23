function loginUser(event) {
    event.preventDefault();
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;
    if (user === "madhu" && pass === "143") {
        document.getElementById("msg").innerText = "login successful";
        window.location.href = "home.html";

    }
    else {
        document.getElementById("msg").innerText = "invalid login";
    }
    console.log(user, pass);
}
