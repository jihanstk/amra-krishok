import UseAxiosSecure from "@/hooks/UseAxiosSecure/UseAxiosSecure";
import getPostComment from "@/libs/dataQuerys/getPostComment";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
const RenderComment = ({ comment, handleDeleteAComment, profUser, postId }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [commentContent, setCommentContent] = useState(comment?.comment);
  const [axiosSecure] = UseAxiosSecure();
  const [, refetch] = getPostComment(postId);
  console.log(profUser);
  const handleUpdateComments = (id) => {
    console.log(commentContent);
    const updateComment = {
      commentContent,
    };
    setIsUpdateLoading(true);
    axiosSecure
      .patch(`/comments/${id}`, updateComment)
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          toast.success("Successfully toasted!");
          refetch();
          setIsUpdateLoading(false);
          setIsEdit(false);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleLikeForPostComment = (commentId) => {
    const likerId = { liker: profUser._id };

    axiosSecure
      .post(`/comments/likes/${commentId}`, likerId)
      .then((res) => {
        console.log(res);
        refetch();
      })
      .catch((err) => console.log(err.message));
  };
  const handleRemovePostCommentLike = (commentId) => {
    const likerId = { liker: profUser._id };

    axiosSecure
      .patch(`/comments/likes/${commentId}`, likerId)
      .then((res) => {
        console.log(res);
        refetch();
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div
      key={comment?._id}
      className="mt-4 flex gap-8  border-b-2 border-white last:border-none py-2 w-full"
    >
      <div className="w-10/12">
        <Link
          href={`/user/${comment?.commenter?.email}`}
          className="inline-block"
        >
          <span className="flex items-center gap-2 text-slate-500 ">
            <Image
              width={50}
              height={50}
              className=" object-cover w-10 h-10 rounded-full"
              src={
                comment?.commenter?.userPhoto ||
                "https://media.istockphoto.com/id/476085198/photo/businessman-silhouette-as-avatar-or-default-profile-picture.jpg?b=1&s=612x612&w=0&k=20&c=PdCpqqV_hmKlW0o8t2TPwDEnOWBGSybOE4NiB8CvwoE="
              }
              alt="User Photo"
            />
            <p>
              {comment?.commenter?.name}{" "}
              <span className="block text-sm text-slate-400">
                {moment(comment?.createdAt).fromNow()}
              </span>
            </p>
          </span>
        </Link>

        <div className="ml-10 w-full">
          {isEdit ? (
            <div>
              <textarea
                className="textarea textarea-success w-full"
                name="content"
                defaultValue={comment?.comment}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="এখানে আপনার মতামত প্রদান করতে পারেন..."
                maxLength={200}
              ></textarea>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => handleUpdateComments(comment._id)}
                  className="btn btn-success text-white px-6 py-1"
                  disabled={commentContent?.length === 0}
                >
                  Save
                  {isUpdateLoading ? (
                    <span className="loading loading-spinner loading-md"></span>
                  ) : (
                    ""
                  )}
                </button>
                <button
                  onClick={() => setIsEdit(false)}
                  className="btn btn-ghost border-slate-300 "
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="my-1">{comment?.comment}</p>
              <div className=" flex items-center">
                <span className="flex items-center  gap-2 ">
                  <span className="mt-2">{comment?.likes?.length}</span>

                  <span className="duration-500">
                    {comment?.likes?.some(
                      (like) => profUser?._id === like._id
                    ) ? (
                      <>
                        <FaThumbsUp
                          onClick={() =>
                            handleRemovePostCommentLike(comment?._id)
                          }
                          className={`text-xl cursor-pointer text-green-600 duration-500 ${
                            comment?.likes?.some(
                              (like) => profUser?._id === like._id
                            )
                              ? "opacity-100"
                              : "opacity-0"
                          } `}
                        />
                      </>
                    ) : (
                      <FaRegThumbsUp
                        onClick={() => handleLikeForPostComment(comment._id)}
                        className="text-xl cursor-pointer text-green-600"
                      />
                    )}
                  </span>
                </span>
                {comment?.commenter?._id === profUser?._id && profUser ? (
                  <span>
                    <span
                      onClick={() => handleDeleteAComment(comment)}
                      className="ml-3 cursor-pointer"
                    >
                      Delete
                    </span>
                    <span
                      onClick={() => setIsEdit(true)}
                      className="ml-3 cursor-pointer"
                    >
                      Edit
                    </span>
                  </span>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RenderComment;
