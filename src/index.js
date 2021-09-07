import './style.css';
import displayMeals from './displayMeals.js';
import getMeals from './apiGet.js';

const footer = document.createElement('div');
footer.className = 'footer';
const footerText = document.createElement('p');
footerText.innerHTML = 'Created By Microverse under CC lisence';
footer.appendChild(footerText);
document.body.appendChild(footer);

const allMeals = document.getElementById('allMeals');
const tumericMeals = document.getElementById('tumericMeals');
const garamMeals = document.getElementById('garamMeals');
const allMealsLink = document.getElementById('indian');
const tumericMealsLink = document.getElementById('tumeric');
const garamMealsLink = document.getElementById('garam');

getMeals('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian').then((data) => { displayMeals(allMeals, data.meals); });
getMeals('https://www.themealdb.com/api/json/v1/1/filter.php?i=turmeric').then((data) => { displayMeals(tumericMeals, data.meals); });
getMeals('https://www.themealdb.com/api/json/v1/1/filter.php?i=garam_masala').then((data) => { displayMeals(garamMeals, data.meals); });

allMealsLink.addEventListener('click', () => {
  allMeals.style.display = 'flex';
  tumericMeals.style.display = 'none';
  garamMeals.style.display = 'none';
});

tumericMealsLink.addEventListener('click', () => {
  allMeals.style.display = 'none';
  tumericMeals.style.display = 'flex';
  garamMeals.style.display = 'none';
});

garamMealsLink.addEventListener('click', () => {
  allMeals.style.display = 'none';
  tumericMeals.style.display = 'none';
  garamMeals.style.display = 'flex';
});
