import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h2>Commit History: {owner}/{repo}</h2>
      <ul>
        {commits.map((commit) => (
          <li key={commit.sha}>{commit.commit.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommitHistory;
