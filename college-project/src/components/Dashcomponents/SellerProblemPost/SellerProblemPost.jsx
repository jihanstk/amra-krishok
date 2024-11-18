import Image from "next/image";

const SellerProblemPost = () => {
  return (
    <div className="flex items-center">
      <div></div>
      <div className="lg:w-11/12 mx-auto mt-10">
        <div className="md:flex justify-between gap-4">
          {/* here is profile information and some extra information */}
          <div className="md:w-1/2 w-full">
            {/* flowers and status card */}

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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae laborum deleniti quidem, dolore id alias ducimus
                    dolorem et culpa laudantium!....
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae laborum deleniti quidem, dolore id alias ducimus
                    dolorem et culpa laudantium!....
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae laborum deleniti quidem, dolore id alias ducimus
                    dolorem et culpa laudantium!....
                  </p>
                  <button className="btn btn-success btn-outline">
                    সম্পূর্ণ দেখুন
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* here is user post content and setting */}
          <div className="w-full bg-white rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default SellerProblemPost;
