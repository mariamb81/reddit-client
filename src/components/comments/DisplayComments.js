import React from "react";
import Comment from "./Comment";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectCommentsStatus, selectComments } from "./commentsSlice";
const DisplayComments = () => {
  const comments = useSelector(selectComments);
  const commentsStatus = useSelector(selectCommentsStatus);
  if ((commentsStatus !== "idle") | (commentsStatus !== "loading")) {
    return (
      <Wrapper>
        {comments.map((comment, idx) => (
          <div key={idx}>
            <Comment commentData={comment} />
          </div>
        ))}
      </Wrapper>
    );
  } else if (commentsStatus === "loading") {
    return (
      <Wrapper>
        <p>Loading...</p>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <p>No Comments Available</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  background-color: white;
`;
export default DisplayComments;
