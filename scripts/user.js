const userName = document.querySelector('.user__name');
const userEmail = document.querySelector('.user__name');
const userPhone = document.querySelector('.user__phone');


window.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();
    userName.textContent = window.localStorage.getItem('userName');
    userEmail.textContent = window.localStorage.getItem('userEmail');
    userPhone.textContent = window.localStorage.getItem('userNumber');

})

console.log(localStorage);