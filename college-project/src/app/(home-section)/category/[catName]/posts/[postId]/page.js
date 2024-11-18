import PostComments from "@/components/Homepage/PostComments/PostComments";
import getSinglePost from "@/libs/dataQuerys/getSinglePost";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const SinglePost = async ({ params }) => {
  const post = await getSinglePost(params.postId);

  return (
    <div className="pt-24 lg:w-4/6 sm:w-11/12 w-11/12 mx-auto">
      <div
        // style={{
        //   backgroundImage: `url(${post?.photo[0]})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "center",
        // }}
        className="w-full  flex justify-center items-center rounded-xl"
      >
        <Image
          className=" w-auto object-cover rounded-xl h-[30rem]"
          width={400}
          height={400}
          src={post?.photo[0]}
          alt={post?.title}
          priority={true}
        />
      </div>
      <div className="flex justify-center mt-10">
        <div className="lg:w-4/6  sm:w-10/12">
          <h2 className="text-2xl font-bold text-slate-700">{post?.title}</h2>
          <p className=" text-slate-400">
            {parseInt(moment(post?.date).fromNow().split(" ")[0]) > 5
              ? post?.date
              : moment(post?.date).fromNow()}
          </p>
          <Link href={`/author/${post?.posted_user}`} className="inline">
            <div className="my-2 flex items-center gap-2 text-slate-500">
              <Image
                width={50}
                height={50}
                className="rounded-full w-7 h-7 object-cover"
                src={
                  post?.posted_user_Id
                    ? post?.posted_user_Id?.userPhoto
                    : "https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?b=1&s=612x612&w=0&k=20&c=PdCpqqV_hmKlW0o8t2TPwDEnOWBGSybOE4NiB8CvwoE="
                }
                alt="User Profile Image"
              />

              <span className="text-sm">
                {" "}
                {post?.posted_user_Id ? post?.posted_user_Id?.name : "Anonyms"}
              </span>
            </div>
          </Link>
          <div className="text-slate-600 my-3 tracking-wide mb-9 border-b border-slate-400/40 pb-5">
            {post?.description.split("\n").map((para) => (
              <div>
                <p className=" ">
                  {para} <br />
                </p>
              </div>
            ))}
          </div>
          <p className="my-3">
            {" "}
            <span className="font-bold">মূল্য</span> : {post?.price}TK / KG
          </p>
          <p className="my-3">
            {" "}
            <span className="font-bold">পরিমাণ</span> : {post?.quantity}KG
          </p>
          <p className="my-3">
            {" "}
            <span className="font-bold"> জেলা</span> : {post?.zilla}
          </p>
          <Link href={`/category/${post?.category}`} className=" ">
            <p className="my-3">
              {" "}
              <span className="font-bold"> ক্যাটাগরি</span> :{" "}
              <span className=" hover:underline"> {post?.category}</span>
            </p>
          </Link>
          <p className="my-3">
            {" "}
            <span className="font-bold">যোগাযোগ করুন </span> : {post?.phone}
          </p>
        </div>{" "}
      </div>
      <div>
        <Suspense fallback={"Loading...."}>
          <PostComments postId={post?._id} />
        </Suspense>
      </div>
    </div>
  );
};

export default SinglePost;
