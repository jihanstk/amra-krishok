import axios from "axios";

const useDataForPublic = async () => {
  return await axios
    .get("https://api-amra-krishok.vercel.app/farmer")
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
};

export default useDataForPublic;
