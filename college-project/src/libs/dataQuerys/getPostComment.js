"use client";
import UseAxiosSecure from "@/hooks/UseAxiosSecure/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const getPostComment = (postId) => {
  const [axiosSecure] = UseAxiosSecure();

  const { refetch, data } = useQuery({
    queryKey: ["getBookmark"],
    queryFn: () =>
      axiosSecure
        .get(`/comments/${postId}`)
        .then((res) => res.data)
        .catch((err) => console.log(err)),
  });

  return [data, refetch];
};

export default getPostComment;
