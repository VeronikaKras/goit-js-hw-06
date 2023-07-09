const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const itemEl = document.createElement('li');
itemEl.classList.add('item');
itemEl.textContent = 'Potatoes'
console.log(itemEl);


const listUl = document.querySelector('#categories');
