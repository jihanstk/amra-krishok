import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      {/* banner section */}
      <div className="bannerAbout">
        <div className="h-[60vh] w-full relative">
          <Image
            width={700}
            height={700}
            className="w-full h-full  blur-[1px] object-cover"
            src="https://images.pexels.com/photos/7457047/pexels-photo-7457047.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="about banner page"
          />
          <div className="absolute top-0 w-full h-full bg-black/30 flex justify-center items-center">
            <div>
              <h1 className="text-3xl text-white">About Us</h1>
            </div>
          </div>
        </div>
      </div>
      {/* About College Section */}
      <div className="my-20">
        <h1 className="text-3xl font-bold text-center">আমাদের সম্পর্কে</h1>
        <div className="w-10/12 mx-auto md:flex items-center my-10">
          <div className="w-full h-full flex  -space-x-7 justify-center">
            <Image
              className=" w-2/5 sm:w-2/5 md:w-2/6 h-full object-cover"
              width={300}
              height={300}
              src="https://images.pexels.com/photos/7456812/pexels-photo-7456812.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="side image"
            />
            <Image
              className=" w-2/5 sm:w-2/5 md:w-2/6 h-full object-cover md:mt-20 sm:mt-28 mt-24 "
              width={300}
              height={300}
              src="https://images.pexels.com/photos/5528949/pexels-photo-5528949.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="side alt imaage"
            />
          </div>
          <div className="w-full my-5">
            <p className="leading-7 tracking-wide">
              অধীর অপেক্ষার পর এলো সেই শুভদিন ৪ জুলাই। আমার কলেজ জীবনের প্রথম
              দিন । বেলা দশটায় ক্লাস শুরু। দশটা বাজার ১৫ মিনিট আগেই ক্লাসে এসে
              উপস্থিত হই । দুজন পরিচিত ছাড়া আর সবাই নতুন মুখ। বিভিন্ন স্কুল
              থেকে তারা এসেছে। সবার চোখে-মুখে তারুণ্যের দীপ্তি ঝলমল করছিল। ঘণ্টা
              বাজল— প্রথম ক্লাসেই এলেন অধ্যক্ষ নিজে। ক্লাসটি ছিল বাংলা- কিন্তু
              বাংলা স্যার এলেন না। প্রথম ক্লাসে অধ্যক্ষ কলেজের নিয়ম-কানুনসহ আরও
              নানা বিষয়ে উপদেশমূলক বক্তব্য দিলেন। ফল উচ্চশিক্ষা
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
