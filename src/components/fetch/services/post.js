import { post, get } from "./request";

export const getPosts = () => get("https://jsonplaceholder.typicode.com/posts");


export const getPostDetail = (id) =>
  get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const newPost = (data) =>
  post("https://jsonplaceholder.typicode.com/posts", data);

