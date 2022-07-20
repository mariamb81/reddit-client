import { base_url, calculateTSC, isImage } from "../../functions/utilities";
let endpoint = "";
//returns requested type of subreddit info
export const getSubredditIconByTitle = async (title) => {
  endpoint = `/r/${title}/about`;
  let url = base_url + endpoint + ".json";
  const response = await fetch(url);
  const data = await response.json();
  return data.data["icon_img"];
};
const isValidPost = (data) => {
  if(data["over_18"]) {
    return false;
  }
  return true;
}
//returns an array of formatted posts
export const formatPostData = (data) => {
  let arr = data.children;
  // (arr)
  arr.filter((item) => {
    return isValidPost(item.data);
  })

  const formattedArr = arr.map((item) => {
    let post = item.data;
    let thumbnail  = null;
    let external_url = "";
    let is_ext = false;
    let domain = "";
    if(!post["is_video"]) {
    if(isImage(post.url)) {
      thumbnail = post.url;
    } else if (isImage(post.thumbnail)) {
      thumbnail = post.thumbnail
      if(!isImage(post.url) && !post.url.includes("reddit")) {
        external_url = post.url;
        is_ext = true;
        domain = post.domain;
      }
    } else if(post.url.includes("reddit")){
      // external link reddit
      thumbnail = null;
    } else {
      thumbnail = null;
      external_url = post.url;
      is_ext = true;
      domain = post.domain;
    }
  }
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
        thumbnail: thumbnail,
        video: post.is_video ? post.media["reddit_video"] : null,
      },
      is_ext: is_ext,
      external_url: external_url, 
      domain: domain,
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
  endpoint = `/${title}`;
  let url = base_url + endpoint + ".json";
  let response = await fetch(url);
  let data = await response.json();
  return data.data;
};

export const getPostsByFilter = async ({subreddit, filter}) => {
  endpoint = `/${subreddit}/${filter}`;
  let url = base_url + endpoint + '.json';
  let response = await fetch(url);
  let data = await response.json();
  return data.data;
};
const getPostsBySearchQuery = async (searchQuery) => {
  endpoint = `/search`;

  let url = base_url + endpoint + ".json" + `?q=${searchQuery}`;
  let response = await fetch(url);
  let data = await response.json();
  return data.data;
};
export const getFormattedSearchData = async (searchQuery) => {
  const response = await getPostsBySearchQuery(searchQuery);
  const data = await formatPostData(response);
  return data;
}

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
