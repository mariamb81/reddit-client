
// returns search query
export const getSearchQuery = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  let space = "%20";
  return searchTerm.replace(" ", space);
};
