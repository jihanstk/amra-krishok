"use client";
import { AuthContext } from "@/AuthProvider/AuthProvider";
import UseAxiosSecure from "@/hooks/UseAxiosSecure/UseAxiosSecure";
import getUserPostDataInProfile from "@/libs/dataQuerys/getUserPostDataInProfile";
import { app } from "@/libs/firebase.config";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Image from "next/image";
import { useContext, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GiCancel } from "react-icons/gi";
import { MdPhotoLibrary } from "react-icons/md";
import Swal from "sweetalert2";

const UserUploaded = () => {
  const fileRef = useRef();
  const { user } = useContext(AuthContext);
  const [images, setImages] = useState([]);
  const [photoFiles, setPhotoFiles] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState("");
  const [success, setSuccess] = useState("");
  const [photoLoading, setPhotoLoading] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [axiosSecure] = UseAxiosSecure();
  const [, refetch] = getUserPostDataInProfile();
  const imageClickHandler = () => {
    fileRef.current.click();
  };
  const storImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl);
          });
        }
      );
    });
  };

  const imageFileHandler = (e) => {
    const files = e.target.files;
    setError("");

    const selectFileArray = Array.from(files);
    setPhotoFiles((prevPhoto) => prevPhoto.concat(selectFileArray));
    const imageArray = selectFileArray.map((f) => {
      return {
        url: URL.createObjectURL(f),
        size: f.size,
      };
    });
    const imageArrayConcat = images.concat(imageArray);
    if (imageArrayConcat.length > 5) {
      setError("You can add maximum 5 image");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    setImages(imageArrayConcat);
  };

  const handleDeletePhoto = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setPhotoFiles((prevPhoto) => prevPhoto.filter((_, i) => i !== index));
    if (photoFiles[index].size > 1000000) {
      setError("");
    }
  };

  const handleUploadImageOnFireBase = () => {
    setPhotoLoading(true);
    if (photoFiles.length > 0 && photoFiles.length < 6) {
      const promises = [];
      for (let i = 0; i < photoFiles.length; i++) {
        promises.push(storImage(photoFiles[i]));
      }
      Promise.all(promises)
        .then((url) => {
          setPhoto(photo.concat(url));
          setError("");
          setSuccess("image Upload successFully");
          setPhotoLoading(false);
        })
        .catch((err) => {
          setError("");
          setError("there is image upload error");
          setPhotoLoading(false);
        });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setPhoneNumberError("");
    const form = e.target;
    const title = form.title.value;
    const phone = form.phone.value;
    const zilla = form.zilla.value;
    const quantity = form.quantity.value;
    const postType = form.postType.value;
    const category = form.category.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const photos = photo;

    if (phone.length < 11) {
      setPhoneNumberError("");
      setPhoneNumberError("add real mobile number");
      return;
    }
    if (photos.length > 6) {
      setError("");
      setError("you upload maximum 5 photo");
      return;
    }
    photos.forEach((photo) => {
      if (photo.size > 1000000) {
        setError("");
        setError("all file must be less then 1MB");

        return;
      }
    });

    const sellData = {
      title,
      zilla,
      category,
      price,
      phone,
      quantity,
      postType,
      description,
      photo,
      posted_user: user.email,
      like: 0,
      date: new Date().toDateString(),
    };
    axiosSecure
      .post("/farmer", sellData)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        refetch();
        setImages([]);
        setPhoto([]);
        setPhotoFiles([]);
      })
      .catch((err) => {
        toast(err);
      });
  };

  return (
    <div>
      <div className=" mt-10 px-6 py-4">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="input input-bordered flex items-center gap-2 mb-2 ">
              Title
              <input
                type="text"
                name="title"
                required
                className="grow focus:outline-none"
                placeholder="টাইটেল দিন"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2 ">
              জেলা
              <input
                type="text"
                name="zilla"
                required
                className="grow focus:outline-none"
                placeholder="আপনার জেলার নাম দিন"
              />
            </label>
            <label className="">
              <select
                name="category"
                className="select  border-slate-300 w-full mb-3 bg-transparent"
                required
              >
                <option value="শস্য"> শস্য</option>
                <option value="ফলমূল">ফলমূল</option>
                <option value="শাকসবজি">শাকসবজি</option>
                <option value="শিল্প"> শিল্প</option>
              </select>
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2 ">
              পরিমাণ
              <input
                type="text"
                name="quantity"
                required
                className="grow focus:outline-none"
                placeholder="কেমন পরিমাণ পণ্য রয়েছে কেজি তে দিন"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2 ">
              মোবাইল নাম্বার
              <input
                type="text"
                name="phone"
                required
                className="grow focus:outline-none"
                placeholder="আপনার মোবাইল নম্বার দিন"
                maxLength={15}
              />
            </label>
            <label className="">
              <select
                name="postType"
                className="select  border-slate-300 w-full mb-3 bg-transparent"
                required
              >
                <option value="বিক্রয়">বিক্রয়</option>
                <option value="সমস্যা"> সমস্যা</option>
              </select>
            </label>
            <p className="text-red-500 mb-3 ">{phoneNumberError}</p>
            <label className="input input-bordered flex items-center gap-2 mb-2 ">
              মূল্য
              <input
                type="number"
                name="price"
                required
                className="grow focus:outline-none"
                placeholder="মূল্য দিন"
              />
            </label>
            <label className="form-control">
              <textarea
                className="textarea textarea-bordered h-24 focus:outline-none"
                required
                name="description"
                placeholder="Write your content... "
              ></textarea>
            </label>
          </div>
          <div>
            <div className="flex gap-4 my-5 overflow-x-scroll">
              {images.map((image, index) => {
                return (
                  <div key={index} className="relative ">
                    {!photo.length > 0 ? (
                      <span
                        onClick={() => handleDeletePhoto(index)}
                        className="cursor-pointer text-xl absolute top-2 right-2 bg-white text-[#2F8886]/80 rounded-full font-extrabold"
                      >
                        <GiCancel />
                      </span>
                    ) : (
                      ""
                    )}
                    <Image
                      className="rounded-lg h-40 object-cover "
                      width={100}
                      height={100}
                      src={image.url}
                      alt={image.size}
                    />
                    <div className="absolute bottom-1 left-3 text-white">
                      <p className={image.size > 1000000 ? "text-red-500" : ""}>
                        {image.size > 1000000
                          ? parseFloat(image.size / 1000 / 1000).toFixed(2)
                          : Math.ceil(image.size / 1000)}{" "}
                        {image.size > 1000000 ? "MB" : "KB"}
                      </p>
                    </div>
                  </div>
                );
              })}
              {images.length > 0 ? (
                !photo.length > 0 ? (
                  <div
                    className="btn btn-success text-white"
                    onClick={handleUploadImageOnFireBase}
                  >
                    {photoLoading
                      ? `Uploading ${parseInt(progress)}% ....`
                      : "Upload"}
                  </div>
                ) : (
                  ""
                )
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center gap-4">
              {photo.length > 0 ? (
                ""
              ) : photo.length === 0 ? (
                // <div className=" cursor-pointer" onClick={imageClickHandler}>
                //   <MdPhotoLibrary className="text-4xl" />
                // </div>
                <div className=" cursor-pointer" onClick={imageClickHandler}>
                  <MdPhotoLibrary className="text-4xl" />
                </div>
              ) : (
                ""
              )}
              <input
                type="file"
                ref={fileRef}
                name="photo"
                multiple
                accept=".jpg,.png,.jpeg,.JPG"
                className="hidden"
                onChange={imageFileHandler}
              />
              {
                <button
                  disabled={photo.length === 0}
                  className="btn  btn-outline btn-success hover:text-white"
                >
                  Post
                </button>
              }
            </div>
          </div>
        </form>
        <p className="text-red-500">{error}</p>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default UserUploaded;
