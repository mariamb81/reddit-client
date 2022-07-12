import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import DisplayPosts from "./components/DisplayPosts";
import FilterBar from "./components/FilterBar";
// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col sm={4}>
            <SideBar />
          </Col>
          <Col>
            <FilterBar />
            <DisplayPosts/>
          </Col>
        </Row>
      </Container>
  );
}

export default App;
