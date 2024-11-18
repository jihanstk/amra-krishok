"use client";
import { redirect, usePathname } from "next/navigation";

const AuthShild = () => {
  const pathname = usePathname();
  redirect(`/login?continueTO=${pathname}`);
};

export default AuthShild;
