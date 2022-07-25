import './styles.css'
import catImage from './images/cat-551554_1280.jpg';
import displayPopup from './displayPopup';
// import getCats from './getCats';
const commentBtns = document.querySelectorAll('.card button') 

const cardImg = document.querySelectorAll('.card-img');

cardImg.forEach(element => {
  element.src = catImage;
});

commentBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    console.log('works')
    displayPopup(index)
  })
})


// getCats()

// const closeBnt = document.querySelector('.close-btn')
// const popup = document.querySelector('.popup')

// closeBnt.addEventListener('click', () => {
//   document.body.removeChild(popup)
// })