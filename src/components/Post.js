import React from 'react'
import styled from 'styled-components'
import { TbArrowBigDown, TbArrowBigTop} from 'react-icons/tb'
import { MdOutlineModeComment } from 'react-icons/md'
const Post = () => {
  return (
    <Wrapper>
      <Header>
        <Subreddit>
          <Icon></Icon>
          <Text>r/Subreddit</Text>
        </Subreddit>

        <Subtitle>Posted by: name # hours ago</Subtitle>
      </Header>
      <h5>Title</h5>
      <Content>

      </Content>
      <Footer>
        <Upvotes>
          <TbArrowBigTop size={"1.3rem"}/>
          <Subtitle style={{margin: "0 4px"}}>###</Subtitle>
          <TbArrowBigDown size={"1.3rem"}/>
        </Upvotes>
        <Comments>
          <MdOutlineModeComment size={"1.3rem"}/> 
          <Subtitle  style={{margin: "0 4px"}}># comments</Subtitle>
        </Comments>
      </Footer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: white;
  padding: 30px 50px;
  --grey-primary: #545454;
`
const Header = styled.div`
  margin-bottom: 1rem;
`
const Content = styled.div`
  background-color: grey;
  aspect-ratio: 3/2;
`
const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: grey;
  margin-right: 0.5rem;
`
const Subreddit = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
`
const Text = styled.p`
  margin: 0;
`
const Subtitle = styled.p`
  font-size: 12px;
  color: var(--grey-primary);
  margin: 0;
`
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  color: var(--grey-primary);
`
const Upvotes = styled.div`
  display: flex;
  align-items: center;
`
const Comments = styled.div`
  display: flex;
  align-items: center;
`
export default Post