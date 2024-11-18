"use client";
import UseAxiosSecure from "@/hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export default function getUserBookmark() {
  const [axiosSecure] = UseAxiosSecure();

  const { refetch, data } = useQuery({
    queryKey: ["getBookmark"],
    queryFn: () =>
      axiosSecure
        .get(`/user/bookmark/posts`)
        .then((res) => res.data[0].savedPosts)
        .catch((err) => console.log(err)),
  });

  return [data, refetch];
}
