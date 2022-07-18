import React, { useEffect } from "react";
import styled from "styled-components";
import { TbArrowBigDown, TbArrowBigTop } from "react-icons/tb";
import { MdOutlineModeComment } from "react-icons/md";
import { useState } from "react";
import Placeholder from "react-bootstrap/Placeholder";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComments,
  selectCommentsStatus,
  toggleModal,
} from "../comments/commentsSlice";
import { getSubredditIconByTitle } from "./getPosts";
import { useMediaQuery } from "react-responsive";
import DisplayComments from "../comments/DisplayComments";
import { selectComments } from "../comments/commentsSlice";
import { formatTSC } from "../../functions/utilities";
const Post = ({ postData }) => {
  const [iconImg, setIconImg] = useState("");
  const [commentsOpen, setCommentsOpen] = useState(false);

  useEffect(() => {
    if (iconImg === "") {
      getSubredditIconByTitle(postData.subreddit.name)
        .then((data) => {
          setIconImg(data);
        })
        .catch((err) => console.log(err));
    }
  }, [iconImg]);

  const dispatch = useDispatch();
  const postsStatus = useSelector((state) => state.posts.status);
  const commentsStatus = useSelector(selectCommentsStatus);

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const authorDateString = `Posted by: ${postData.author} ${formatTSC(
    postData["time_since_created"]
  )}`;
 
  const toggleComments = () => {
    if (!commentsOpen) {
      console.log("open comments");
      setCommentsOpen(true);
      dispatch(fetchComments(postData.permalink));
    } else {
      setCommentsOpen(false);
      console.log("close comments");
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
  if (postsStatus !== "loading") {
    return (
      <Wrapper>
        <Header>
          <Subreddit>
            <Icon subredditIcon={iconImg}></Icon>
            <Text>{postData.subreddit.display_name}</Text>
          </Subreddit>

          <Subtitle>{authorDateString}</Subtitle>
        </Header>
        <h5>{postData.title}</h5>
        <Content>
          {postData.media.thumbnail.includes("https") ? (
            <Thumbnail src={postData.media.thumbnail}></Thumbnail>
          ) : (
            <></>
          )}
        </Content>
        <Footer>
          <Upvotes>
            <Button id="upvote-btn">
              <TbArrowBigTop size={"1.3rem"} />
            </Button>
            <Subtitle style={{ margin: "0 4px" }}>{postData.score}</Subtitle>
            <Button id="downvote-btn">
              <TbArrowBigDown size={"1.3rem"} />
            </Button>
          </Upvotes>
          <CommentsButton 
          id="comment-btn" 
          onClick={toggleComments}>
            <MdOutlineModeComment size={"1.3rem"} />
            <Subtitle style={{ margin: "0 4px" }}>
              {postData["num_comments"]} comments
            </Subtitle>
          </CommentsButton>
        </Footer>
        {renderComments()}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Header>
          <Subreddit>
            <Icon subredditIcon={postData.subreddit.icon}></Icon>
            <Placeholder xs={4} bg="secondary" />
          </Subreddit>

          <Subtitle>
            <Placeholder xs={6} bg="secondary" />
          </Subtitle>
        </Header>
        <h5>
          <Placeholder xs={12} bg="secondary" />
          <Placeholder xs={8} bg="secondary" />
        </h5>
        <Content
          style={{ aspectRatio: "1/1", backgroundColor: "#bdbdbd" }}
        ></Content>
        <Footer>
          <Upvotes>
            <Button id="upvote-btn">
              <TbArrowBigTop size={"1.3rem"} />
            </Button>
            <Subtitle style={{ margin: "0 4px" }}>
              <>
                <Placeholder xs={2} bg="secondary" />
              </>
            </Subtitle>
            <Button id="downvote-btn">
              <TbArrowBigDown size={"1.3rem"} />
            </Button>
          </Upvotes>
          <CommentsButton id="comment-btn">
            <MdOutlineModeComment size={"1.3rem"} />
            <Subtitle style={{ margin: "0 4px" }}>
              <>
                <Placeholder xs={2} bg="secondary" />
              </>
            </Subtitle>
          </CommentsButton>
        </Footer>
      </Wrapper>
    );
  }
};
const Wrapper = styled.div`
  background-color: white;
  padding: 35px 30px;
  margin: 10px 0;
  --grey-primary: #545454;
`;
const Header = styled.div`
  margin-bottom: 1rem;
`;
const Content = styled.div`
  background-color: grey;
  object-fit: contain;
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
  margin: 0;
`;
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  color: var(--grey-primary);
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
`;
const Button = styled.button`
  border: none;
  background-color: white;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;
const CommentsDisplay = styled.div`
  background-color: grey;
`;
export default Post;
