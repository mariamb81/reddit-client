import React, { useEffect } from "react";
import Post from "./Post";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts, fetchPosts } from "./postsSlice";

const DisplayPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const postsStatus = useSelector((state) => state.posts.status);
  const postsError = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);
  if (postsError) {
    return (
      <div>
        <p>No posts to display</p>
      </div>
    );
  }
  return (
    <Wrapper className="posts-wrapper">
      {posts.map((post, idx) => (
        <div key={idx}>
          <Post postData={post} id={idx} className='post'/>
        </div>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fafafa;
  justify-content: center;
  border-radius: 8px;
`;
export default DisplayPosts;
