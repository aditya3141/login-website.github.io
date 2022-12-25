
/*==================== CHANGE BACKGROUND HEADER ====================*/  
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 60) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
    window.addEventListener('scroll', scrollHeader);


// ++++++++++++++++++++++++ Form ++++++++++++++++

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');

    // when user login and register
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = () => {
    registerBtn.classList.remove('active');
    loginBtn.classList.add('active');

    // when user login and register
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};


let accountForm = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = () =>{
    accountForm.classList.add('activee');
};

document.querySelector('.close-form').onclick = () =>{
    accountForm.classList.remove('activee');
};

