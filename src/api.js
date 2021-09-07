import commentPopup from './commentPopup.js';

class Meal {
  static async postComment(id, name, comment) {
    const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8wqVp7MJ1CKmqeCBEWgG/comments', {
      method: 'POST',
      body: JSON.stringify({
        item_id: Number(id),
        username: name,
        comment,
      }),
      headers: { 'content-type': 'application/json' },
    });

    if (response.status === 201) {
      this.getComments(id);
    }
  }

  static async getComments(id) {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8wqVp7MJ1CKmqeCBEWgG/comments?item_id=${id}`);
    const comments = await response.json();
    // return commentList(comments.error ? [] : comments);
  }
}

export default Meal;