"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className }) => {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${
        pathName === href ? "text-green-500 activeNav" : "text-white"
      } font-semibold text-xl hover:text-green-400 duration-300 `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
