const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const itemEl = document.createElement('li');
// itemEl.classList.add('item');
// itemEl.textContent = 'Potatoes'
// console.log(itemEl);
// document.body.appendChild(itemEl);
// console.log(document.body);


// const itemEl = document.createElement('li');
// itemEl.classList.add('item');
// itemEl.textContent = 'Potatoes'
// console.log(itemEl);
// const listUl = document.querySelector('#ingredients');
// listUl.appendChild(itemEl);

// const ulEl = document.querySelector(#ingredients);
// for (const ingredient of ingredients) {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredient;

//   ulEl.appendChild(liEl);
// }
// document.body.appendChild(ulEl);

const ul = document.querySelector("#ingredients"); 
const markup = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join("");
ul.insertAdjacentHTML("beforeend", markup); 