"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { login, user, loading, setLoading } = useContext(AuthContext);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [error, seError] = useState("");
  const searchParams = useSearchParams();
  const prevPath = searchParams.get("continueTO");
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    seError("");
    console.log(data);
    login(data.email, data.password)
      .then((loggedUser) => {
        const user = loggedUser.user;
        console.log(user);
        router.push(prevPath || "/");
      })
      .catch((err) => {
        console.log(err.message);
        seError(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="w-full min-h-screen bg-slate-200 pb-20">
      <div className="md:p-10 p-3 text-center md:w-1/2 w-full mx-auto">
        <h1 className="text-3xl font-bold text-center ">এখানে লগইন করুন</h1>
        <p className=" mx-auto text-slate-500 pt-3">
          আমাদের ওয়েবসাইটের সকল ফিচার পেতে লগইন করুন। না হলে আপনি ক্রয় বিক্রয়
          করতে পারবেন না। আর যদি নতুন ব্যবহারকারি হন তাহলে{" "}
          <span className=" font-bold">রেজিস্টার করুন</span> লেখাই ক্লিক করুন
        </p>
      </div>
      <div className="md:flex md:w-9/12 w-11/12 mx-auto  justify-center  border bg-slate-200 shadow-2xl p-10 rounded-xl mt-16 ">
        <div className="w-full">
          <Image
            className="w-full h-full object-cover rounded-lg"
            width={700}
            height={700}
            src="https://images.pexels.com/photos/460229/pexels-photo-460229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="login image"
          />
        </div>

        <div className="w-full p-5 py-9  rounded-xl">
          <div className="border-b border-slate-300 pb-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="input input-bordered flex items-center gap-2 bg-transparent  mb-4  focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow overflow-hidden"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">this field id required</p>
                )}
              </label>

              <label className="input input-bordered flex items-center gap-2 bg-transparent ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type={show ? "text" : "password"}
                  className="grow overflow-hidden"
                  {...register("password", { required: true })}
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-500">this field is required</p>
                )}
                <p
                  onClick={() => setShow(!show)}
                  className="text-xl cursor-pointer z-20"
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </p>
              </label>
              <p className="my-4">
                আমরা কৃষক এ নতুন ?{" "}
                <Link href="/register" className="text-blue-500 font-semibold">
                  রেজিস্টার করুন
                </Link>{" "}
              </p>
              <div className="mt-4">
                <button
                  disabled={user === 0}
                  className="btn btn-success btn-normal  text-white"
                >
                  <span> লগইন করুন</span>
                  {user !== 0 ? (
                    loading ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </form>
            <p className="text-red-500 my-3">{error}</p>
          </div>
          <div>{/* <SocialLogin useFrom="login" /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
