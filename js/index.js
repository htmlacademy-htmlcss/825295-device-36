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
const buttonPrevious = document.querySelector('.arrow-button-previous');
const buttonNext = document.querySelector('.arrow-button-next');
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


buttonPrevious.addEventListener('click', () => {
  clearClasses();
  counter = counter - 1;
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides[counter].classList.add('slider-item-shown');
  sliderTabButtons[counter].classList.add('slider-button-current');
});

buttonNext.addEventListener('click', () => {
  clearClasses();
  counter = counter + 1;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides[counter].classList.add('slider-item-shown');
  sliderTabButtons[counter].classList.add('slider-button-current');
});
