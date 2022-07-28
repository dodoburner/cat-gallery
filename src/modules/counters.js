const itemsCounters = document.querySelector('items-counter');

function getItems(count) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(itemsCounters.innerHTML);
  }
  return items;
};

function counters(data) {
itemsCounters.innerHTML = counters(data);
};

function countersLikes(data) {
  const likesCount = document.querySelectorAll('.counters-like');
likesCount.forEach((item) => {
  data.forEach((likes) => {
    if (item.Id === likes.item_id) {
      item.innerHTML = likes.likes;
      console.log(data);
    }
  })
} )
  }

export default {getItems, counters, countersLikes};