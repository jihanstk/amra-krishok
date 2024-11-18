import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[50rem]">
      <div className="relative">
        <Image
          width={2000}
          height={2000}
          className="w-full h-[50rem]  object-cover banner blur-[1px]"
          src="https://t3.ftcdn.net/jpg/02/86/02/22/360_F_286022279_zTU2R0YbUwWRS9esGbtB2dUuEnWaZ3pO.jpg"
          alt="Banner"
        ></Image>
        <div className="md:flex w-full  md:h-full h-[50rem] items-center bg-green-900/30 sm:pt-32 md:pt-16 pt-10 absolute top-0">
          <div className=" w-full lg:h-full flex items-center justify-center sm:py-7 py-20">
            <div className="text-slate-100 sm:pr-0 sm:px-10 px-3 md:text-left text-center">
              <h1 className=" sm:text-3xl lg:text-3xl md:text-2xl text-2xl font-bold">
                আপনার বিশ্বস্ত ও আস্থার প্রতীক।
              </h1>
              <p className="lg:text-md text-sm lg:w-3/4 mx-auto md:mx-0 w-11/12 my-5">
                সহজে পণ্য ক্রয় বিক্রয় করতে পারবেন। আমাদের সাইটের মাধ্যমে পণ্য
                বিক্রেতা কৃষকে খুঁজে পাবেন সহজেই
              </p>
              <button className="btn btn-outline text-white hover:text-white hover:bg-green-600 hover:border-none border-slate-300 shadow-xl">
                পণ্য খুঁজুন
              </button>
            </div>
          </div>
          <div className="w-full lg:h-full flex items-center justify-center  ">
            <div className="rounded-full lg:w-[500px] lg:h-[500px] w-[350px] h-[350px] border-slate-200/40 border-2  flex items-center justify-center relative">
              <div className="  rounded-full w-5/6 h-5/6  border-slate-200/40 border-2 flex items-center justify-center">
                <div className="  rounded-full w-5/6 h-5/6  border-slate-200/40 border-2 flex items-center justify-center">
                  <div className="  rounded-full w-5/6 h-5/6  border-slate-200/40 border-2 ">
                    <Image
                      width={2000}
                      height={2000}
                      className=" lg:w-28 w-20 lg:h-32 h-28  object-cover absolute top-0 left-32 lg:left-44 rounded-lg  banner-image1 "
                      src="https://images.pexels.com/photos/2804327/pexels-photo-2804327.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Banner"
                    ></Image>

                    <Image
                      width={2000}
                      height={2000}
                      className=" lg:w-28 w-20 lg:h-32 h-28  object-cover absolute left-0 top-32 lg:top-40 rounded-lg  banner-image2 "
                      src="https://images.pexels.com/photos/2804327/pexels-photo-2804327.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Banner"
                    ></Image>

                    <Image
                      width={2000}
                      height={2000}
                      className=" lg:w-28 w-20 lg:h-32 h-28  object-cover absolute right-0 lg:top-40 top-32 rounded-lg banner-image3"
                      src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Banner"
                    ></Image>
                    <Image
                      width={2000}
                      height={2000}
                      className=" lg:w-28 w-20 lg:h-32 h-28 object-cover absolute bottom-0  left-32 lg:left-44 rounded-lg banner-image4"
                      src="https://t3.ftcdn.net/jpg/02/86/02/22/360_F_286022279_zTU2R0YbUwWRS9esGbtB2dUuEnWaZ3pO.jpg"
                      alt="Banner"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full  ">
        <Image
          width={2000}
          height={2000}
          className=" object-cover rounded-lg "
          src="https://images.pexels.com/photos/716107/pexels-photo-716107.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Banner"
        ></Image>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div>
      <div className="h-[90vh] w-full relative">
        <Image
          width={2000}
          height={2000}
          className="w-full h-full object-cover banner"
          src="https://images.pexels.com/photos/2804327/pexels-photo-2804327.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Banner"
        ></Image>
        <div className="absolute top-0 w-full h-full bg-black/40 flex items-center">
          <div className="text-white lg:px-20 px-10">
            <h1 className=" sm:text-3xl lg:text-4xl text-xl font-bold">
              আপনার বিশ্বস্ত ও আস্থার প্রতীক।
            </h1>
            <p className="lg:text-md text-sm lg:w-3/4 w-11/12 my-5">
              সহজে পণ্য ক্রয় বিক্রয় করতে পারবেন। আমাদের সাইটের মাধ্যমে পণ্য
              বিক্রেতা কৃষকে খুঁজে পাবেন সহজেই
            </p>
            <button className="btn btn-outline btn-success hover:text-white">
              পণ্য খুঁজুন
            </button>
          </div>
        </div>
      </div>
    </div> 
    https://t3.ftcdn.net/jpg/02/86/02/22/360_F_286022279_zTU2R0YbUwWRS9esGbtB2dUuEnWaZ3pO.jpg
    */
}
