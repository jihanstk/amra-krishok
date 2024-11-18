import Card from "@/components/common/Card/Card";
import getLatestPost from "@/libs/dataQuerys/getUserPost";

const LatestProduct = async () => {
  const latestPost = await getLatestPost();

  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold">আমাদের নতুন পণ্য </h1>
        <p className="text-slate-500 mt-3 mb-20">
          এখানে আমাদের কিছু নতুন পণ্য এখানে পাবেন।
        </p>
      </div>
      {!latestPost ? (
        <div className="w-1/2 mx-auto">
          <div className="loading loading-spinner loading-lg mx-auto text-center block"></div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-7 md:w-10/12 w-11/12 mx-auto">
          {latestPost?.map((post) => (
            <div key={post._id} className="bg-slate-100 p-4  rounded-xl">
              <Card post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LatestProduct;
