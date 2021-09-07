export default async (url) => {
  const request = await fetch(url);
  const result = await request.json();
  return result;
};
