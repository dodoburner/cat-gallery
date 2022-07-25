const cards = document.querySelectorAll('.card') 
const closeBnt = document.querySelector('.close-btn')
const popup = document.querySelector('.popup')

closeBnt.addEventListener('click', () => {
  document.body.removeChild('.popup')
})