let regex = /\W/g;

function validateForm() {
    let usernameValue = document.loginForm.username.value;
    let passwordValue = document.loginForm.password.value;

    if (passwordValue != 1234) {
        window.alert("Incorrect password!");
        return false;
    } else if (regex.test(usernameValue)) {
        window.alert("Please write valid username.");
        return false;
    } else {
        // window.alert("Valid input.");
    };
}