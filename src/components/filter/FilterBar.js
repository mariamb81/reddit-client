import React from "react";
import styled from "styled-components";
import { TiHome } from "react-icons/ti";
import { MdOutlineLocalFireDepartment as FireIcon } from "react-icons/md";
import { BiBadge, BiUpArrowAlt } from "react-icons/bi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FilterBar = () => {
  return (
    <Container style={{ backgroundColor: "white", padding: "1rem 0" }}>
      <Row>
        <Col xs={6}>
          <Subreddit>
            <div className="icon">
              <TiHome size={"2rem"} />
            </div>
            <Title>Home</Title>
          </Subreddit>
        </Col>
        <Col xs={6}>
          <FilterButtonContainer>
            <FilterButton id="hot-btn">
              <FireIcon />
              <ButtonText>Hot</ButtonText>
            </FilterButton>
            <FilterButton id="new-btn">
              <BiBadge />
              <ButtonText>New</ButtonText>
            </FilterButton>
            <FilterButton id="top-btn">
              <BiUpArrowAlt />
              <ButtonText>Top</ButtonText>
            </FilterButton>
          </FilterButtonContainer>
        </Col>
      </Row>
    </Container>
  );
};

const Subreddit = styled.div`
  display: flex;
  align-items: center;
  color: #545454;
`;
const Title = styled.h4`
  margin: 0 0.75rem;
`;
const FilterButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #545454;
`;
const FilterButton = styled.button`
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
`;
const ButtonText = styled.p`
  margin: 0;
  margin-left: 2px;
`;
export default FilterBar;
