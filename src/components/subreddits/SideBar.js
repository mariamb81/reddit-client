import React from "react";
import styled from "styled-components"
import Subreddit from "./Subreddit"; 
import { useSelector } from "react-redux";
import { selectSubreddits } from "./subredditsSlice";

const SideBar = () => {
  const subreddits = useSelector(selectSubreddits);
  return(  
    <Wrapper>
      <Title>Subreddits</Title>
      <SubredditsContainer>
        <SubredditDiv>
          <Subreddit 
          type={"Home"}
          />
        </SubredditDiv>
        {
          subreddits.map((subreddit, idx) => 
          <SubredditDiv key={idx}>
          <Subreddit 
          type="subreddit"
          subredditData={subreddit}
          />
          </SubredditDiv>

        )
        }
      </SubredditsContainer>
      <ButtonContainer>
        <ViewMoreButton id="view-more-btn">
          <h5 style={{margin: "0px"}}>View More</h5>
        </ViewMoreButton>
      </ButtonContainer>

    </Wrapper>
    );
};
const Wrapper = styled.div`
  background-color: white;
  align-text: center;
  width: 100%;
`
const Title = styled.h3`
  text-align: center;
  padding-top: 1rem;
  margin-bottom: 2rem;
`
const ViewMoreButton = styled.button`
  background-color: var(--indigo-btn);
  color: white;
  border: none;
  border-radius: 20px;
  padding: .5rem;
`
const SubredditsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const SubredditDiv = styled.div`
  width: 100%;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.75rem 0;
`
export default SideBar;
