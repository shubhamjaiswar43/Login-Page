let closeEye = document.querySelector(`#closeEye`);
let openEye = document.querySelector(`#openEye`);
let password = document.querySelector(`#password`);
closeEye.addEventListener(`click`, () => {
    closeEye.style.display = `none`;
    openEye.style.display = `inline`;
    password.setAttribute(`type`, `text`);
})
openEye.addEventListener(`click`, () => {
    closeEye.style.display = `inline`;
    openEye.style.display = `none`;
    password.setAttribute(`type`, `password`);
})