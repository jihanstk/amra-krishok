import axios from "axios";

const useDataForPublic = async () => {
  return await axios
    .get("http://localhost:3002/farmer")
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
};

export default useDataForPublic;
