import React from "react";
import Test from "./Test";
import { Title } from "./Styled";
import Bootstrap from "./Bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Tailwind from "./Tailwind";
import { Helmet } from "react-helmet";

const StylesComponent = () => {
  return (
    <Container>
    <Helmet>
      <title>React Tutorial | CSS Framework</title>
    </Helmet>
      <Row>
        <Col xs={12}>
          <Test />
        </Col>
        <Col lg={12}>
          <Row>
            <Col xs={12} lg={6}>
              <Title>Styled Component Title Component</Title>
            </Col>
            <Col xs={12} lg={6}>
              <Title theme="dark">
                Styled Component dark-theme Title Component
              </Title>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Bootstrap></Bootstrap>
        </Col>
        <Col xs={12}>
          <Tailwind />
        </Col>
        <Col xs={12}>
          <div className="sass">
            <h3>SCSS</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StylesComponent;
