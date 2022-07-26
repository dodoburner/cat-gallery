import './styles.css'
import './popup.css'
import catImage from './images/cat-551554_1280.jpg';
import displayPopup from './displayPopup';
// import getCats from './getCats';
const commentBtns = document.querySelectorAll('.card button') 

const cardImg = document.querySelectorAll('.card-img');

displayPopup()
cardImg.forEach(element => {
  element.src = catImage;
});

// commentBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     displayPopup(index)
//   })
// })


// getCats()

// const closeBnt = document.querySelector('.close-btn')
// const popup = document.querySelector('.popup')

// closeBnt.addEventListener('click', () => {
//   document.body.removeChild(popup)
// })