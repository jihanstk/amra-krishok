"use client";
import NavLink from "@/components/common/NavLink/NavLink";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

import { AuthContext } from "@/AuthProvider/AuthProvider";
import { usePathname } from "next/navigation";
import logo from "../../../../public/Untitled-1.png";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const pathname = usePathname();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  useEffect(() => {
    const navBarInter = document.querySelector(".navBarInter");
    let lastScrollY = 0;
    if (window.scrollY >= 340) {
      navBarInter.classList.add("changeNavColor");
      navBarInter.classList.add("navHideOnScroll");
    }
    const scrollEffect = () => {
      let currentScroll = window.pageYOffset;

      if (window.scrollY >= 340) {
        navBarInter.classList.add("changeNavColor");
        navBarInter.classList.add("navHideOnScroll");
      } else {
        navBarInter.classList.remove("changeNavColor");
      }
      if (currentScroll > lastScrollY) {
        navBarInter.classList.add("navHideOnScroll");
      } else if (currentScroll < lastScrollY || lastScrollY <= 0) {
        navBarInter.classList.remove("navHideOnScroll");
      }
      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", scrollEffect);

    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  }, []);

  const navLists = [
    {
      title: "হোম",
      Path: "/",
    },
    {
      title: "আমাদের সম্পর্কে",
      Path: "/about",
    },
    {
      title: "বিক্রেতা",
      Path: "/seller",
    },
    {
      title: "ক্রেতা",
      Path: "/buyer",
    },
  ];
  return (
    <div
      className={` fixed z-50  px-10 py-2 w-full ${
        pathname === "/" || pathname === "/about" ? "bg-green-800/20" : "navraw"
      } navBarInter duration-500`}
    >
      <div className="flex justify-between items-center">
        <div className="">
          <Link href="/">
            {" "}
            <Image
              height={100}
              width={100}
              className="h-16 w-16"
              src={logo}
              alt="agriculture Logo"
            />
          </Link>
        </div>
        <nav>
          <ul
            className={`md:flex  gap-6 fixed md:static duration-300 w-full md:w-auto h-[100dvh] overflow-y-scroll md:h-auto py-10 pt-24 md:py-0  bg-green-950 md:bg-transparent z-50 ${
              open ? " left-0 top-0 " : "-left-[500rem] top-0"
            }`}
          >
            <li
              onClick={() => setOpen(!open)}
              className="absolute top-8 right-10 text-white text-3xl md:hidden cursor-pointer inline "
            >
              <RxCross1 />
            </li>
            {navLists.map((list, i) => {
              return (
                <NavLink href={list.Path} key={i} className="text-white">
                  <li className="z-20 mb-20 md:mb-0 ml-10 md:ml-auto text-xl md:text-lg  ">
                    {list.title}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </nav>
        <div className="flex justify-between items-center gap-7">
          {user ? (
            <Link className="" href="/dashboard">
              <Image
                width={70}
                height={70}
                className="rounded-full w-12 h-12 object-cover"
                src={
                  user?.photoURL ||
                  "https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?b=1&s=612x612&w=0&k=20&c=PdCpqqV_hmKlW0o8t2TPwDEnOWBGSybOE4NiB8CvwoE="
                }
                alt="profile"
              />
            </Link>
          ) : (
            <Link className="" href="/login">
              <button className=" btn btn-success text-white">Login</button>
            </Link>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-white duration-500 md:hidden inline "
          >
            {open ? (
              <RxCross1 className="duration-500" />
            ) : (
              <FaBars className="duration-500" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
