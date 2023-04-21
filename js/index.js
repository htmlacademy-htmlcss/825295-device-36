const servicesButtons = document.querySelectorAll('.services-button');
const optionsContent = document.querySelectorAll('.options-item')

servicesButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.querySelector('.services-button-active').classList.remove('services-button-active');
    button.classList.add('services-button-active')
    document.querySelector('.options-item-shown').classList.remove('options-item-shown');
    optionsContent[index].classList.add('options-item-shown');
  });
});


/** slider-buttons */

const sliderTabButtons = document.querySelectorAll('.slider-button');
const slides = document.querySelectorAll('.slider-item');
const buttonPrevious = document.querySelector('.slider-arrow-button-left');
const buttonNext = document.querySelector('.slider-arrow-button-right');
let counter = 0;

const clearClasses = () => {
  document.querySelector('.slider-item-shown').classList.remove('slider-item-shown');
  document.querySelector('.slider-button-current').classList.remove('slider-button-current');
};

sliderTabButtons.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    clearClasses();
    counter = index;
    slides[index].classList.add('slider-item-shown');
    tab.classList.add('slider-button-current');
  });
});
