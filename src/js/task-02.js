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


const itemEl = document.createElement('li');
itemEl.classList.add('item');
itemEl.textContent = 'Potatoes'
console.log(itemEl);
const listUl = document.querySelector('#ingredients');
listUl.appendChild(itemEl);
