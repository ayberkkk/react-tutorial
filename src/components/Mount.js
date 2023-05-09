import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Mount = () => {
  const [post, setPost] = useState({});
  const [postID, setPostID] = useState(1);
  const [allowNegative, setAllowNegative] = useState(false);

  useEffect(() => {
    console.log("component will run when first loaded");
    return () => {
      console.log("component destroyed");
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postID]);

  const increasePost = () => {
    setPostID(postID + 1);
  };

  const decreasePost = () => {
    if (allowNegative || postID > 0) {
      setPostID(postID - 1);
    }
  };

  const toggleAllowNegative = () => {
    setAllowNegative(!allowNegative);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col lg="6">
          <div className="flex justify-center">
            <button className="btn btn-outline-success" onClick={increasePost}>
              Next
            </button>
            <button
              className="btn btn-outline-danger ml-4"
              onClick={decreasePost}
            >
              Back
            </button>
            <button
              className={`btn ml-4 ${
                allowNegative ? "btn-danger" : "btn-success"
              }`}
              onClick={toggleAllowNegative}
            >
              {allowNegative ? "Disable Negative" : "Enable Negative"}
            </button>
          </div>
          <div className="text-center mt-1">
            <p>Post ID: {postID}</p>
          </div>
        </Col>
        <Col lg="6">{post && JSON.stringify(post)}</Col>
      </Row>
    </Container>
  );
};

export default Mount;
