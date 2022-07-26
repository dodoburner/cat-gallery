import './styles.css'
import './popup.css'
import displayPopup from './displayPopup';
const commentBtns = document.querySelectorAll('.card button') 

const cardImg = document.querySelectorAll('.card-img');

commentBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    displayPopup(index)
  })
})
