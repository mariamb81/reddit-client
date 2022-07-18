import React from "react";
import styled from "styled-components";
import { TiHome } from "react-icons/ti";

const Subreddit = ({ subredditData, type = "Home" }) => {
  const selectSubreddit = () => {};
  if (type === "Home") {
    return (
      <Wrapper id="home-btn" onClick={selectSubreddit}>
        <TiHome size={"2rem"} />
        <div className="title">
          <SubredditTitle>Home</SubredditTitle>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper id="subreddit-btn">
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
  border: none;
`;
const SubredditTitle = styled.p`
  color: #54;
  margin: 0;
  margin-left: 0.5rem;
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
