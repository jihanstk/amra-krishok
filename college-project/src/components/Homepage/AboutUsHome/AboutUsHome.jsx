import Image from "next/image";
import { SlBadge } from "react-icons/sl";
import afterBanner1 from "../../../../public/aboutHome.jpg";

const AboutUsHome = () => {
  return (
    <div className="mt-20 md:w-11/12 lg:w-10/12 w-11/12 mx-auto ">
      <div className="mb-20 text-center">
        <h1 className="text-4xl font-bold ">আমাদের কৃতিত্ব</h1>
        <p className="md:w-1/2 sm:w-3/4 mx-auto my-4 text-slate-400 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem enim
          corrupti possimus deleniti error illum quisquam atque,
        </p>
      </div>
      <div className=" md:flex md:flex-row flex flex-col-reverse gap-4 items-center justify-center">
        <div className="w-full md:text-left text-center mt-16">
          <div>
            <h1 className="sm:text-4xl text-3xl font-semibold my-5 tracking-wide">
              আমাদের সম্পর্কে কিছু কথা
            </h1>
            <p className="flex items-center tracking-wide leading-7">
              আমরা আপনার আস্থা ও বিশ্বস্ততার প্রতীক। আমরা বেশ কিছু পুরস্কার
              পেয়েছি। আমরা আপনার আস্থা ও বিশ্বস্ততার প্রতীক। আমরা বেশ কিছু
              পুরস্কার পেয়েছি। আমরা আপনার আস্থা ও বিশ্বস্ততার প্রতীক। আমরা বেশ
              কিছু পুরস্কার পেয়েছি। আমরা আপনার আস্থা ও বিশ্বস্ততার প্রতীক। আমরা
              বেশ কিছু পুরস্কার পেয়েছি। আমরা আপনার আস্থা ও বিশ্বস্ততার প্রতীক।
              আমরা বেশ কিছু পুরস্কার পেয়েছি।
            </p>
          </div>
          <div className="flex gap-5 items-center justify-center md:justify-start text-center">
            <div className="border border-gray-500 p-2 text-center w-52 rounded-2xl mx-auto md:mx-0">
              <SlBadge className="text-center text-4xl mx-auto font-extrabold text-green-600" />
              <p className="text-left md:text-center tracking-tight">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
                possimus.
              </p>
            </div>
            <div className="border border-gray-500 p-2 text-center w-52 rounded-2xl mx-auto md:mx-0">
              <SlBadge className="text-center text-4xl mx-auto font-extrabold text-green-600" />
              <p className="text-left md:text-center tracking-tight">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
                possimus.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center">
          <Image
            className=" mx-auto md:ml-auto rounded-xl w-11/12 h-[25rem] object-cover object-top 2xl:object-top 2xl:h-[30rem]"
            src={afterBanner1}
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHome;
