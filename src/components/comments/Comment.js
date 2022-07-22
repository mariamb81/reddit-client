import React from "react";
import styled from "styled-components";
import "./getComments";
import { useSelector } from "react-redux";
import { selectCommentsStatus } from "./commentsSlice";
import { formatTSC } from "../../functions/utilities";
import Placeholder from "react-bootstrap/Placeholder";
const Comment = ({ commentData }) => {
  const commentsStatus = useSelector(selectCommentsStatus);
  if (commentsStatus !== "loading") {
    return (
      <Wrapper>
        <Username>{commentData.author}</Username>
        <Subtitle>{formatTSC(commentData["time_since_created"])}</Subtitle>
        <CommentText>{commentData.body}</CommentText>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={6} bg="secondary" />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={8} bg="secondary" />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={12} bg="secondary" />
      </Placeholder>
      <Placeholder as="p" animation="wave">
        <Placeholder xs={8} bg="secondary" />
      </Placeholder>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  line-height: 1;
  margin: 8px 0;
  background-color: white;
  border-bottom: 1px solid grey;
`;
const Username = styled.p`
  font-size: 14px;
  color: #5655f0;
`;
const Subtitle = styled.p`
  font-size: 12px;
  color: #545454;
`;
const CommentText = styled.p`
  font-size: 14px;
`;
export default Comment;
