"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinkDash = ({ href, children }) => {
  const pathName = usePathname();
  return (
    <Link href={href} className={` text-white  font-bold `}>
      <div
        className={`py-5 mt-10  px-10 flex items-center  common-link hover:rounded-bl-full duration-500 hover:rounded-tl-full hover:bg-slate-200 hover:text-black ${
          pathName === href ? "active" : ""
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default NavLinkDash;
