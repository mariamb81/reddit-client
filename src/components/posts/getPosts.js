import { base_url, calculateTSC } from "../../functions/utilities";
let endpoint = "";
//returns requested type of subreddit info
export const getSubredditIconByTitle = async (title) => {
  endpoint = `/r/${title}/about`;
  let url = base_url + endpoint + ".json";
  const response = await fetch(url);
  const data = await response.json();
  return data.data["icon_img"];
};
//returns an array of formatted posts
const formatPostData = (data) => {
  let arr = data.children;
  // console.log(arr)
  const formattedArr = arr.map((item) => {
    let post = item.data;
    // console.log(post)
    return {
      subreddit: {
        display_name: post["subreddit_name_prefixed"],
        name: post.subreddit,
      },
      author: post.author,
      time_since_created: calculateTSC(post.created),
      title: post.title,
      is_video: post["is_video"],
      media: {
        thumbnail: post.thumbnail,
        video: post.is_video ? post.media["reddit_video"] : null,
      },
      score: post.score,
      num_comments: post["num_comments"],
      permalink: post.permalink,
    };
  });
  return formattedArr;
};

const getHomePageData = async () => {
  endpoint = "/r/popular";
  let url = base_url + endpoint + ".json";
  let response = await fetch(url);
  let data = await response.json();
  return data.data;
};
const getPostsBySubreddit = async (title) => {
  endpoint = `/r/${title}/about`;
  let url = base_url + endpoint + ".json";
  let response = await fetch(url);
  let data = await response.json();
  return data.data;
};

const getPostsBySearchTerm = async (title) => {
  endpoint = '';
  let url = base_url + endpoint + ".json";
  let response = await fetch(url);
  let data = await response.json();
  return data.data;
};



export const getFormattedHomepageData = async () => {
  const response = await getHomePageData();
  const data = await formatPostData(response);
  return data;
};
export const getFormattedFilteredData = async (title) => {
  const response = await getPostsBySubreddit(title);
  const data = await formatPostData(response);
  return data;
};
// getHomePageData().then((data) =>{
//     let posts = formatPostData(data)
//     console.log(posts)
// }).catch((err) => {
//     console.log(err)
// })
