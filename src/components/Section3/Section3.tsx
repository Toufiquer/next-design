import Image from "next/image";
import Card from "./Card";

const Section3 = () => {
  return (
    <div className="text-center bg-slate-50 text-black py-6">
      <div className="mx-auto container">
        <div className="font-bold text-4xl">Messaging for all</div>
        <p className="mt-2 text-[#4a4a4a] text-xl">
          User generated content in real-time will have multiple touch points
          for offshoring
        </p>
        <div className="my-6">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="p-2 flex flex-col gap-4 w-full order-2 sm:order-1">
              <Card />
              <Card />
              <Card />
            </div>
            <div className="order-1 sm:order-2">
              <Image
                src="/img2.png"
                alt="Vercel Logo"
                width={600}
                height={660}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
