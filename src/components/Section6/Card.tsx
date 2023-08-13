import Image from "next/image";
import React from "react";
import { FiShare2 } from "react-icons/fi";

const Card = () => {
  return (
    <div className="card w-96 py-12 shadow-xl mx-auto">
      <div className="flex flex-col gap-y-4 text-start">
        <Image src="/img4.png" alt=" Logo" width={420} height={570} priority />
        <div className="p-2">
          <h2 className="text-4xl font-thin my-4">Title of the page </h2>
          <p>
            This is Deception. This is Deception. This is Deception. This is
            Deception.
          </p>
          <div className="text-gray-800">
            <div className="flex w-full items-center justify-center my-4">
              <div className="flex gap-2">
                <div className="bg-blue-500 h-[58px] rounded-full p-2 inline-block items-center justify-center">
                  <FiShare2
                    style={{
                      height: "40px",
                      width: "40px",
                      color: "white",
                    }}
                  />
                </div>
                <div className="px-2 text-start">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
                      Need a help in Claim?
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-500">
                    Go to this step by step guideline process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
