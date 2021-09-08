import commentPopup from './commentPopup.js';
import commentList from './commentList.js';

class Meal {
  static async postComment(mealId, name, comment) {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7X6fjvwVL8rklkn24xVW/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: mealId,
        username: name,
        comment: comment,
      }),
      headers: { 'content-type': 'application/json' },
    });

    if (response.status === 201) {
      return response
    }
  }

  static async getComments(mealId) {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7X6fjvwVL8rklkn24xVW/comments?item_id=${mealId}`);
    const comments = await response.json();
    return commentList(comments.error ? [] : comments);
  }

}

export default Meal;