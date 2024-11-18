import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";
import UserReportOrOtherOption from "../UserReportOrOtherOption/UserReportOrOtherOption";

const Card = ({ post }) => {
  return (
    <div className="">
      <UserReportOrOtherOption post={post} />
      <div>
        <Image
          width={500}
          height={500}
          className="sm:h-52 h-64 w-full object-cover object-center rounded-md"
          src={post?.photo[0]}
          alt={post?.title}
        />
      </div>
      <div>
        <Link href={`category/${post?.category}/posts/${post?._id}`}>
          <h3 className="text-2xl font-bold my-5 text-slate-600 hover:text-slate-500">
            {post.title}
          </h3>
        </Link>
        <p className="text-slate-500 my-5 tracking-wide leading-7">
          {post?.description.slice(0, 130)}...
        </p>
        <div className="flex items-center justify-between px-4">
          <p className="w-full  text-slate-600 flex items-center ">
            {post?.price} <TbCurrencyTaka className="text-2xl font-bold" />
          </p>
          <p className="w-full text-lg text-slate-600">{post?.zilla}</p>
          <Link href={`/category/${post.category}`}>
            <p className="w-full text-lg text-slate-600 hover:underline">
              {post?.category}
            </p>
          </Link>
        </div>

        <div className="flex items-center my-7">
          <Link
            href={`category/${post?.category}/posts/${post?._id}`}
            className="w-full"
          >
            <button className="btn btn-primary bg-blue-600 hover:bg-blue-800 text-white">
              সম্পূর্ণ দেখুন
            </button>
          </Link>
          <p className=" text-slate-400 w-full">
            {parseInt(moment(post?.date).fromNow().split(" ")[0]) > 5
              ? post?.date
              : moment(post?.date).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
