import React from "react";
import Blog from "../Shared/Blog";
import Card from "./Card";

const Section6 = () => {
  return (
    <div className="text-center bg-slate-50 text-black py-6">
      <div className="mx-auto container">
        <div className="text-center my-6">
          <Blog />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Section6;
