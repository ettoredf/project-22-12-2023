import React from "react";
import { ButtonGroup, Button, Dropdown, Container } from "react-bootstrap";

function MyMain() {
  return (
    <Container className="genre-details">
      <div className="d-flex">
        <h3 className="text-light me-3 me-md-5">TV Shows</h3>
        <Dropdown as={ButtonGroup} className="genre-button">
          <Button variant="outline-secondary" className="text-white bg-transparent">
            <span className="pe-3">Genres</span>
          </Button>

          <Dropdown.Toggle split variant="outline-secondary" id="dropdown-split-basic" />

          <Dropdown.Menu>
            {}
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div>
        <ButtonGroup aria-label="First group">
          <Button variant="outline-secondary">
            <i className="bi bi-list"></i>
          </Button>
          <Button variant="outline-secondary">
            <i className="bi bi-grid"></i>
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default MyMain;
