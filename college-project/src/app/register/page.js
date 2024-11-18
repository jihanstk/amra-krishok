"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import { app } from "@/libs/firebase.config";
import axios from "axios";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi2";

const register = () => {
  const { signUp, updateUserName, loading, setLoading } =
    useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setError("");

    const storage = getStorage(app);
    const fileName = new Date().getTime() + data.userPhoto[0].name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, data.userPhoto[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      (error) => {
        setError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          signUp(data.email, data.password)
            .then((loggedUser) => {
              const user = loggedUser.user;
              updateUserName(user, data.name, downloadUrl)
                .then(() => {
                  console.log("user name is updated ");
                  const userData = {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    userPhoto: downloadUrl,
                    userType: data.userType,
                    flower: 0,
                  };
                  axios
                    .post("https://api-amra-krishok.vercel.app/user", userData)
                    .then((res) => {
                      console.log(res);
                      router.push("/");
                    });
                })
                .catch((err) => console.log(err.message));
            })
            .catch((err) => {
              console.log(err.message);
              if (
                err.message === "Firebase: Error (auth/email-already-in-use)."
              ) {
                setError(
                  "আপনার এই ইমেইল এ অ্যাকাউন্ট আছে, অন্য ইমেইল এ চেষ্টা করুন"
                );
              } else {
                setError(err.message);
              }
              setLoading(false);
            });
        });
      }
    );
  };

  return (
    <div className="w-full min-h-screen pb-32 bg-slate-200">
      <div className="md:p-10 px-4 py-7 text-center sm:w-1/2 mx-auto">
        <h1 className="sm:text-3xl text-xl font-bold text-center ">
          এখানে রেজিস্টার করুন
        </h1>
        <p className=" text-sm sm:text-md  text-slate-500 pt-3">
          আমাদের ওয়েবসাইটের সকল ফিচার পেতে রেজিস্টার করুন। না হলে আপনি
          ক্রয়-বিক্রয় করতে পারবেন না। আর যদি পুরাতন ব্যবহারকারি হন তাহলে{" "}
          <span className=" font-bold">লগইন করুন</span> লেখাই ক্লিক করুন
        </p>
      </div>
      <div className="md:flex sm:w-9/12 w-11/12 mx-auto  justify-center  border bg-slate-200 shadow-2xl sm:p-10 p-4 rounded-xl mt-16 ">
        <div className="w-full">
          <Image
            className="w-full h-full object-cover rounded-lg"
            width={700}
            height={700}
            priority={true}
            src="https://images.pexels.com/photos/460229/pexels-photo-460229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="login image"
          />
        </div>

        <div className="w-full sm:p-5 py-9  rounded-xl">
          <div className="border-b border-slate-300 pb-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="input input-bordered flex items-center gap-2 bg-transparent  mb-4  focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow overflow-hidden"
                  placeholder="আপনার নাম লিখুন"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <p className="text-red-500">this field id required</p>
                )}
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-transparent  mb-4  focus:outline-none">
                <HiOutlinePhone />

                <input
                  type="text"
                  className="grow overflow-hidden"
                  placeholder="আপনার মোবাইল নাম্বার লিখুন"
                  {...register("phone", { required: true })}
                  maxLength={14}
                />
                {errors.phone && (
                  <p className="text-red-500">this field id required</p>
                )}
              </label>
              <label className="  flex items-center gap-2 bg-transparent  mb-4  focus:outline-none">
                <input
                  type="file"
                  className="file-input w-full  bg-transparent cursor-pointer "
                  {...register("userPhoto", { required: true })}
                />

                {errors.userPhoto && (
                  <p className="text-red-500">this field id required</p>
                )}
              </label>
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
                  placeholder="আপনার ইমেইল টি দিন"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">this field id required</p>
                )}
              </label>
              <select
                {...register("userType", { required: true })}
                className="select select-info border-slate-300 w-full mb-3 bg-transparent"
              >
                <option disabled defaultValue="">
                  কি হিসাবে রেজিস্টার করেত চান?
                </option>
                <option>seller</option>
                <option>buyer</option>
              </select>

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
                  placeholder="আপনার পাসওয়ার্ড টি দিন"
                  minLength={6}
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
                আমরা কৃষক এ পুরাতন ?{" "}
                <Link href="/login" className="text-blue-500 font-semibold">
                  লগইন করুন।
                </Link>{" "}
              </p>
              <div className="mt-4">
                <button className="btn btn-success btn-normal  text-white">
                  <span> রেজিস্টার করুন</span>
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    " "
                  )}
                </button>
              </div>
            </form>
            <p className="text-red-500 my-3">{error}</p>
          </div>
          <div>{/* <SocialLogin /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default register;
