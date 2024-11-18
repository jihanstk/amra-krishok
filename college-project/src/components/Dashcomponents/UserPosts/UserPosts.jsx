import Image from "next/image";
import PostRender from "./PostRender/PostRender";
import UserUploaded from "./UserUploaded/UserUploaded";

const UserPosts = () => {
  return (
    <div className="lg:w-11/12 mx-auto mt-10">
      <div className="md:flex justify-between gap-4">
        {/* here is profile information and some extra information */}
        <div className="md:w-1/2 w-full">
          {/* flowers and status card */}
          <div className=" bg-white rounded-xl p-7">
            <div className="flex gap-4">
              <div className=" border-r border-slate-500 text-center w-full">
                <div className="text-xl font-bold">31K</div>
                <div className="text-slate-400 text-sm">Flowers</div>
              </div>

              <div className="  w-full text-center">
                <div className="text-xl font-bold">1,200</div>
                <div className="text-slate-400 text-sm">Review</div>
              </div>
            </div>
          </div>
          {/* suggestions blog posts */}
          <div className="my-7">
            <div className="bg-white rounded-xl p-4 my-10">
              <div>
                <Image
                  className="rounded-xl w-full"
                  width={500}
                  height={500}
                  src="https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="suggestion"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#000] my-3">
                  Lorem ipsum, dolor sit amet{" "}
                </h3>
                <p className="text-[#000]/50 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  laborum deleniti quidem, dolore id alias ducimus dolorem et
                  culpa laudantium!....
                </p>
                <button className="btn btn-success btn-outline">
                  সম্পূর্ণ দেখুন
                </button>
              </div>
            </div>{" "}
            <div className="bg-white rounded-xl p-4 my-10">
              <div>
                <Image
                  className="rounded-xl w-full"
                  width={500}
                  height={500}
                  src="https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="suggestion"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#000] my-3">
                  Lorem ipsum, dolor sit amet{" "}
                </h3>
                <p className="text-[#000]/50 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  laborum deleniti quidem, dolore id alias ducimus dolorem et
                  culpa laudantium!....
                </p>
                <button className="btn btn-success btn-outline">
                  সম্পূর্ণ দেখুন
                </button>
              </div>
            </div>{" "}
            <div className="bg-white rounded-xl p-4 my-10">
              <div>
                <Image
                  className="rounded-xl w-full"
                  width={500}
                  height={500}
                  src="https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="suggestion"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#000] my-3">
                  Lorem ipsum, dolor sit amet{" "}
                </h3>
                <p className="text-[#000]/50 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  laborum deleniti quidem, dolore id alias ducimus dolorem et
                  culpa laudantium!....
                </p>
                <button className="btn btn-success btn-outline">
                  সম্পূর্ণ দেখুন
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* here is user post content and setting */}
        <div className="w-full bg-white rounded-xl">
          <UserUploaded />
          <PostRender />
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
