export const postLikes = async (url, mealId) => {
  const request = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: mealId,
    }),
  });
  return request;
};

const getLikes = async (url) => {
  const request = await fetch(url);
  const result = await request.json();
  return result;
};

export const likes = (url, span, mealId) => {
  getLikes(url).then((data) => {
    data = data.filter((item) => item.item_id === mealId);
    span.innerHTML = `${data[0].likes} likes`;
  });
};