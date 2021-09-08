import './style.css';
import './commentPopup.css';
import displayMeals from './displayMeals.js';
import getMeals from './apiGet.js';
import mealsCounter from './meals_counter.js';

const allMeals = document.getElementById('allMeals');
const tumericMeals = document.getElementById('tumericMeals');
const garamMeals = document.getElementById('garamMeals');
const allMealsLink = document.getElementById('indian');
const tumericMealsLink = document.getElementById('tumeric');
const garamMealsLink = document.getElementById('garam');

const url = 'https://www.themealdb.com/api/json/v1/1/filter.php';

getMeals(url, 'a=Indian').then((data) => {
  const allCount = mealsCounter(data.meals);
  allMealsLink.innerHTML += `(${allCount})`;
  displayMeals(allMeals, data.meals);
});

getMeals(url, 'i=turmeric').then((data) => {
  const tumericCount = mealsCounter(data.meals);
  tumericMealsLink.innerHTML += `(${tumericCount})`;
  displayMeals(tumericMeals, data.meals);
});
getMeals(url, 'i=garam_masala').then((data) => {
  const garamCount = mealsCounter(data.meals);
  garamMealsLink.innerHTML += `(${garamCount})`;
  displayMeals(garamMeals, data.meals);
});

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