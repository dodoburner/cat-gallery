const counters = () => {
  const numOfCard = document.querySelector('.main').children.length;
  const cardCounter = document.getElementById('items-counter');
  cardCounter.innerHTML = `(${numOfCard})`;
};

export default counters;