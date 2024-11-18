import { AuthContext } from "@/AuthProvider/AuthProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const getUser = () => {
  const { user } = useContext(AuthContext);
  const [profUser, setProfUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://api-amra-krishok.vercel.app/user/${user?.email}`)
      .then((res) => setProfUser(res.data[0]));
  }, [user]);
  return profUser;
};

export default getUser;
