import commentPopup from './commentPopup.js';

const main = document.getElementById('main');
const header = document.getElementsByTagName('header');
const footer = document.getElementsByTagName('footer');

export default (mealsDiv, allMeals) => {
  mealsDiv.innerHTML = '';
  allMeals.forEach((meal) => {
    const card = `<img src="${meal.strMealThumb}" alt="Food">
    <div class="mealName flex">
      <p>${meal.strMeal}</p>
      <i class="far fa-heart"></i>
    </div>
    <p id="likes">5 likes</p>
    <button class="comment" id="${meal.idMeal}">Comments</button>`;

    const meals = document.createElement('div');
    meals.classList.add('mealCard');
    meals.innerHTML = card;
    mealsDiv.appendChild(meals);
    const displayComment = document.getElementById(meal.idMeal);
    displayComment.addEventListener('click', () => {
      commentPopup(meal.idMeal);
      main.style.display = 'none';
      header[0].style.display = 'none';
      footer[0].style.display = 'none';
    });
  });
};