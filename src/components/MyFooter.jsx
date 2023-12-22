import React from "react";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";

function MyFooter() {
  return (
    <Container>
      <footer>
        <Row>
          <Col xs={3}>
            <ListGroup>
              <ListGroup.Item className="bg-transparent border-0">
                <i className="bi bi-facebook fs-4"></i>
                <i className="bi bi-instagram fs-4"></i>
                <i className="bi bi-twitter fs-4"></i>
                <i className="bi bi-youtube fs-4"></i>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Audio and Subtitles
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Media Center
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Privacy
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Contact Us
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="mt-2">
                <Button variant="outline-secondary">Service Code</Button>
              </ListGroup.Item>
              <ListGroup.Item className="mt-2">
                <a className="nav-link text-muted" href="https://google.com/">
                  © 1997-2021 Netflix Inc
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={3}>
            <ListGroup>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Audio Description
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Investor Relations
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Legal Notices
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={3}>
            <ListGroup>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Help Center
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Jobs
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Cookie Preferences
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={3}>
            <ListGroup>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Gift Cards
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Terms Of Use
                </a>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent border-0">
                <a className="nav-link text-muted" href="https://google.com/">
                  Corporate Information
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default MyFooter;
