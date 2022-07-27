const itemsCounter = document.querySelector('.items-counter');

function getItems(count) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(itemsCounter.innerHTML);
  }
  return items;
};

export default getItems;