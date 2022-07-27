import getCats from '../modules/getCats';
import addComment from './addComment';
import displayComments from './displayComments';

const displayPopup = async (index) => {
  const data = await getCats();
  const dataItem = data[index];
  const itemID = dataItem.name.replace(/ /g, '_');
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
  <div class="popup-container">
    <div class="close-btn"><i class="fa-solid fa-xmark"></i></div>
    <img class="popup-img" src="${dataItem.image_link}" alt="">
    <h1 class="popup-title">${dataItem.name}</h1>
    <ul class="info">
      <li>Origin: ${dataItem.origin}</li>
      <li>Intelligence (0-5): ${dataItem.intelligence}</li>
      <li>General health (0-5): ${dataItem.general_health}</li>
      <li>Life expectancy: ${dataItem.min_life_expectancy}-${dataItem.max_life_expectancy} years</li>
    </ul>

    <div class="popup-comments">
      <h4>Comments <span>(1)</span></h4>
      <ul>
      </ul>
    </div>

    <form action="POST">
      <h4>Add a comment</h4>
      <input type="text" name="" id="username-input" placeholder="Your name">
      <textarea name="" id="comment-input" placeholder="Your insights"></textarea>
      <button>Comment</button>
    </form>
  </div>
  `;
  document.body.appendChild(popup);
  displayComments(itemID);

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    document.body.removeChild(popup);
  });

  const form = document.querySelector('form');
  const usernameInput = document.querySelector('#username-input');
  const commentInput = document.querySelector('#comment-input');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment(itemID, usernameInput.value, commentInput.value);
    usernameInput.value = '';
    commentInput.value = '';
  });
};

export default displayPopup;
