const burger = document.querySelector('.btn-burger')
const nav = document.querySelector('.header__nav')

function burgerMenu () {
    burger.classList.toggle('open');
    nav.classList.toggle('show');
}

burger.addEventListener('click', burgerMenu);