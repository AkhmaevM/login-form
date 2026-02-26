const body = document.querySelector('.body');
const darkThemeBtn = document.querySelector('.dark__theme');
const lightThemeBtn = document.querySelector('.light__theme');
const formContainer = document.querySelector('.form');
const formHeader = document.querySelector('.form__header');
const formInput = document.querySelectorAll('.form__input');

const userName = document.querySelector('.user__name');
const userEmail = document.querySelector('.user__email');
const userPassword = document.querySelector('.user__password');
const userConfirmPassword = document.querySelector('.user__confirmPassword');

const toRegisterBtn = document.querySelector('.toRegister__btn');
const registerBtn = document.querySelector('.register__btn');
const loginBtn = document.querySelector('.login__btn');




toRegisterBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.href = "/index.html";
    console.log(e);
    console.log(window.location.href);
})


// registerBtn.addEventListener('click', (e) => {
//     e.preventDefault();

//     let emptyField = 0;

//     for (let i = 0; i < formInput.length; i++) {
//         if (formInput[i].value === '') {
//             emptyField += 1;
//         }
//     }

//     if (emptyField > 0) {
//         alert('Заполните все поля');

//     }

//     else {
//         window.localStorage.setItem('userName', userName.value);
//         window.localStorage.setItem('userEmail', userEmail.value);

//         if (userPassword.value === userConfirmPassword.value) {
//             window.localStorage.setItem('userPassoword', userPassword.value);
//         }

//         else {
//             alert('Введенные пароли не совпадают');
//         }

//         console.log(window.localStorage);

//         console.log(window.location);
//         window.location.href = '../pages/login.html';
//     }
// }
// )

console.log(window.localStorage);

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    
    console.log(window.localStorage.userName);
    console.log(window.localStorage.getItem('userName'));
    if(userName.value === window.localStorage.getItem('userName') && userPassword.value === window.localStorage.getItem('userPassword')){
        console.log('succes');
        window.location.href = './profile.html';
    }

    else{
        console.log('error');
        console.log(window.localStorage.getItem('userPassword'));
        console.log(typeof(userPassword.value));
    }
});


darkThemeBtn.onclick = () => {
    body.style.backgroundColor = '#bb86fc'
    formContainer.style.backgroundColor = '#121212';
    formContainer.style.border = '2px solid #bb86fc';
    formHeader.style.color = '#fff';

    for (let i = 0; i < formInput.length; i++) {
        formInput[i].style.border = '2px solid #bb86fc';
        formInput[i].style.color = 'white';
        formInput[i].style.backgroundColor = '#121212';
    }

}

lightThemeBtn.onclick = () => {
    body.style.backgroundColor = '#6066ff'
    formContainer.style.backgroundColor = '#fff';
    formContainer.style.border = '2px solid #6066ff';
    formHeader.style.color = '#252eff';

    for (let i = 0; i < formInput.length; i++) {
        formInput[i].style.border = '2px solid #6066ff';
        formInput[i].style.color = 'black';
        formInput[i].style.backgroundColor = 'white';
    }
}


