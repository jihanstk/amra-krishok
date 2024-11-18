"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const UserProfileInfo = () => {
  const { logOut, user } = useContext(AuthContext);
  const [profUser, setProfUser] = useState({});
  useEffect(() => {
    axios
      .get(`https://api-amra-krishok.vercel.app/user/${user?.email}`)
      .then((res) => setProfUser(res.data[0]));
  }, [user]);
  console.log(profUser);
  return (
    <div className="md:mr-16 bg-white md:px-10 py-8 rounded-xl w-11/12 mx-auto">
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          className="w-full h-[13rem] rounded-xl object-cover z-0  "
          src="https://images.pexels.com/photos/1483880/pexels-photo-1483880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="bg-image"
        />
        <div className="absolute w-full h-full bg-black/40 top-0 rounded-xl z-0"></div>
      </div>
      <div className="md:flex gap-8 items-center w-full text-center">
        <div className="-mt-10 z-20 md:ml-10 relative">
          <Image
            width={100}
            height={100}
            className="w-24 h-24 rounded-full object-cover mx-auto border-8 border-white"
            src={profUser?.userPhoto}
            alt="profile image"
          />
        </div>
        <div className="mt-7">
          <p className="text-xl font-semibold text-[#2F8886] first-letter:uppercase">
            {profUser?.name}
          </p>
          <p className="text-[#2F8886]/70 text-sm my-2">{profUser?.userType}</p>
        </div>
        <div className="mt-7">
          <p className="font-semibold">{profUser?.email}</p>
          <p className="text-[#2F8886]/70 text-sm my-2">{profUser?.phone}</p>
        </div>
        <div className="mt-7">
          <button className="btn btn-outline btn-success">Follow</button>
        </div>
        <div className="mt-7">
          <button onClick={() => logOut()} className="btn ">
            SignOut
            <FaLongArrowAltRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
