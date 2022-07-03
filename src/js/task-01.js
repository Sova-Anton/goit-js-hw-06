// const list = document.querySelector('#categories');
// console.log(`Number of categories:`, list.children.length);

const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach((element) => {
  return console.log(`Category: ${element.querySelector("h2").textContent}
Elements:${element.querySelectorAll("li").length}`);
});
