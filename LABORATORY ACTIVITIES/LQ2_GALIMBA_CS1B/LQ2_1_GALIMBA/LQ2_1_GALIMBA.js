// Prompt for password
let passInput = prompt("Enter your password: ");
// Prompt for username
let userInput = prompt("Enter your username: ");
// Predefined correct password
let validPass = "password";

// Check password
if (passInput!== validPass) {
    alert(Maybe username or password is invalid or does not match.);
} else {
    alert(Welcome ${userInput});
}