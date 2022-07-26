// const closeBnt = document.querySelector('.close-btn')
import getCats from './getCats'

const displayPopup = async(index) => {
  // let data = await getCats()
  // let dataItem = data[0]
  let dataItem = {
    "length": "12 to 16 inches",
    "origin": "Southeast Asia",
    "image_link": "https://api-ninjas.com/images/cats/abyssinian.jpg",
    "family_friendly": 3,
    "shedding": 3,
    "general_health": 2,
    "playfulness": 5,
    "children_friendly": 5,
    "grooming": 3,
    "intelligence": 5,
    "other_pets_friendly": 5,
    "min_weight": 6,
    "max_weight": 10,
    "min_life_expectancy": 9,
    "max_life_expectancy": 15,
    "name": "Abyssinian"
  }
  let popup = document.createElement('div')
  popup.classList.add('popup')
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
        <li>03/11/2021 Alex: I like this!!!</li>
        <li>03/11/2021 Alex: I like this!!!</li>
      </ul>
    </div>

    <form action="POST">
      <h4>Add a comment</h4>
      <input type="text" name="" id="" placeholder="Your name">
      <textarea name="" id="" placeholder="Your insights"></textarea>
      <button>Comment</button>
    </form>
  </div>
  `
  document.body.appendChild(popup)
  let closeBtn = document.querySelector('.close-btn')
  closeBtn.addEventListener('click', () => {
    const popup = document.querySelector('.popup')
    document.body.removeChild(popup)
  })
}

export default displayPopup

