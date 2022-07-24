import React from "react";
import styled from "styled-components";
import { TiHome } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { selectSubreddit } from "./subredditsSlice";
import { fetchPostsBySubreddit, fetchPosts } from "../posts/postsSlice";
import Placeholder from "react-bootstrap/Placeholder";

const Subreddit = ({ subredditData, type = "Home" }) => {
  const dispatch = useDispatch();
  const handleSelectSubreddit = () => {
    if (type === "Home") {
      dispatch(fetchPosts());
      dispatch(
        selectSubreddit({
          name: "Home",
          icon: "",
        })
      );
    } else {
      dispatch(
        selectSubreddit({
          name: subredditData["display_name"],
          icon: subredditData.icon,
        })
      );
      dispatch(fetchPostsBySubreddit(subredditData["display_name"]));
    }
  };
  const subredditsStatus = useSelector((state) => state.subreddits.status);

  if (type === "Home") {
    return (
      <Wrapper id="home-btn" onClick={handleSelectSubreddit}>
        <TiHome size={"2rem"} />
        <div className="title">
          <SubredditTitle>Home</SubredditTitle>
        </div>
      </Wrapper>
    );
  } else if (subredditsStatus === "loading") {
    return (
      <Wrapper>
        <Icon></Icon>
        <div className="title" style={{ width: "75%" }}>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={6} />
          </Placeholder>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper 
      id={subredditData.title} 
      onClick={handleSelectSubreddit}
      >
        <Icon subredditIcon={subredditData.icon}></Icon>
        <div className="title">
          <SubredditTitle>{subredditData["display_name"]}</SubredditTitle>
        </div>
      </Wrapper>
    );
  }
};
const Wrapper = styled.button`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.75rem 0;
  padding-left: 1rem;
  border: none;
  :hover {
    border-left: 4px solid #5655f0;
    color: #5655f0;
    background-color: #d8d8fc;
  }
`;
const SubredditTitle = styled.p`
  color: #54;
  margin: 0;
  margin-left: 0.5rem;
  max-width: 100%;
`;
const Icon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 38px;
  background-color: grey;
  margin-right: 0.5rem;
  background-image: url(${(props) => props.subredditIcon});
  background-position: center;
  background-size: 30px 30px;
`;
export default Subreddit;
