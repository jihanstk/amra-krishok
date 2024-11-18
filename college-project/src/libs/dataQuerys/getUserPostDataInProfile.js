"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import UseAxiosSecure from "@/hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";

export default function getUserPostDataInProfile(userEmail) {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = UseAxiosSecure();

  const { isPending, error, refetch, data } = useQuery({
    queryKey: ["getPost"],
    queryFn: () =>
      axiosSecure
        .get(`/farmer/${user?.email}`)
        .then((res) => res.data)
        .catch((err) => console.log(err)),
  });

  return [data, refetch, isPending, error];
}
