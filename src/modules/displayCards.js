import getCats from './getCats';
import addLikes from '../addLikes';
import displayLikes from './displayLikes';
import displayPopup from '../commentsModules/displayPopup';
import counters from './counters';

const main = document.querySelector('main');

const displayCards = async () => {
  const likesArray = await displayLikes();
  const response = await getCats();
  const catsArray = await response.slice(0, 6);

  catsArray.forEach((cat) => {
    const card = document.createElement('div');
    card.classList.add('.card');
    card.id = cat.name.replace(/ /g, '_');
    let likeNumber = 0;
    likesArray.forEach((like) => {
      if (like.item_id === card.id) {
        likeNumber = like.likes;
      }
    });
    card.innerHTML = `
    <div class="card-container">
    <img class="cat" src="${cat.image_link}" alt="">
    <div class="cat-name">
      <p>${cat.name}</p>
      <button class="like-btn"><i class="fa-regular fa-heart"></i></button>
    </div>
    <span class="counter">${likeNumber} likes</span>
    <button class="comment-btn">Comments</button>
  </div>
    `;
    main.appendChild(card);
  });
  counters();
  const likeBtn = document.querySelectorAll('.like-btn');
  const commentBtns = document.querySelectorAll('.comment-btn');

  commentBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      displayPopup(index);
    });
  });

  likeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      addLikes(btn.parentElement.parentElement.parentElement.id);
      const span = btn.parentElement.parentElement.children[2];
      const spanValue = span.textContent.match(/[0-9]+/);
      span.innerHTML = `${parseInt(spanValue[0], 10) + 1} likes`;
    });
  });
};

export default displayCards;