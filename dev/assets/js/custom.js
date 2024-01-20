// setting-name: setting-value - Подключение функций 
$(document).ready(function(){
    $('#banner').slick({
      arrows: true,
      dots: true,
      appendArrows: $('.banner-arrows'),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
          }
        },
      ]
    });
  });

const burger = document.querySelector('.hamburger')
const nav = document.querySelector('.header__nav')

function burgerMenu () {
    burger.classList.toggle('is-active');
    nav.classList.toggle('show');
}

burger.addEventListener('click', burgerMenu);