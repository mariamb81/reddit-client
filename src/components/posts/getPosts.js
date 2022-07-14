import { base_url, calculateTSC } from '../../functions/utilities'
let endpoint = ''
//returns requested type of subreddit info
const getSubredditIconByTitle = async(title) => {
    endpoint = `/r/${title}/about`
    let url = base_url + endpoint + '.json';
    const response = await fetch(url);
    const data = await response.json();
    return data.data["icon_img"];
}
//returns an array of formatted posts
export const formatPostData = (data) => {
    let arr = data.children;
    // console.log(arr)
    const formattedArr = arr.map((item) => {
        let post = item.data;
        // console.log(post)
        return {
            subreddit: {
                name: post["subreddit_name_prefixed"],
                icon: getSubredditIconByTitle(post.subreddit),
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
        }
    })
    return formattedArr;
}

export const getHomePageData = async() => {
    endpoint = '/r/popular'
    let url = base_url + endpoint + '.json'
    let response = await fetch(url);
    let data = await response.json();
    return data.data;
}

getHomePageData().then((data) =>{
    let posts = formatPostData(data)
    console.log(posts)
}).catch((err) => {
    console.log(err)
})