"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import UseAxiosSecure from "@/hooks/UseAxiosSecure/UseAxiosSecure";
import getUserBookmark from "@/libs/dataQuerys/getUserBookmark";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa6";
import { GoBookmarkSlashFill } from "react-icons/go";
import { MdReportProblem } from "react-icons/md";
import Swal from "sweetalert2";

const UserReportOrOtherOption = ({ post }) => {
  const [axiosSecure] = UseAxiosSecure();
  const { user } = useContext(AuthContext);
  const [data, refetch] = getUserBookmark();

  let isSaved = false;

  const handleBookMark = (_id) => {
    if (!user) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Have to login for save this post",
        footer:
          '<a class="text-xl font-bold underline" href="/login">login</a>',
      });
    }
    if (_id) {
      axiosSecure
        .put("/user/bookmark", { _id })
        .then((res) => {
          console.log(res);
          if (res.data?.updateBookmark?.modifiedCount > 0) {
            toast.success("Successfully Bookmarked!", {
              icon: <FaBookmark />,
            });
            refetch();
          } else {
            toast.success(res.data.message, {
              icon: <FaBookmark />,
            });
          }
          console.log(res);
        })
        .catch((err) => console.log(err.message));
    }
  };
  const handleRemoveBookMark = (_id) => {
    if (_id) {
      axiosSecure
        .put("/user/removeBookmark", { _id })
        .then((res) => {
          console.log(res);
          if (res.data?.updateBookmark?.modifiedCount > 0) {
            toast("Remove Bookmarked!", {
              icon: <FaBookmark />,
            });
            refetch();
          } else {
            toast.success(res.data.message, {
              icon: <FaBookmark />,
            });
          }
          console.log(res);
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="dropdown w-3/4">
        <div tabIndex={0} role="button" className="">
          <BsThreeDots className="text-3xl text-right" />
        </div>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] card card-compact px-3 w-full shadow bg-white"
        >
          <div className="card-body p-0">
            <p className="flex items-center text-md gap-4 hover:bg-slate-200 w-full rounded-xl py-2 px-3 cursor-pointer">
              <span>
                <MdReportProblem className="text-red-600" />
              </span>
              <span>report this post </span>{" "}
            </p>
            {data?.forEach((p) => {
              if (p._id === post._id) {
                isSaved = true;
              }
            })}

            {isSaved ? (
              <p
                onClick={() => handleRemoveBookMark(post._id)}
                className="flex items-center text-md gap-4 hover:bg-slate-200 w-full rounded-xl py-2 px-3 cursor-pointer"
              >
                <span>
                  <GoBookmarkSlashFill className="text-red-600" />
                </span>
                <span>Unsave</span>
              </p>
            ) : (
              <p
                onClick={() => handleBookMark(post._id)}
                className="flex items-center text-md gap-4 hover:bg-slate-200 w-full rounded-xl py-2 px-3 cursor-pointer"
              >
                <span>
                  <FaBookmark className="text-red-600" />
                </span>
                <span> save</span>
              </p>
            )}

            {/* <p
              onClick={() => handleBookMark(post._id)}
              className="flex items-center text-md gap-4 hover:bg-slate-200 w-full rounded-xl py-2 px-3 cursor-pointer"
            >
              <span>
                <FaBookmark className="text-red-600" />
              </span>
              <span>Save</span>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReportOrOtherOption;
