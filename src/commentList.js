export const countComments = (comments) => comments.length;

const commentList = (comments) => {
  const commentCount = document.getElementById('commentCount');
  commentCount.innerHTML = `${countComments(comments)}`;

  const commentList = document.querySelector('.comment-list');
  commentList.innerHTML = comments.map((comment) => `
          <div class="comment">
            <div class="comment-author">${comment.username}</div>;
            <div class="comment-date">${comment.creation_date}</div>;
            <div class="comment-content">${comment.comment}</div>;
          </div>
        `).join('');
};

export default commentList;