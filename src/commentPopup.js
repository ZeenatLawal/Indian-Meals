import './commentPopup.css';
import getMeals from './apiGet.js';

const mainContainer = document.getElementById('home');
const main = document.getElementById('main');
const header = document.getElementsByTagName('header');
const footer = document.getElementsByTagName('footer');

const commentPopup = (mealId) => {
  const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php';
  getMeals(url, `i=${mealId}`).then((data) => {
    mainContainer.innerHTML = '';
    const commentPopup = document.createElement('div');
    commentPopup.className = 'popup';
    commentPopup.innerHTML = `<button type='button' class='close-btn'>X</button>
                            <div class='comment-container'>
                              <div class='image-div'>
                                <div class='image-container'><img src="${data.meals[0].strMealThumb}" class='img-fluid'></div>
                              </div>
                              <div class='meal-name'><h2>${data.meals[0].strMeal}</h2></div>
                              <div class='cuisine'><b>Category:</b> ${data.meals[0].strCategory}</div>
                              <div class='ingredients'><b> Ingredients:</b> ${data.meals[0].strIngredient1}, ${data.meals[0].strIngredient2}, ${data.meals[0].strIngredient3}, ${data.meals[0].strIngredient4}, ${data.meals[0].strIngredient5}</div>
                              <h3>Comments (3)</h3>
                              <div class='comment-list'> Mia: I love it!</div>
                              <div class='add-comment'><h2>Add a comment:</h2></div>
                              <div class="commentForm form-group">
                        <div><input type="text" id="name" name="name" class="comment-name" placeholder="Your Name"></div><br>
                        <div> <textarea id="comment-text" name="comment-text" class="textarea-comment" placeholder="Your insight">Your Insight</textarea></div><br>
                        <div><button type="button" class='comment-btn'>Submit</button></div>
                      </div>
                            </div>`;

    mainContainer.appendChild(commentPopup);
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      commentPopup.remove();
      main.style.display = 'block';
      header[0].style.display = 'flex';
      footer[0].style.display = 'block';
    });
  });
  // const commentBtn = document.querySelector('comment-btn');
  // commentBtn.addEventListener('click', () => {
  //   console.log('Submit it!');
  // });
};

export default commentPopup;