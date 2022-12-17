const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients")

ingredients.forEach(Element => {
  const items = document.createElement("li");
  items.textContent = Element;
  items.classList.add("item");
  list.appendChild(items)
  console.log(items); 
});


console.log(list);






