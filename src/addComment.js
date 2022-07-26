import createDate from "./createDate"

const addComment = async(id, username, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/19XTEH8RQiXryaA222mb/comments', {
    method: 'POST',
    body: JSON.stringify({
      "item_id": `${id}`,
      "username": `${username}`,
      "comment": `${comment}`
    }),
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  })

  const commentsContainer = document.querySelector('.popup-comments ul')
  const newComment = document.createElement('li')
  newComment.innerHTML = `
    ${createDate()} ${username}: ${comment}
  `
  commentsContainer.appendChild(newComment)
}

export default addComment