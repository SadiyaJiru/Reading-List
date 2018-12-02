import React from "react";
import { Col, Row, Container } from "../components/gridLayout";
import Jumbotron from "../components/jumbotron";

//This should only render if no other routes are matched.
function noMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default noMatch;
