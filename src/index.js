import './styles.css';
import './popup.css';
import displayPopup from './displayPopup';

const commentBtns = document.querySelectorAll('.card button');

commentBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    displayPopup(index);
  });
});
