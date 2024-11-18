import { AuthContext } from "@/AuthProvider/AuthProvider";
import PostOption from "@/components/common/PostOption/PostOption";
import getUserPostDataInProfile from "@/libs/dataQuerys/getUserPostDataInProfile";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";

const PostRender = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [latestPost, , isPending] = getUserPostDataInProfile(user?.email);

  // const posts = latestPost;
  useEffect(() => {
    setPosts(latestPost);
  }, []);
  console.log(latestPost);

  return (
    <div className="my-20">
      <div>
        <h3>
          আপনি {latestPost?.length ? latestPost?.length : "0"} টি পোস্ট করেছেন{" "}
        </h3>
      </div>
      {isPending ? (
        <div className="text-center">
          <span className="loading loading-dots loading-lg"></span>
          <span className="loading loading-dots loading-lg"></span>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : latestPost?.length === 0 ? (
        <div>
          <h2>You Didn't any Post Yet 😰 </h2>
        </div>
      ) : latestPost?.length === undefined ? (
        <div>alskjdbfklasdbfkb</div>
      ) : (
        latestPost?.map((post) => (
          <div className="px-9 my-7" key={post._id}>
            <div className="w-full ">
              <PostOption postId={post._id} />
            </div>
            <div>
              <Image
                className=" w-full h-[18rem] mx-auto rounded-xl object-cover object-center"
                width={600}
                height={600}
                src={post?.photo[0]}
                alt="post image"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mt-3">{post?.title}</h3>
              <p className="text-sm text-black/60 my-4">
                {post?.description.slice(0, 240)}
                {post.description.length <= 240 ? "" : "..."}
              </p>
              <div className="flex items-center gap-6">
                <button className="btn btn-primary btn-outline">
                  সম্পূর্ণ দেখুন
                </button>
                <p className="flex items-center gap-2">
                  <span>20k</span>
                  <FaRegThumbsUp className="text-2xl -mt-1 cursor-pointer" />{" "}
                </p>
                <p className="text-slate-400">{post?.date}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostRender;
