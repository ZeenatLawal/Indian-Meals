import './commentPopup.css';

const commentPopup = () => {
  const mainContainer = document.getElementById('home');
  const commentPopup = document.createElement('div');
  commentPopup.className = 'popup';
  commentPopup.innerHTML = `<button type='button' class='close-btn'>X</button>
                            <div class='comment-container'>
                              <div class='image-div'>
                                <div class='image-container'><img src='https://www.international-alert.org/sites/default/files/images/RecipesForPeace_Tajikistan_Plov_Apr%202015_Lola%20Mansurov.jpg' class='img-fluid'></div>
                              </div>
                              <div class='meal-name'><h2>Plov</h2></div>
                              <div class='cuisine'><b>Meal Type:</b> regular meal</div>
                              <div class='instructions'><b>Instructions:</b> instructions</div>
                              <div class='ingredients'><b> Ingredients:</b> ingredients</div>
                              <h3>Comments (3)</h3>
                              <div class='comment-list'> Mia: I love it!</div>
                              <div class='add-comment'><h2>Add a comment:</h2></div>
                              <div class="commentForm form-group">
                        <div><input type="text" id="name" name="name" class="comment-name" placeholder="Your Name"></div><br>
                        <div> <textarea id="comment-text" name="comment-text" class="textarea-comment" placeholder="Your insight">Your Insight</textarea></div><br>
                        <div><button type="button" class='comment-btn'>Submit</button></div>
                      </div>
                            </div>
                            
`;

mainContainer.appendChild(commentPopup);
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  commentPopup.remove();
});

const commentBtn = document.querySelector('comment-btn');
commentBtn.addEventListener('click', () => {
  console.log('Submit it!')
});
};

export default commentPopup;