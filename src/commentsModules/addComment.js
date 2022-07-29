import createDate from './createDate';
import appendComment from './appendComment';
import counter from './commentCounter';

const addComment = async (id, username, comment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/19XTEH8RQiXryaA222mb/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${id}`,
      username: `${username}`,
      comment: `${comment}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  });

  appendComment(createDate(), username, comment);
  counter();
};

export default addComment;