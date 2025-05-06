import { useContext } from "react";
import Post from "./Post";

const PostList = () => {
  useContext();
  return (
    <>
      <Post />
      <Post />
      <Post />
    </>
  );
};
export default PostList;
