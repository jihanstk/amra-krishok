import Image from "next/image";
import logo from "../../public/Untitled-1.png";

const loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <Image className="w-32 h-32 mx-auto" src={logo} alt="loading logo" />
        <progress className="progress w-56"></progress>
      </div>
    </div>
  );
};

export default loading;
