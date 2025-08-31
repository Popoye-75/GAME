let loginButton = document.getElementById("loginInterface"); // Select the login button using id
let signUpButton = document.getElementById("signInterface"); // Select the sign up button or link using id

const showLogin = () => { // Function for shows the login interface and hide signup 
    loginButton.style.display = "flex"; // Enable login interface
    signUpButton.style.display = "none"; // Disable signup interface
}
const showSignUp = () => { // Function for shows the signup interface and hide login
    signUpButton.style.display = "flex"; // Enable signup interface
    loginButton.style.display = "none";  // Disable login interface
}
const trialGame = () => { // Function for redirect on another game web
    location = ("http://127.0.0.1:5500/numberhunt.html"); // When user press the playnow button this will redirect to game web
}
const generateRandom = () => {
    let random = Math.floor(Math.random() * 100);
    return random;
}
