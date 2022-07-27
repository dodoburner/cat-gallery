import getCats from './getCats';
import displayPopup from '../src/commentsModules/displayPopup';

const main = document.querySelector('main');

const displayCards = async () => {
  const response = await getCats();
  const catsArray = await response.slice(0, 6);
  catsArray.forEach((cat) => {
    const card = document.createElement('div');
    card.classList.add('.card');
    card.innerHTML = `
    <div class="card-container">
    <img src="${cat.image_link}" alt="">
    <div class="cat-name">
      <p>${cat.name}</p>
      <button class="like-btn"><i class="fa-regular fa-heart"></i></button>
    </div>
    <span>0 likes</span>
    <button class="comment-btn">Comments</button>
  </div>
    `;
    main.appendChild(card);
  });

  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      displayPopup(index);
    });
  });
};

export default displayCards;