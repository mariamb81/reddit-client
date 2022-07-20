import { base_url } from "../../functions/utilities";
let endpoint = "";
//returns requested type of subreddit info
const getSubredditInfoByTitle = async (title) => {
  endpoint = `/r/${title}/about`;
  let url = base_url + endpoint + ".json";
  const response = await fetch(url);
  const data = await response.json();
  return data.data;
};
// returns formatted subreddit data
export const formatSubredditData = (data) => {
  let arr = data;
  const formattedSubredditData = arr.map((item) => {
    let subredditInfo = item.data;
    return {
      title: subredditInfo.title,
      icon: subredditInfo["icon_img"],
      display_name: subredditInfo["display_name_prefixed"],
    };
  });
  return formattedSubredditData;
};
let after = "";
const getSubreddits = async () => {
  endpoint = `/subreddits/default`;
  let url = base_url + endpoint + ".json";
  let response = await fetch(url);
  let data = await response.json();
  after = data.data.after;
  return data.data.children;
};
export const getMoreSubreddits = async () => {
  endpoint = `/subreddits`;
  let parameterQuery = `?after=${after}`;
  let url = base_url + endpoint + ".json" + parameterQuery;
  if(after !== null){
    let response = await fetch(url);
    let data = await response.json();
    after = data.data.after;
    return data.data.children;
  }

};
export const getFormattedSubredditData = async () => {
  const response = await getSubreddits();
  const data = formatSubredditData(response);
  return data;
};