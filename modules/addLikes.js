const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GhXrbxU9ueCmDEFf1bVj/likes';

const addLikes = async (catsId) => {
  const response = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: catsId,
    }),
    headers: {
      'Content-Type': 'application/json', charset: 'UTF-8',
    },
  });
};

export default addLikes;