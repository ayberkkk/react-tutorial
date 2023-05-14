import React, { useEffect, useState } from "react";
import { PostService, UserService } from "./services";

const Fetch = () => {
  const [users, setUsers] = useState(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", "Bearer abork1234567890");

//   const addPost = (data) => {
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: headers,
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.log(error));
//   };

  useEffect(() => {
    PostService.getPosts().then((res) => console.log(res));
    PostService.getPostDetail(2).then((res) => console.log(res));
    PostService.newPost({
      userId: 3,
      title: "test",
      body: "test",
    }).then((res) => console.log(res));
    UserService.getUsers().then((res) => setUsers(res));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", avatar);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            name="avatar"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!name || !avatar}
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
      <h4>UserList</h4>
      <ul>
        {users &&
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ul>
    </>
  );
};

export default Fetch;
