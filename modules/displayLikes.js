const displayLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/GhXrbxU9ueCmDEFf1bVj/likes');
  const getLikes = await response.json();
  return getLikes;
};

export default displayLikes;
