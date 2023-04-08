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
