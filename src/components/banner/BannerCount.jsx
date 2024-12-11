import React from "react";
import Deadlift from "../../../public/images/deadlift.jpg";

const BannerCount = () => {
  return (
    <>
      <div
        className="carousel mx-auto max-w-full grid grid-cols-4 gap-1  bg-black text-white px-10 py-6 "
        style={{
          backgroundImage: `url("${Deadlift}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
        {[
          { title: "759+", description: "Success Stories" },
          { title: "79", description: "Professional Trainer" },
          { title: "7.8k", description: "Happy Member" },
          { title: "17+", description: "Years Experience" },
        ].map((item, index) => (
          <div
            key={index}
            className="carousel-item flex flex-col items-center justify-center border border-gray-700 p-4 bg-opacity-80 backdrop-blur">
            <div className="flex flex-col items-center gap-2">
              <h1 className="lg:text-6xl font-bold text-white hover:text-orange-500 duration-300 cursor-pointer">
                {item.title}
              </h1>
              <p className="text-gray-400 text-sm lg:text-2xl font-semibold">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BannerCount;
