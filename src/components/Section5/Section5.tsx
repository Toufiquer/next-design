import Image from "next/image";
import Profile from "../Shared/Profile";
const Section5 = () => {
  return (
    <div className="text-center bg-slate-50 text-black py-6">
      <div className="mx-auto container">
        <div className="flex bg-[#dfdfdf] rounded flex-col text-start md:text-center justify-center w-full py-6">
          <div className="flex w-full items-center justify-center my-4">
            <Image
              src="/logo.png"
              alt=" Logo"
              width={120}
              height={70}
              priority
            />
          </div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-800">
            Need a help in Claim?
          </h5>
          <div className="text-gray-800">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
