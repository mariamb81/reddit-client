import React, { useEffect } from "react";
import styled from "styled-components";
import Subreddit from "./Subreddit";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSubreddits,
  fetchSubreddits,
  fetchMoreSubreddits,
} from "./subredditsSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const subredditsStatus = useSelector((state) => state.subreddits.status);
  useEffect(() => {
    if (subredditsStatus === "idle") {
      dispatch(fetchSubreddits());
    }
  }, [subredditsStatus, dispatch]);
  const handleViewMore = () => {
    dispatch(fetchMoreSubreddits());
  };

  return (
    <Wrapper className="sidebar">
      <Title>Subreddits</Title>
      <SubredditsContainer>
        <SubredditDiv>
          <Subreddit type={"Home"} />
        </SubredditDiv>
        {subreddits.map((subreddit, idx) => (
          <SubredditDiv key={idx}>
            <Subreddit type="subreddit" subredditData={subreddit} id={idx} />
          </SubredditDiv>
        ))}
      </SubredditsContainer>
      <ButtonContainer>
        <ViewMoreButton id="view-more-btn" onClick={handleViewMore}>
          <p style={{ margin: "0px" }}>View More</p>
        </ViewMoreButton>
      </ButtonContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: white;
  align-text: center;
  width: 100%;
  border-radius: 8px;
`;
const Title = styled.h3`
  text-align: center;
  padding-top: 1rem;
  margin-bottom: 2rem;
`;
const ViewMoreButton = styled.button`
  background-color: var(--indigo-btn);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1.125rem;
  padding: 0.5rem;
  :hover {
    background-color: #5655f0;
  }
`;
const SubredditsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SubredditDiv = styled.div`
  width: 100%;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.75rem 0;
`;
export default SideBar;
