import React from 'react'
import styled from 'styled-components'
import { TbArrowBigDown, TbArrowBigTop} from 'react-icons/tb'
import { MdOutlineModeComment } from 'react-icons/md'

const Post = ({postData, iconImg}) => {
  const authorDateString = `Posted by: ${postData.author} 
  ${postData["time_since_created"].val} 
  ${postData["time_since_created"].unit}${postData["time_since_created"].val > 1 ? "s": ""} ago`;
  return (
    <Wrapper>
      <Header>
        <Subreddit>
          <Icon subredditIcon={postData.subreddit.icon}>

          </Icon>
          <Text>{postData.subreddit.name}</Text>
        </Subreddit>

        <Subtitle>{authorDateString}</Subtitle>
      </Header>
      <h5>{postData.title}</h5>
      <Content>
        {
          postData.media.thumbnail.includes('https') ? 
          <Thumbnail src={postData.media.thumbnail}></Thumbnail> : 
          <></>
        }
      </Content>
      <Footer>
        <Upvotes>
          <Button id='upvote-btn'>
            <TbArrowBigTop size={"1.3rem"}/>
          </Button>
          <Subtitle style={{margin: "0 4px"}}>{postData.score}</Subtitle>
          <Button id='downvote-btn'>
            <TbArrowBigDown size={"1.3rem"}/>
          </Button>
        </Upvotes>
        <CommentsButton id='comment-btn'>
          <MdOutlineModeComment size={"1.3rem"}/> 
          <Subtitle  style={{margin: "0 4px"}}>{postData["num_comments"]} comments</Subtitle>
        </CommentsButton>
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
`
const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: grey;
  margin-right: 0.5rem;
  background-image: url(${props=>props.subredditIcon});
  background-position: center;
  background-size: 30px 30px;
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
const CommentsButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: white;
`
const Button = styled.button`
  border: none;
  background-color: white;
`
const Thumbnail = styled.img`
  width: 100%;
  height: 100%
`
export default Post