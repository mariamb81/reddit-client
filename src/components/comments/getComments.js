import { base_url } from '../../functions/utilities'
let endpoint = ''
const formatCommentData = (data) => {

}
export const getComments = async(permalink) => {
    endpoint = permalink.slice(0, -1);
    let url = base_url + endpoint + '.json';
    let response = await fetch(url);
    let data = await response.json();
    return data[1].data.children;
}