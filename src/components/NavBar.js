import React from "react";
import styled from "styled-components";
import SearchBar from "./search/SearchBar";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { BsToggleOn, BsToggleOff } from 'react-icons/bs'
import { FiMoreVertical } from "react-icons/fi";
const NavBar = () => {
  return (
    <Container style={{ backgroundColor: "white", padding: "1rem" }}>
      <Row>
        <Col sm={4} xs={12}>
          <LogoDiv>
            <Logo src={logo} alt="logo" />
            <LogoTitle>RedditLite</LogoTitle>
          </LogoDiv>
        </Col>
        <Col sm={7} xs={9}>
          <SearchBar />
        </Col>
        <Col sm={1} xs={2} style={{ display: "flex", alignItems: "center" }}>
          <Information
            id="information"
            aria-describedby="see more information about this app"
            href="https://github.com/mariamb81/reddit-client#what-it-does"
            target="_blank"
          >
            <FiMoreVertical size={"2em"} />
          </Information>
        </Col>
      </Row>
    </Container>
  );
};
const LogoDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;
const LogoTitle = styled.h2`
  margin: 0 10px;
  padding: 0;
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
`;
const Information = styled.a`
  width: 100%;
  height: fit-content;
  background-color: white;
  border: none;
  color: #545454 !important;
  :hover {
    color: black;
  }
`;

export default NavBar;
