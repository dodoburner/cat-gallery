const appendComment = (date, username, comment) => {
  const commentsContainer = document.querySelector('.popup-comments ul')
  const newComment = document.createElement('li')
  newComment.innerHTML = `
    ${date} ${username}: ${comment}
  `
  commentsContainer.appendChild(newComment)
}

export default appendComment