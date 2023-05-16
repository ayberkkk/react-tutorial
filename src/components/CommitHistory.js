import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { DiReact } from "react-icons/di";
import { Helmet } from "react-helmet";

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
        <Helmet>
        <title>React Tutorial | Commit History</title>
      </Helmet>
      <Row>
        <Col>
          <h4>
            Commit History: {owner}/{repo}
          </h4>
          <ul style={{padding:"0"}}>
            {commits.map((commit) => (
              <li key={commit.sha} className="flex align-items-center mt-1">
                <DiReact className="text-blue-500" style={{fontSize:"24px"}}/>
                <a
                  href={commit.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-gray-700"
                >
                  {commit.commit.message}
                </a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default CommitHistory;