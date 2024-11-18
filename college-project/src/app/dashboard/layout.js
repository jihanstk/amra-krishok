"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import AuthShild from "@/components/common/AuthShild/AuthShild";
import NavLinkDash from "@/components/common/NavLinkDash/NavLinkDash";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaArrowRight, FaRegBookmark } from "react-icons/fa6";
import { GrUserManager } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";

import { MdManageAccounts } from "react-icons/md";
import logo from "../../../public/Untitled-1.png";

const Dashboard = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(true);
  const [profUser, setProfUser] = useState({});

  console.log(user);
  console.log(loading);
  useEffect(() => {
    axios
      .get(`https://api-amra-krishok.vercel.app/user/${user?.email}`)
      .then((res) => setProfUser(res.data[0]));
  }, [user]);
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  if (user === 0) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <div className="flex flex-col gap-4 w-52">
          <div className="flex gap-4 items-center">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthShild />;
  }

  const dashFarmerLists = [
    {
      title: "হোম",
      path: "/",
      icon: <IoHomeOutline />,
    },
    {
      title: "প্রোফাইল",
      path: "/dashboard",
      icon: <GrUserManager />,
    },
    {
      title: "ফিডব্যাক",
      path: "/dashboard/feedback",
      icon: <VscFeedback />,
    },

    {
      title: "সেভ",
      path: "/dashboard/save",
      icon: <FaRegBookmark />,
    },
  ];
  const dashCommonLists = [
    {
      title: "হোম",
      path: "/",
      icon: <IoHomeOutline />,
    },
    {
      title: "প্রোফাইল",
      path: "/dashboard",
      icon: <GrUserManager />,
    },
  ];
  const dashBuyerLists = [
    {
      title: "হোম",
      path: "/",
      icon: <IoHomeOutline />,
    },
    {
      title: "প্রোফাইল",
      path: "/dashboard/seller",
      icon: <GrUserManager />,
    },
    {
      title: "ফিডব্যাক",
      path: "/dashboard/feedback",
      icon: <VscFeedback />,
    },

    {
      title: "সেভ",
      path: "/dashboard/save",
      icon: <FaRegBookmark />,
    },
  ];
  const dashAdminLists = [
    {
      title: "হোম",
      path: "/",
      icon: <IoHomeOutline />,
    },
    {
      title: "প্রোফাইল",
      path: "/dashboard/admin",
      icon: <GrUserManager />,
    },
    {
      title: "সেভ",
      path: "/dashboard/save",
      icon: <FaRegBookmark />,
    },
    {
      title: "ব্যবহারকরি নিয়ন্ত্রণ",
      path: "/dashboard/user-control",
      icon: <MdManageAccounts />,
    },
  ];
  return (
    <div className="flex">
      <div
        className={`h-[100dvh] overflow-scroll duration-300 fixed ${
          isOpen
            ? "lg:w-[250px] w-full lg:left-0 -left-[100rem]"
            : "lg:w-[100px] sm:w-1/2 w-full left-0 "
        }  bg-[#2F8886] z-[80]`}
      >
        <div className=" md:text-xl font-bold text-white border-b border-slate-400 py-4 px-2 ">
          <button
            className=" absolute right-6 lg:hidden block "
            onClick={() => setIsOpen(!isOpen)}
          >
            X
          </button>
          <Link href="/" className="flex items-center mt-10 m">
            <Image className="w-16 h-16" src={logo} alt="logo" />
            <span
              className={`pl-3 duration-300 ${
                !isOpen ? "md:hidden" : "inline"
              }`}
            >
              আমরা কৃষক
            </span>
          </Link>
        </div>
        <nav>
          <ul>
            {profUser?.userType === "seller"
              ? dashFarmerLists.map((list, i) => (
                  <li key={i} className="">
                    <NavLinkDash key={i} href={list.path}>
                      <span className="text-2xl">{list.icon}</span>{" "}
                      <span
                        className={`pl-2 ${!isOpen ? "lg:hidden" : "inline"}`}
                      >
                        {list.title}
                      </span>
                    </NavLinkDash>
                  </li>
                ))
              : profUser?.userType === "buyer"
              ? dashBuyerLists.map((list, i) => (
                  <li key={i} className="">
                    <NavLinkDash key={i} href={list.path}>
                      <span className="text-2xl">{list.icon}</span>{" "}
                      <span
                        className={`pl-2 ${!isOpen ? "lg:hidden" : "inline"}`}
                      >
                        {list.title}
                      </span>
                    </NavLinkDash>
                  </li>
                ))
              : profUser?.userType === "admin"
              ? dashAdminLists.map((list, i) => (
                  <li key={i} className="">
                    <NavLinkDash key={i} href={list.path}>
                      <span className="text-2xl">{list.icon}</span>{" "}
                      <span
                        className={`pl-2 ${!isOpen ? "lg:hidden" : "inline"}`}
                      >
                        {list.title}
                      </span>
                    </NavLinkDash>
                  </li>
                ))
              : dashCommonLists.map((list, i) => (
                  <li key={i} className="">
                    <NavLinkDash key={i} href={list.path}>
                      <span className="text-2xl">{list.icon}</span>{" "}
                      <span
                        className={`pl-2 ${!isOpen ? "lg:hidden" : "inline"}`}
                      >
                        {list.title}
                      </span>
                    </NavLinkDash>
                  </li>
                ))}
            {/* {dashBuyerLists.map((list, i) => (
              <li className="">
                <NavLinkDash key={i} href={list.path}>
                  <span className="text-2xl">{list.icon}</span>{" "}
                  <span className={`pl-2 ${!isOpen ? "lg:hidden" : "inline"}`}>
                    {list.title}
                  </span>
                </NavLinkDash>
              </li>
            ))} */}
          </ul>
        </nav>
      </div>
      <div
        className={`absolute duration-300 ${
          isOpen
            ? "lg:left-[250px] lg:w-[calc(100%-250px)] w-full"
            : "lg:left-[100px]  lg:w-[calc(100%-100px)] w-full"
        } `}
      >
        <div
          className={`flex justify-between items-center px-10 shadow-lg fixed top-0 duration-300 ${
            isOpen
              ? "lg:w-[calc(100%-250px)] w-full"
              : "lg:w-[calc(100%-100px)] w-full"
          }  z-50 py-4 bg-slate-200`}
        >
          <div className=" cursor-pointer ">
            {!isOpen ? (
              <FaArrowRight
                onClick={() => setIsOpen(!isOpen)}
                className="text-xl text-[#2F8886] duration-500"
              />
            ) : (
              <FaBars
                onClick={() => setIsOpen(!isOpen)}
                className="text-xl text-[#2F8886] duration-500"
              />
            )}
          </div>
          <div className=" md:block hidden">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="flex gap-4">
            <p className="text-right md:block hidden">
              <span className="text-lg font-semibold block">
                {profUser?.name}
              </span>
              <span className="text-slate-400">{profUser?.email}</span>
            </p>
            <Image
              className="md:w-16 w-10 md:h-16 h-10 rounded-full md:rounded-xl object-cover"
              width={100}
              height={100}
              src={profUser?.userPhoto}
              alt="user"
            />
          </div>
        </div>
        <div className=" pt-32 md:pl-10 bg-slate-200 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
