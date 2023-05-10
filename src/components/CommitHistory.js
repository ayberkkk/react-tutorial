import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const CommitHistory = ({ owner, repo }) => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${owner}/${repo}/commits`
        );
        setCommits(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCommits();
  }, [owner, repo]);

  return (
    <Container>
      <Row>
        <Col>
          <h4>
            Commit History: {owner}/{repo}
          </h4>
          <ul>
            {commits.map((commit) => (
              <li key={commit.sha}>{commit.commit.message}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default CommitHistory;
