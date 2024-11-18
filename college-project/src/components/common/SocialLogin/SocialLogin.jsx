import { AuthContext } from "@/AuthProvider/AuthProvider";
import axios from "axios";
import { useContext, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = ({ useFrom }) => {
  const [isSavedUser, setIsSavedUser] = useState([]);
  const { googleLogin } = useContext(AuthContext);
  // const router = useRouter();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        const user = result.user;
        axios
          .get(`https://api-amra-krishok.vercel.app/user/${user?.email}`)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err.message));

        // if (user) {
        //   router.push();
        // }
      })
      .catch((err) => console.log(err));
  };
  console.log(isSavedUser);

  return (
    <div className="flex">
      <FcGoogle
        onClick={handleGoogleLogin}
        className="text-3xl rounded-full border border-slate-300 m-3 p-4 w-16 h-16 text-center hover:bg-slate-100 cursor-pointer duration-300"
      />
      <BsFacebook className="text-3xl rounded-full border border-slate-300 text-blue-700 m-3 p-4 w-16 h-16 text-center hover:bg-slate-100 cursor-pointer duration-300" />
    </div>
  );
};

export default SocialLogin;
