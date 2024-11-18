import axios from "axios";

export default async function getLatestPost() {
  try {
    const latestPost = await axios.get(`http://localhost:3002/farmer`);

    return latestPost.data.latestPost;
  } catch (error) {
    console.log(error.message);
  }
}
