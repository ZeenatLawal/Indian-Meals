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

export const getLikes = async (url) => {
  const request = await fetch(url);
  const result = await request.json();
  return result;
};