import axios from "axios";

export default async function getLatestPost() {
  try {
    let isLoaded = true;
    const latestPost = await axios.get(
      `https://api-amra-krishok.vercel.app/farmer`
    );
    console.log(latestPost.data.latestPost);
    return [
      latestPost.data.latestPost,
      latestPost.data.latestPost ? true : false,
    ];
  } catch (error) {
    console.log(error.message);
  }
}
