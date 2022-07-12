import React from 'react'
import Post from "./Post"
import styled from "styled-components"

const DisplayPosts = () => {
  return (
    <Wrapper>
        <Post />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: white;
  justify-content: center;
  margin: 1rem 0;
`
export default DisplayPosts