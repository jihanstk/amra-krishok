import axios from "axios";

export default async function getLatestPost() {
  try {
    const latestPost = await axios.get(
      `https://api-amra-krishok.vercel.app/farmer`
    );

    return latestPost.data.latestPost;
  } catch (error) {
    console.log(error.message);
  }
}
