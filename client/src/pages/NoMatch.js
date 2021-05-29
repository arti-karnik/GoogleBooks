import React from "react";
import { Col, Row, Container } from "../components/Grid/Grid";

const NoMatch = () => {
  return (
    <Container fluid>
      <Row fluid>
        <Col size="md-12">
          No Match found 
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;