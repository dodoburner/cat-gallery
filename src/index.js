import './styles.css'
import catImage from './images/cat-551554_1280.jpg';

const images = document.querySelectorAll('img');

images.forEach(element => {
  element.src = catImage;
});