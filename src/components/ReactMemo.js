import { memo } from "react";
import { Container, Row, Col } from "react-bootstrap";

const ReactMemo = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h4>React.memo(Optimizer)</h4>
          <p>
            In this example, the memo function is imported from the react
            package, and only the function's name is imported. The memo function
            wraps the component to control the output in the cache and prevent
            unnecessary re-rendering processes.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ReactMemo);
