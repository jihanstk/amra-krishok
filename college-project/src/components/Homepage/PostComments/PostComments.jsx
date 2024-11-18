"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import UseAxiosSecure from "@/hooks/UseAxiosSecure/UseAxiosSecure";
import getPostComment from "@/libs/dataQuerys/getPostComment";
import getUser from "@/libs/dataQuerys/getUser";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import RenderComment from "../RenderComment/RenderComment";

const PostComments = ({ postId }) => {
  const [remaining, setRemaining] = useState(0);
  const [isLoadingCommentPost, setIsLoadingCommentPost] = useState(false);
  const { user } = useContext(AuthContext);
  const [axiosSecure] = UseAxiosSecure();
  const profUser = getUser();
  const [comments, refetch] = getPostComment(postId);
  const handleSubmitComment = (e) => {
    e.preventDefault();
    const commentArea = e.target;
    const comment = e.target.content.value;
    const commentInfo = {
      comment,
      postId,
      commenter: profUser._id,
      likes: [],
    };
    setIsLoadingCommentPost(true);
    axiosSecure
      .post("/comments", commentInfo)
      .then((res) => {
        console.log(res);
        refetch();
        setIsLoadingCommentPost(false);
        commentArea.reset();
      })
      .catch((err) => console.log(err.message));
  };
  const handleDeleteAComment = (comment) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (comment?.commenter?._id === profUser?._id) {
          axiosSecure.delete(`/comments/${comment?._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              toast.success("Successfully toasted!");
            }
            console.log(res);
          });
        }
      }
    });
  };

  //   if (!user) {
  //     return (
  //       <div className="mt-10 md:w-4/6 sm:w-11/12 mx-auto">

  // <h2>কমেন্ট করতে  হলে Login করতে হবে </h2>
  //       </div>
  //     );
  //   }
  console.log("comment=", comments, "user=", profUser);
  return (
    <div className="mt-10 md:w-4/6 sm:w-11/12 mx-auto">
      <Toaster position="top-right" reverseOrder={false} />
      <h2 className="text-3xl font-bold mb-5">Comments</h2>
      <div className="">
        {user ? (
          <form onSubmit={handleSubmitComment}>
            <div className=" border-slate-400 border rounded-xl border-dotted p-3 ">
              <textarea
                className="textarea textarea-success w-full"
                name="content"
                onChange={(e) => setRemaining(e.target.value.length)}
                placeholder="এখানে আপনার মতামত প্রদান করতে পারেন..."
                maxLength={200}
              ></textarea>
              <div className="flex justify-between items-center">
                <p className="text-slate-400"> Remaining {200 - remaining}</p>
                <button
                  type="submit"
                  disabled={remaining > 200 || remaining === 0}
                  className="btn btn-success text-white"
                >
                  Submit
                  {isLoadingCommentPost ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </div>
          </form>
        ) : (
          <h2 className="text-xl font-bold">কমেন্ট করতে হলে Login করতে হবে </h2>
        )}
      </div>
      {/* {profUser ? ( */}
      <div className="mt-10 bg-slate-200 rounded-xl py-3 px-3 w-full">
        {comments?.length > 0 ? (
          comments?.map((comment) => (
            <RenderComment
              comment={comment}
              handleDeleteAComment={handleDeleteAComment}
              profUser={profUser}
              postId={postId}
            />
          ))
        ) : (
          <h1>There is no comment Yet</h1>
        )}
      </div>
      {/* ) : (
        <span className="loading loading-bars loading-lg"></span>
      )} */}
    </div>
  );
};

export default PostComments;
