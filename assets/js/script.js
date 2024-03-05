console.log('Ghosty says Hellooooo!');

function changeTheme() {
// let variable querySelector select body element in css then looks at css class list and selects dark-mode class
    let backgroundChange = document.querySelector("body");
    backgroundChange.classList.toggle("dark-mode");

    let colorSwap = document.querySelector(".el--1");
    colorSwap.classList.toggle("light-mode");

    let buttonChange = document.querySelector("button");
    buttonChange.classList.toggle("light-mode");

}

let button = document.querySelector(".toggle-theme");
button.addEventListener("click", changeTheme);