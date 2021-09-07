export default async (url, endpoint) => {
  const request = await fetch(`${url}?${endpoint}`);
  const result = await request.json();
  return result;
};
