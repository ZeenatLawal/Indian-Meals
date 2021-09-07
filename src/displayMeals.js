export default (mealsDiv, allMeals) => {
  mealsDiv.innerHTML = '';
  allMeals.forEach((meal) => {
    const img = `${meal.strMealThumb}`;
    const content = `${meal.strMeal}`;

    const listItem = document.createElement('div');
    const mealImg = document.createElement('img');
    const mealName = document.createElement('p');
    mealImg.setAttribute('src', img);
    mealName.innerText = content;
    listItem.className = 'list-item';
    listItem.appendChild(mealName);
    listItem.appendChild(mealImg);
    mealsDiv.appendChild(listItem);
  });
};