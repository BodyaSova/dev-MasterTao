// Slider
$(document).ready(function(){
  // Banner-Slider
  // setting-name: setting-value - Подключение функций 
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

    // Advantages-Slider
    $(window).on('load resize', function() {
      if ($(window).width() < 1024) {
        $('#advantages-slider:not(.slick-initialized)').slick({
          arrows: false,
          dots: true,
        });
      } else {
        $("#advantages-slider.slick-initialized").slick("unslick");
      }
    });

  // Burger-menu
const burger = document.querySelector('.hamburger')
const nav = document.querySelector('.header__nav')

function burgerMenu () {
    burger.classList.toggle('is-active');
    nav.classList.toggle('show');
}

burger.addEventListener('click', burgerMenu);

// File-Input
const fileInput = document.querySelector('#fileInput');
const fileName  = document.querySelector('#file-name')

fileInput.addEventListener('change', function() {
  fileName.innerHTML = this.files[0].name
});

// Move-chekbox "Calculation"
const TypeTheChekbox = document.querySelector('[type=checkbox]');
const code = document.querySelector('#code');

TypeTheChekbox.closest('.calculation-column').classList.add('move-checkbox');
code.closest('.calculation-column').classList.add('move-code');
fileName.classList.add('file-name');
});