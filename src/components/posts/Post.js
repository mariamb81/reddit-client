import React, { useEffect } from "react";
import styled from "styled-components";
import { TbArrowBigDown, TbArrowBigTop } from "react-icons/tb";
import { MdOutlineModeComment, MdLink } from "react-icons/md";
import { useState } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import VideoPlayer from "./VideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, selectCommentsStatus } from "../comments/commentsSlice";
import { getSubredditIconByTitle } from "./getPosts";
// import { useMediaQuery } from "react-responsive";
import DisplayComments from "../comments/DisplayComments";
import { formatTSC } from "../../functions/utilities";

const Post = ({ postData, id }) => {
  const initialScore = postData.score;
  const [iconImg, setIconImg] = useState("");
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [score, setScore] = useState(initialScore);
  const dispatch = useDispatch();
  const postsStatus = useSelector((state) => state.posts.status);
  const commentsStatus = useSelector(selectCommentsStatus);
  const external_url = postData["external_url"];

  useEffect(() => {
    getSubredditIconByTitle(postData.subreddit.name)
      .then((data) => {
        setIconImg(data);
      })
      .catch();
  }, [iconImg, postsStatus, postData.subreddit.name]);
  // const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const authorDateString = `Posted by: ${postData.author} ${formatTSC(
    postData["time_since_created"]
  )}`;

  const toggleComments = () => {
    if (!commentsOpen) {
      setCommentsOpen(true);
      dispatch(fetchComments(postData.permalink));
    } else {
      setCommentsOpen(false);
    }
  };
  const renderComments = () => {
    if (commentsOpen && commentsStatus !== "loading") {
      //comments ready
      return (
        <CommentsDisplay>
          <DisplayComments />
        </CommentsDisplay>
      );
    }
  };
  const renderContent = () => {
    if ((postData.media.thumbnail !== null) | postData["is_video"]) {
      if (postData["is_video"]) {
        return (
          <VideoPlayer data={postData.media.video} title={postData.title} />
        );
      } else {
        return (
          <Thumbnail
            src={postData.media.thumbnail}
            alt={`${postData.title} thumbnail`}
          ></Thumbnail>
        );
      }
    }
    return <></>;
  };
  const renderLink = () => {
    return (
      <div>
        <MdLink size={"1.3rem"}></MdLink>
        <Link href={external_url} target="_blank" rel="noreferrer">
          {postData.domain}
        </Link>
      </div>
    );
  };
  const changeScore = (method) => {
    if (method === "increment") {
      setScore((score) => initialScore + 1);
    }
    if (method === "decrement") {
      setScore((score) => initialScore - 1);
    }
  };

  if (postsStatus !== "loading") {
    return (
      <Wrapper>
        <Header>
          <Subreddit>
            <Icon subredditIcon={iconImg}></Icon>
            <Text>{postData.subreddit.display_name}</Text>
          </Subreddit>

          <Subtitle style={{ margin: "8px 0" }}>{authorDateString}</Subtitle>
          <h5>{postData.title}</h5>
        </Header>
        <Content style={{ backgroundColor: "white" }}>
          {renderContent()}
        </Content>
        {postData["is_ext"] ? renderLink() : <></>}
        <Footer>
          <Upvotes>
            <UpvoteButton
              id={`upvote-${id}`}
              aria-label="upvote"
              onClick={() => changeScore("increment")}
            >
              <TbArrowBigTop size={"1.3rem"} />
            </UpvoteButton>
            <Subtitle>{score}</Subtitle>
            <DownvoteButton
              id={`downvote-${id}`}
              aria-label="downvote"
              onClick={() => changeScore("decrement")}
            >
              <TbArrowBigDown size={"1.3rem"} />
            </DownvoteButton>
          </Upvotes>
          <CommentsButton id={`comment-${id}`} onClick={toggleComments}>
            <MdOutlineModeComment size={"1.3rem"} />
            <Subtitle>{postData["num_comments"]} comments</Subtitle>
          </CommentsButton>
        </Footer>
        <CommentsDisplay>{renderComments()}</CommentsDisplay>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Header>
          <Subreddit>
            <Icon subredditIcon={postData.subreddit.icon}></Icon>
            <PlaceholderDiv>
              <Placeholder animation="wave">
                <Placeholder xs={6} bg="secondary" />
              </Placeholder>
            </PlaceholderDiv>
          </Subreddit>

          <PlaceholderDiv>
            <Placeholder animation="wave">
              <Placeholder xs={6} bg="secondary" />
            </Placeholder>
          </PlaceholderDiv>
        </Header>
        <PlaceholderDiv>
          <Placeholder animation="wave">
            <Placeholder xs={12} bg="secondary" />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={8} bg="secondary" />
          </Placeholder>
        </PlaceholderDiv>
        <Content
          style={{ aspectRatio: "1/1", backgroundColor: "#bdbdbd" }}
        ></Content>
        <Footer>
          <Upvotes>
            <UpvoteButton id="upvote-btn">
              <TbArrowBigTop size={"1.3rem"} />
            </UpvoteButton>
            <Subtitle></Subtitle>
            <DownvoteButton id={`downvote-button-${id}`}>
              <TbArrowBigDown size={"1.3rem"} />
            </DownvoteButton>
          </Upvotes>
          <CommentsButton id="comment-btn">
            <MdOutlineModeComment size={"1.3rem"} />
            <Subtitle></Subtitle>
          </CommentsButton>
        </Footer>
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  background-color: white;
  padding: 35px 30px;
  width: 100%;
  flex-wrap: wrap;
  margin: 10px 0;
  --grey-primary: #545454;
  margin: 0.5rem 0;
  display: flex;
`;
const Header = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
const Content = styled.div`
  width: 100%;
  background-color: grey;
`;
const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: grey;
  margin-right: 0.5rem;
  background-image: url(${(props) => props.subredditIcon});
  background-position: center;
  background-size: 30px 30px;
`;
const Subreddit = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
`;
const Text = styled.p`
  margin: 0;
`;
const Subtitle = styled.p`
  font-size: 12px;
  color: var(--grey-primary);
  margin: 0 4px;
`;
const Footer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  color: var(--grey-primary);
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
`;
const Upvotes = styled.div`
  display: flex;
  align-items: center;
`;
const CommentsButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: white;
  :hover {
    color: #5655f0;
  }
  :focus {
    color: #5655f0;
  }
`;
// const Button = styled.button`
//   border: none;
//   background-color: white;
// `;
const UpvoteButton = styled.button`
  border: none;
  background-color: white;
  :hover,
  :focus {
    color: #ff6d00;
  }
`;
const DownvoteButton = styled.button`
  border: none;
  background-color: white;
  :hover,
  :focus {
    color: #5655f0;
  }
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;
const CommentsDisplay = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const PlaceholderDiv = styled.div`
  width: 50%;
`;
const Link = styled.a`
  :visited {
    color: purple;
  }
`;
export default Post;
