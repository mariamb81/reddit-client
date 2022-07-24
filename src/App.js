import "./App.css";
import "./buttons.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/subreddits/SideBar";
import DisplayPosts from "./components/posts/DisplayPosts";
import FilterBar from "./components/filter/FilterBar";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function App() {
  return (
    <Container fluid>
      <Row>
        <NavBar />
      </Row>
      <Row className="content">
        <Col sm={4}>
          <SideBar />
        </Col>
        <Col style={{margin: " 0 1rem"}}>
          <FilterBar />
          <DisplayPosts />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
