import Image from "next/image";
import Link from "next/link";

const ViewByCategory = () => {
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
    <div className="my-28 mb-40">
      <div className="lg:w-1/2 md:w-4/6 sm:w-4/6 w-5/6 mx-auto text-center">
        <h1 className="text-3xl font-bold ">ক্যাটাগোরি</h1>
        <p className="text-slate-400 md:w-3/4 mx-auto leading-6 tracking-wider">
          কম্পিউটারে বাংলা লেখার অনেক গুলো পদ্ধতি আছে। সাধারণত বাংলা লেখার জন্য
          কম্পিইটারে কিছু সফ্টওয়ার যেমন অভ্র, বিজয় ইত্যাদি ইনস্টল করতে হয়।এসব
          সফ্টওয়ারে বিভিন্ন লেআউট যেমন{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-8/12  mx-auto my-10">
        {categories.map((cat, i) => (
          <div key={i} className="">
            <Link href={`/category/${cat.name}`} className=" group w-7/12">
              <div className="relative">
                <Image
                  width={300}
                  height={300}
                  className="w-full h-[30vh] object-cover rounded-lg"
                  src={cat.photoURL}
                  alt="Rice Tree"
                />
                <div className=" absolute top-0 w-full h-full  bg-black/40 duration-500 flex items-end text-center pb-10 rounded-lg">
                  <p className="text-white text-2xl font-bold mx-auto text-center  group-hover:underline duration-300">
                    {cat.name}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewByCategory;
