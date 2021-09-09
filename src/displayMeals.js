import commentPopup from './commentPopup.js';
import { likes, postLikes } from './likesAPI.js';

const main = document.getElementById('main');
const header = document.getElementsByTagName('header');
const footer = document.getElementsByTagName('footer');

const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7X6fjvwVL8rklkn24xVW/likes';

export default (mealsDiv, allMeals) => {
  mealsDiv.innerHTML = '';
  allMeals.forEach((meal) => {
    const spanId = meal.idMeal + 1;
    const card = `<img src="${meal.strMealThumb}" alt="Food">
    <div class="mealName flex">
      <p>${meal.strMeal}</p>
      <i class="far fa-heart" id="${meal.strMeal}"></i>
    </div>
    <span class="likes" id="${spanId}">0 likes</span>
    <button class="comment" id="${meal.idMeal}">Comments</button>`;

    const meals = document.createElement('div');
    meals.classList.add('mealCard');
    meals.innerHTML = card;
    mealsDiv.appendChild(meals);

    const icon = document.getElementById(meal.strMeal);
    const span = document.getElementById(spanId);

    icon.addEventListener('click', () => {
      postLikes(likesUrl, meal.idMeal).then(() => likes(likesUrl, span, meal.idMeal));
    });

    likes(likesUrl, span, meal.idMeal);

    const displayComment = document.getElementById(meal.idMeal);
    displayComment.addEventListener('click', () => {
      commentPopup(meal.idMeal);
      main.style.display = 'none';
      header[0].style.display = 'none';
      footer[0].style.display = 'none';
    });
  });
};
