
function signupToggle(){
    let container = document.querySelector('.info');
    container.classList.toggle('active');
    let popup = document.querySelector('.signup-form');
    popup.classList.toggle('active');
}

function loginToggle(){
    let container = document.querySelector('.info');
    container.classList.toggle('active');
    let popup = document.querySelector('.login-form');
    popup.classList.toggle('active');
}