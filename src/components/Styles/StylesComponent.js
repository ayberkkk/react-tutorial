import React from "react";
import Test from "./Test";
import { Title } from "./Styled";
import Bootstrap from "./Bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Tailwind from "./Tailwind";

const StylesComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Test />
        </Col>
        <Col xs={12}>
          <Title>Styled Title Component</Title>
        </Col>
        <Col xs={12}>
          <Title theme="dark">Styled Dark Title Component</Title>
        </Col>
        <Col xs={12}>
          <Bootstrap></Bootstrap>
        </Col>
        <Col xs={12}>
          <Tailwind />
        </Col>
        <Col xs={12}>
          <p className="sass-p">Sass Style</p>
        </Col>
      </Row>
    </Container>
  );
};

export default StylesComponent;
