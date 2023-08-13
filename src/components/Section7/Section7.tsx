import React from "react";
import Blog from "../Shared/Blog";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";

const Section7 = () => {
  return (
    <div className="text-center bg-slate-50 text-black py-6">
      <div className="animate__animated animate__backInUp">
        <div className="mx-auto container">
          <div className="text-center text-black">
            <Blog />
            <Image
              src="/img5.png"
              alt="Vercel Logo"
              width={1024}
              height={960}
              priority
              className="mx-auto mt-4"
            />
            <div className="mt-20">
              <div className="font-bold text-sm">Messaging for all</div>
              <p className="mt-2 text-[#242424] text-2xl">
                User generated content in real-time will have multiple touch
                points for offshoring
              </p>
              <div className="form-control w-80 mt-4 mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full pr-16 bg-transparent"
                  />
                  <button className="btn bg-[#2464ee] border-0 text-white hover:bg-[#407bfa] absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex gap-6 my-6 mx-auto max-w-[660px]">
                <div className="p-5 flex items-center justify-center gap-4">
                  <BsCheckCircle
                    width={420}
                    height={570}
                    priority
                    className="h-[40px] w-[40px] bg-blue-500 text-white rounded-3xl"
                  />
                  Fully Secure
                </div>
                <div className="p-5 flex items-center justify-center gap-4">
                  <BsCheckCircle
                    width={420}
                    height={570}
                    priority
                    className="h-[40px] w-[40px] bg-blue-500 text-white rounded-3xl"
                  />
                  24/7 Support
                </div>
                <div className="p-5 flex items-center justify-center gap-4">
                  <BsCheckCircle
                    width={420}
                    height={570}
                    priority
                    className="h-[40px] w-[40px] bg-blue-500 text-white rounded-3xl"
                  />
                  Done Deal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
