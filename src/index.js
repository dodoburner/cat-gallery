import './styles.css'
import catImage from './images/cat-551554_1280.jpg';
import getCats from './getCats';

const cardImg = document.querySelectorAll('.card-img');

cardImg.forEach(element => {
  element.src = catImage;
});

// getCats()

const closeBnt = document.querySelector('.close-btn')
const popup = document.querySelector('.popup')

closeBnt.addEventListener('click', () => {
  document.body.removeChild(popup)
})