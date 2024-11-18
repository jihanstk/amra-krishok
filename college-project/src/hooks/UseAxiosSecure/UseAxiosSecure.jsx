"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useContext, useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3002",
});
const UseAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");

      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // router.push("/login");
          await logOut();
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, router]);

  return [axiosSecure];
};

export default UseAxiosSecure;
