import './styles.css';
import displayCards from '../modules/displayCards';
import logo from './images/cat-logo.png';
import './popup.css';
import displayPopup from './displayPopup';
import displayLikes from '../modules/displayLikes';
import addLikes from './addLikes';

const logoContainer = document.querySelector('.logo');
logoContainer.src = logo;

displayCards();
displayLikes();
addLikes();

const commentBtns = document.querySelectorAll('.card button');

commentBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    displayPopup(index);
  });
});
