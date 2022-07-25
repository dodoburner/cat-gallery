// const closeBnt = document.querySelector('.close-btn')
import getCats from './getCats'

const displayPopup = async(index) => {
  let data = await getCats()
  console.log(data)
  let dataItem = data[0]
  console.log(data, dataItem)
  let popup = document.createElement('div')
  popup.classList.add('popup')
  popup.innerHTML = `
    <div class="close-btn">CLOSE</div>
    <img src="" alt="">
    <h1>${dataItem.name}</h1>
    <ul class="info">
      <li>Origin: ${dataItem.origin}</li>
      <li>Intelligence (0-5): ${dataItem.intelligence}</li>
      <li>General health (0-5): ${dataItem.general_health}</li>
      <li>Life expectancy: ${dataItem.min_life_expectancy}-${dataItem.max_life_expectancy} years</li>
    </ul>

    <h4>Comments <span>(1)</span></h4>
    <ul class="comments">
      <li>I like this!!!</li>
    </ul>

    <h4>Add a comment</h4>
    <form action="POST">
      <input type="text" name="" id="">
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Comment</button>
    </form>
  `
  document.body.appendChild(popup)
}

export default displayPopup

// closeBnt.addEventListener('click', () => {
//   const popup = document.querySelector('.popup')
//   document.body.removeChild('.popup')
// })