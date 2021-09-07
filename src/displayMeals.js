import commentPopup from "./commentPopup";
import './commentPopup.css';


export default (mealsDiv, allMeals) => {
  mealsDiv.innerHTML = '';
  allMeals.forEach((meal) => {
    const card = `<img src="${meal.strMealThumb}" alt="Food">
    <div class="mealName flex">
      <p>${meal.strMeal}</p>
      <i class="far fa-heart"></i>
    </div>
    <p id="likes">5 likes</p>
    <button id="comment">Comments</button>`;

    const meals = document.createElement('div');
    meals.classList.add('mealCard');
    meals.innerHTML = card;
    mealsDiv.appendChild(meals);
    const display = document.getElementById('comment');
    display.addEventListener('click', () => {
      commentPopup()
    })
  });
};