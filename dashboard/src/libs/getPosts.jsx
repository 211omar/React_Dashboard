import {  useEffect, useState } from "react";

const api = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const getItems = async () => {
      try {
        const req = await fetch(api);
        const res = await req.json();
        setPosts(res);
      } catch (error) {
        console.error('error happend',error)
      }
    };
    getItems()
  }, []);
  return posts
};
