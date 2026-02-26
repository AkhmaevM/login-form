const profileName = document.querySelector('.profile__name');
const profileEmail = document.querySelector('.profile__email');
const profilePhone = document.querySelector('.profile__phone');

const registerBtn = document.querySelector('.register__btn');
const logutBtn = document.querySelector('.login__btn');

window.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();
    profileName.textContent = 'user name: ' + window.localStorage.getItem('userName');
    profileEmail.textContent = 'user email: ' + window.localStorage.getItem('userEmail');
    profilePhone.textContent = 'user phone: ' + window.localStorage.getItem('userPhone');

});


registerBtn.onclick = () =>{
    window.location.href = '../index.html';
};

logutBtn.onclick = ()=>{
    window.location.href = '../pages/login.html';
};


console.log(localStorage);