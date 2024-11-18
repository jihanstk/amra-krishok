import UseAxiosSecure from "@/hooks/UseAxiosSecure/UseAxiosSecure";
import getUserBookmark from "@/libs/dataQuerys/getUserBookmark";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { BsThreeDots } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { GoBookmarkSlashFill } from "react-icons/go";

const SavedCard = ({ post }) => {
  const [axiosSecure] = UseAxiosSecure();
  const [, refetch] = getUserBookmark();
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
              icon: <GoBookmarkSlashFill />,
            });
          }
          console.log(res);
        })
        .catch((err) => console.log(err.message));
    }
  };
  return (
    <div className="md:flex gap-4 items-center border p-4 w-11/12 rounded-xl bg-gray-100 mt-3 overflow-hidden md:overflow-visible mx-auto shadow-md">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="">
        <Link href={`/category/${post?.category}/posts/${post?._id}`}>
          {" "}
          <Image
            width={200}
            height={200}
            className="md:h-40 h-52 object-cover rounded-lg w-full md:w-52"
            src={post?.photo[0]}
            alt={post.title}
          />
        </Link>
      </div>
      <div className="">
        <div>
          <Link href={`/category/${post?.category}/posts/${post?._id}`}>
            <h2 className="text-3xl font-semibold hidden md:block">
              {post.title}
            </h2>
          </Link>
          <Link href={`/category/${post?.category}/posts/${post?._id}`}>
            <h2 className="text-3xl font-semibold md:hidden inline-block">
              {post.title.slice(0, 25)}...
            </h2>
          </Link>
          <p className="text-slate-600">{post.category}</p>
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
          <div className="gap-6 w-full ">
            <div className="relative w-full flex items-center gap-5">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className=" bg-slate-300/40 px-5 py-2 w-16 text-center rounded-xl hover:bg-slate-300/90 duration-300 m-1"
                >
                  {" "}
                  <BsThreeDots className="text-2xl mx-auto" />
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <p
                    onClick={() => handleRemoveBookMark(post._id)}
                    className="flex items-center text-md gap-4 hover:bg-slate-200 w-full rounded-xl py-2 px-3 cursor-pointer"
                  >
                    <span>
                      <GoBookmarkSlashFill className="text-red-600" />
                    </span>
                    <span>Unsave</span>
                  </p>
                </div>
              </div>
              <p className="text-slate-700/40 w-full">{post.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
