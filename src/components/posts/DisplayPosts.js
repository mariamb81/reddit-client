import React from 'react'
import Post from "./Post"
import styled from "styled-components"
import { useSelector } from 'react-redux'
import { selectPosts } from './postsSlice'
const DisplayPosts = () => {
  const posts = useSelector(selectPosts);
  console.log(posts)

  return (
    <Wrapper>
      {posts.map((post, idx) =>
      <div key={idx}>
        <Post postData={post}/>
      </div> 
        
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: white;
  justify-content: center;
  margin: 1rem 0;
`
export default DisplayPosts