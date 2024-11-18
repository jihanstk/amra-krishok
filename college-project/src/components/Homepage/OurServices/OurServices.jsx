import { BiSolidHomeHeart } from "react-icons/bi";
import { BsBuildingsFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

const OurServices = () => {
  const reasons = [
    {
      id: 1,
      title: "সহজে পণ্য বিক্রি",
      description:
        "আপনারা বিক্রেতা দের সাথে সরাসরি যোগাযোগ এর মাধ্যমে পণ্য ক্রয় করতে পারবেন।",
      icon: <FaHome />,
    },
    {
      id: 2,
      title: "নিরাপত্তা প্রদান",
      description:
        "আপনারা বিক্রেতা দের সাথে সরাসরি যোগাযোগ এর মাধ্যমে পণ্য ক্রয় করতে পারবেন।",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "যোগাযোগ করতে পারবেন",
      description:
        "আপনারা বিক্রেতা দের সাথে সরাসরি যোগাযোগ এর মাধ্যমে পণ্য ক্রয় করতে পারবেন।",
      icon: <BsBuildingsFill />,
    },
    {
      id: 4,
      title: "নির্ভরযোগ্য পণ্য প্রদান",
      description:
        "আপনারা বিক্রেতা দের সাথে সরাসরি যোগাযোগ এর মাধ্যমে পণ্য ক্রয় করতে পারবেন।",
      icon: <BiSolidHomeHeart />,
    },
  ];
  return (
    <div className="w-11/12 lg:w-11/12 mx-auto  mb-14 my-10">
      <div className="md:w-3/6 w-11/12 m-auto text-center">
        <h1 className="text-3xl font-bold">কেন আমাদের মাধ্যমে?</h1>
        <p className="text-md my-2 mb-16 text-slate-600">
          আপনারা বিক্রেতা দের সাথে সরাসরি যোগাযোগ এর মাধ্যমে পণ্য ক্রয় করতে
          পারবেন।আপনারা বিক্রেতা দের সাথে সরাসরি যোগাযোগ এর মাধ্যমে পণ্য ক্রয়
          করতে পারবেন।
        </p>
      </div>
      <div className="thirdChild grid gap-10 lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="border border-green-500/60  hover:border-green-900 hover:bg-slate-500/10 duration-500 p-6 lg:p-4 xl:p-9 thirdDesign "
          >
            <p className="text-4xl">{reason.icon}</p>
            <h3 className="text-xl font-bold my-5">{reason.title}</h3>
            <p className=" text-slate-500">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
