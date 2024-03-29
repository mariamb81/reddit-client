import React from "react";
import styled from "styled-components";
import { TiHome } from "react-icons/ti";
import { MdOutlineLocalFireDepartment as FireIcon } from "react-icons/md";
import { BiBadge, BiUpArrowAlt } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentSubreddit } from "../subreddits/subredditsSlice";
import { fetchPostsByFilter } from "../posts/postsSlice";
const FilterBar = () => {
  const dispatch = useDispatch();
  const currentSubreddit = useSelector(selectCurrentSubreddit);
  const currentSubredditIcon = useSelector(
    (state) => state.subreddits.currentSubredditIcon
  );
  const handlefilterCurrentSubreddit = (filter) => {
    if (currentSubreddit !== "Home") {
      dispatch(
        fetchPostsByFilter({
          subreddit: currentSubreddit,
          filter: filter,
        })
      );
    }
  };
  const renderBreadcrumb = () => {
    if (currentSubreddit === "Home") {
      return (
        <Subreddit>
          <div className="icon">
            <TiHome size={"2rem"} />
          </div>
          <Title>Home</Title>
        </Subreddit>
      );
    }
    if (currentSubreddit === null) {
      return <div></div>;
    }
    return (
      <Subreddit>
        <Icon subredditIcon={currentSubredditIcon}></Icon>
        <Title>{currentSubreddit}</Title>
      </Subreddit>
    );
  };
  return (
    <Container style={containerStyles} className="filterbar">
      <Row>
        <Col sm={7}>{renderBreadcrumb()}</Col>
        <Col sm={5}>
          <FilterButtonContainer>
            <Row>
              <Col sm={4} xs={4}>
                <HotButton
                  id="hot-btn"
                  onClick={() => handlefilterCurrentSubreddit("hot")}
                >
                  <FireIcon />
                  <ButtonText>Hot</ButtonText>
                </HotButton>
              </Col>
              <Col sm={4} xs={4}>
                <NewButton
                  id="new-btn"
                  onClick={() => handlefilterCurrentSubreddit("new")}
                >
                  <BiBadge />
                  <ButtonText>New</ButtonText>
                </NewButton>
              </Col>
              <Col sm={4} xs={4}>
                <TopButton
                  id="top-btn"
                  onClick={() => handlefilterCurrentSubreddit("top")}
                >
                  <BiUpArrowAlt />
                  <ButtonText>Top</ButtonText>
                </TopButton>
              </Col>
            </Row>
          </FilterButtonContainer>
        </Col>
      </Row>
    </Container>
  );
};
const containerStyles = {
  backgroundColor: "white",
  padding: "1rem 1rem",
  borderRadius: "8px",
  width: "100%",
};
const Subreddit = styled.div`
  display: flex;
  align-items: center;
  color: #545454;
`;
const Icon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 38px;
  background-color: grey;
  margin-right: 0.5rem;
  background-image: url(${(props) => props.subredditIcon});
  background-position: center;
  background-size: 30px 30px;
`;
const Title = styled.h4`
  margin: 0 0.75rem;
`;
const FilterButtonContainer = styled.div`
  width: 100%;
  color: #545454;
  padding-right: 1rem;
`;
const HotButton = styled.button`
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  border: none;
  :hover,
  :focus {
    background-color: #ffcb99;
    color: #c43c00;
  }
  background-color: white;
`;
const NewButton = styled.button`
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  :hover,
  :focus {
    color: #a19101;
    background-color: #fffb99;
  }
`;
const TopButton = styled.button`
  display: flex;
  width: 100%;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  :hover,
  :focus {
    background-color: #cbd5ff;
    color: #0039cb;
  }
`;
const ButtonText = styled.p`
  margin: 0;
  margin-left: 2px;
`;
export default FilterBar;
