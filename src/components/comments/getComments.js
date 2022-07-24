import { base_url, calculateTSC } from "../../functions/utilities";
let endpoint = "";
const isApprovedCommentData = (commentData) => {
  let isApproved = false;
  if (commentData.approved | (commentData.body === "[deleted]")) {
    isApproved = false;
  } else if (
    (commentData.author === undefined) |
    (commentData.body === undefined) |
    (commentData.author === undefined)
  ) {
    isApproved = false;
  } else {
    isApproved = true;
  }
  return isApproved;
};
const formatCommentData = (data) => {
  const dataArr = data.map((comment) => {
    const commentData = comment.data;
    const formattedCommentData = {
      body: commentData.body,
      time_since_created: calculateTSC(commentData.created),
      replies: commentData.replies,
      author: commentData.author,
      score: commentData.score,
    };
    if (isApprovedCommentData(formattedCommentData)) {
      return formattedCommentData;
    }
  });
  return dataArr.filter((data) => data !== undefined);
};
export const getComments = async (permalink) => {
  endpoint = permalink.slice(0, -1);
  let url = base_url + endpoint + ".json";
  let response = await fetch(url);
  let data = await response.json();
  return data[1].data.children;
};
export const getFormattedComments = async (permalink) => {
  const response = await getComments(permalink);
  const data = formatCommentData(response);
  return data;
};
