import './styles.css';
import './popup.css';
import displayPopup from './displayPopup';

const commentBtns = document.querySelectorAll('.card button');

commentBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    displayPopup(index);
  });
});

// fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/19XTEH8RQiXryaA222mb/comments?item_id=Cornish_Rex')
// .then(res => res.text())
// .then(data => console.log(data))