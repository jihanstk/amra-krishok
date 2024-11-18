"use client";
import SavedCard from "@/components/common/SavedCard/SavedCard";
import getUserBookmark from "@/libs/dataQuerys/getUserBookmark";

const SavePost = () => {
  const [data] = getUserBookmark();
  console.log(data);
  return (
    <div className="">
      {data?.length > 0
        ? data.map((post) => <SavedCard key={post._id} post={post} />)
        : "dont Have save file"}
    </div>
  );
};

export default SavePost;
