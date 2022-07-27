const counter = () => {
  const commentsCounter = document.querySelector('.comments-counter')
  const numOfComments = document.querySelector('.popup-comments ul').children.length
  commentsCounter.innerHTML = `(${numOfComments})`
}

export default counter