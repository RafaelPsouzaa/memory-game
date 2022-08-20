const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');

const validarInput = (event)=>{
    console.log(event.target);
}

input.addEventListener('input',validarInput);