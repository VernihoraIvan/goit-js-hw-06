const listItems = document.querySelectorAll(".item"); //NodeList(3) [li.item, li.item, li.item]
const listNumber = listItems.length; // 3

console.log(`Number of categories: ${listNumber}`);

const itemEl = listItems.forEach((item) => {
  const itemName = item.firstElementChild.textContent;
  const quantity = item.lastElementChild.children.length;
  return console.log(`Category: ${itemName}
Elements: ${quantity}`);
});
