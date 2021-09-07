import './style.css';
import commentPopup from './commentPopup.js';
import './commentPopup.css';
import displayMeals from './displayMeals.js';
import getMeals from './apiGet.js';


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

