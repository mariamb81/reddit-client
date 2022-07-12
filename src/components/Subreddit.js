import React from 'react'
import styled from 'styled-components'
// import { TiHome } from 'react-icons/ti'

const Subreddit = ({title}) => {
  return (
    <Wrapper>
        <Icon>
        </Icon>
        <div className='title'>
            <SubredditTitle>{title}</SubredditTitle>
        </div>
    </Wrapper>

  )
}
const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.75rem 0;
`;
const SubredditTitle = styled.p`
    color: #54;
    margin: 0;
`;
const Icon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 38px;
  background-color: grey;
  margin-right: 0.5rem;
`
export default Subreddit