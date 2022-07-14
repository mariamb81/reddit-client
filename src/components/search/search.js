import { base_url } from '../../functions/utilities'
let endpoint = ''
// returns search query
const getSearchQuery = (searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    let space = '%20';
    return searchTerm.replace(" ", space);
}
export const getPostsBySearchQuery = async(searchQuery) => {
    endpoint = `/search?q=${searchQuery}`;
    let url = base_url + endpoint + '.json';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
}
