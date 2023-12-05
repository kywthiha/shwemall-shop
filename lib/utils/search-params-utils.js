export const convertObject = (link) => {
  const url = new URL(link);
  return Object.fromEntries(url.searchParams);
};