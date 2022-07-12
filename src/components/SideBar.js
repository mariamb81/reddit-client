import React from "react";
import styled from "styled-components"
import Subreddit from "./Subreddit"; 

const SideBar = () => {
  return(  
    <Wrapper>
      <Title>Subreddits</Title>
      <SubredditContainer>
          <Subreddit 
          title={"Home"}
          />
      </SubredditContainer>
      <ButtonContainer>
        <ViewMoreButton>
          <h5>View More</h5>
        </ViewMoreButton>
      </ButtonContainer>

    </Wrapper>
    );
};
const Wrapper = styled.div`
  background-color: white;
  align-text: center;
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
const SubredditContainer = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.75rem 0;
`
export default SideBar;
