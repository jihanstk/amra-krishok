import axios from "axios";

export default async function getSinglePost(postId) {
  try {
    const latestPost = await axios.get(`http://localhost:3002/posts/${postId}`);

    return latestPost.data[0];
  } catch (error) {
    console.log(error.message);
  }
}
