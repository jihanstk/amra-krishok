import Image from "next/image";
import { BsPhoneFlip } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

import getLatestPost from "@/libs/dataQuerys/getUserPost";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const Footer = async () => {
  const latestPost = await getLatestPost();
  const categories = [
    {
      name: "শস্য",
      photoURL:
        "https://images.pexels.com/photos/221016/pexels-photo-221016.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "ফলমূল",
      photoURL:
        "https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "শাকসবজি",
      photoURL:
        "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "শিল্প",
      photoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DG9LOImRV-iLWOg8kzNoG8oXP2a2kIP0uQ&usqp=CAU",
    },
  ];

  return (
    <div className="bg-[#001a33] text-slate-300  w-full mt-10">
      <div className="w-11/12 m-auto lg:flex justify-between p-8">
        <div className=" w-full">
          <p className="font-bold text-2xl mb-4 text-white">Contact Us</p>
          <p className="flex items-center my-3  mx-auto">
            <HiOfficeBuilding className="mr-3" />
            3755 Commercial St SE Salem, Corner
          </p>
          <p className="flex items-center my-3">
            <FaPhone className="mr-3" />
            +0158738473473
          </p>
          <p className="flex items-center my-3">
            <BsPhoneFlip className="mr-3" />
            +0158738473473
          </p>
          <p className="flex items-center my-3">
            <MdEmail className="mr-3" />
            youremail@gmail.com
          </p>
          <p className="flex items-center my-3">
            <RiComputerLine className="mr-3" />
            WP Residence
          </p>
          <div className="sm:block hidden mb-4">
            <div className="flex mt-6 ">
              <div className="m-2 bg-[#00284d] rounded text-center">
                <FaFacebookF className="m-3" />
              </div>
              <div className="m-2 bg-[#00284d] rounded text-center">
                <FaWhatsapp className="m-3" />
              </div>
              <div className="m-2 bg-[#00284d] rounded text-center">
                <FaTelegram className="m-3" />
              </div>

              <div className="m-2 bg-[#00284d] rounded text-center">
                <FaYoutube className="m-3" />
              </div>
              <div className="m-2 bg-[#00284d] rounded text-center">
                <FaInstagramSquare className="m-3" />
              </div>
              <div className="m-2 bg-[#00284d] rounded text-center">
                <MdOutgoingMail className="m-3" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-10 my-10 md:my-0 w-full">
          <h3 className="font-bold text-2xl mb-4 text-white">
            ক্যাটাগরি অনুযায়ী তালিকাবদ্ধ
          </h3>
          {categories.map((cat) => (
            <Link href={`/category/${cat.name}`} className=" hover:underline">
              <p className="my-2 py-1">{cat.name}</p>
            </Link>
          ))}
        </div>
        <div className="w-full">
          <h3 className="font-bold text-2xl mb-4 text-white">নতুন পণ্য</h3>
          <div>
            {latestPost?.slice(0, 3).map((post) => (
              <div key={post?._id} className="flex items-center m-3">
                <Image
                  width={100}
                  height={90}
                  src={post?.photo[0]}
                  alt={post?.title}
                  className=" object-cover rounded-md duration-1000 ease-in-out w-36 h-20"
                />
                <div className="ms-4">
                  <p>{post?.title}</p>
                  <p className="flex">
                    <TbCurrencyTaka className="text-2xl font-bold" />
                    {post?.price}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:flex justify-between p-6 text-center">
        <p>Copyright WP Estate. All Rights Reserved</p>
        <div className="md:flex">
          <p className="me-8  md:my-0 my-3">Documentation</p>
          <p className="me-8  md:my-0 my-3">Video Tutorial</p>
          <p className="me-8  md:my-0 my-3">Client Support</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
