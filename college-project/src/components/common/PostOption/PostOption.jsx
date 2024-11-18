import UseAxiosSecure from "@/hooks/UseAxiosSecure/UseAxiosSecure";
import getUserPostDataInProfile from "@/libs/dataQuerys/getUserPostDataInProfile";
import { app } from "@/libs/firebase.config";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { BsThreeDots } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const PostOption = ({ postId }) => {
  const [axiosSecure] = UseAxiosSecure();
  const [, refetch] = getUserPostDataInProfile();
  const deletePhotoFromFireBase = (fileUrl) => {
    const storage = getStorage(app);
    const fileRef = ref(storage, fileUrl);
    console.log("file Exist in fireBase:");
    deleteObject(fileRef)
      .then(() => {
        console.log("photo is deleted");
      })
      .catch((error) => {
        console.log("some error occered" + error);
      });
    // console.log("file Exist in fireBase:" + fileRef.exist());
  };
  const handleDeletePost = () => {
    console.log(postId);
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
        axiosSecure.delete(`/farmer/${postId}`).then((res) => {
          console.log(res.data);
          if (res.data.delete) {
            if (res.data.deleteData.photo.length > 0) {
              let fileUrl = res.data.deleteData.photo;
              for (let i = 0; i < fileUrl.length; i++) {
                deletePhotoFromFireBase(fileUrl[i]);
              }
            }
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="dropdown w-1/2">
      <div tabIndex={0} role="button" className="btn m-1">
        <BsThreeDots className="text-3xl text-right" />
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact px-3 w-full shadow bg-white"
      >
        <div className="card-body p-0">
          <p
            onClick={handleDeletePost}
            className="flex items-center text-lg gap-4 hover:bg-slate-200 w-full rounded-xl py-2 px-3 cursor-pointer"
          >
            <span>
              <FaTrash className="text-red-600" />
            </span>
            <span>Delete Post </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostOption;
