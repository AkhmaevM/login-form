const body = document.querySelector('.body');

const profile = document.querySelector('.profile');
const profileName = document.querySelector('.profile__name');
const profileEmail = document.querySelector('.profile__email');
const profilePhone = document.querySelector('.profile__phone');

const registerBtn = document.querySelector('.register__btn');
const logutBtn = document.querySelector('.login__btn');
const darkThemeBtn = document.querySelector('.dark__theme');
const lightThemeBtn = document.querySelector('.light__theme');

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    profileName.textContent = 'user name: ' + window.localStorage.getItem('userName');
    profileEmail.textContent = 'user email: ' + window.localStorage.getItem('userEmail');
    profilePhone.textContent = 'user phone: ' + window.localStorage.getItem('userPhone');

});


registerBtn.onclick = () => {
    window.location.href = '../index.html';
};

logutBtn.onclick = () => {
    window.location.href = '../pages/login.html';
};


console.log(localStorage);



darkThemeBtn.onclick = () => {
    body.style.backgroundColor = '#bb86fc'
    profile.style.backgroundColor = '#121212';
    profile.style.border = '2px solid #bb86fc';
    profileName.style.color = '#fff';
    profileEmail.style.color = '#fff';
    profilePhone.style.color = '#fff';


}

lightThemeBtn.onclick = () => {
    body.style.backgroundColor = '#6066ff'
    profile.style.backgroundColor = '#fff';
    profile.style.border = '2px solid #6066ff';
    profileName.style.color = '#252eff';
    profileEmail.style.color = '#252eff';
    profilePhone.style.color = '#252eff';

}
