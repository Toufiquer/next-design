import Image from "next/image";
import Card from "./Card";

const Section4 = () => {
  return (
    <div className="text-center bg-[#151B28] text-black py-6">
      <div className="mx-auto container">
        {/* <div className="font-bold text-4xl">Messaging for all</div>
        <p className="mt-2 text-[#ffffff] text-xl">
          User generated content in real-time will have multiple touch points
          for offshoring
        </p> */}
        <div className="my-6">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="">
              <Image
                src="/img3.png"
                alt="Vercel Logo"
                width={600}
                height={660}
                priority
              />
            </div>
            <div className="p-2 flex flex-col gap-4 w-full">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
