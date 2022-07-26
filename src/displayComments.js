import appendComment from "./appendComment"

const displayComments = async(id) => {
  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/19XTEH8RQiXryaA222mb/comments?item_id=${id}`)
  const data = await result.json()
  data.forEach(el => {
    appendComment(el.creation_date, el.username, el.comment)
  })
}

export default displayComments