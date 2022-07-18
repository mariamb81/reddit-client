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

import {
  selectModalIsOpen,
  toggleModal,
} from "./components/comments/commentsSlice";
import { useSelector, useDispatch } from "react-redux";
import CommentsModal from "./components/comments/CommentsModal";
function App() {
  const modalOpen = useSelector(selectModalIsOpen);
  const dispatch = useDispatch();
  if(!modalOpen) {
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
              <DisplayPosts />
            </Col>
          </Row>
        </Container>)
      }
}

export default App;
