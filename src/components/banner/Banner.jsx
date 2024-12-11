import React from "react";

const Banner = () => {
  return (
    <>
      <div className="carousel mx-auto max-w-full grid grid-cols-3 bg-black text-white py-8 px-4">
        {/* First Item */}
        <div className="carousel-item flex items-center border border-gray-700 border-4 p-4">
          <i className="icofont-sale-discount text-[80px] items-left text-orange-500 mr-4"></i>{" "}
          <div className="flex flex-col items-right">
            <a
              href="#"
              className="font-bold text-lg text-[24px] hover:text-orange-600">
              Join Membership Now!
            </a>
            <a
              href="#"
              className=" font-bold text-lg text-white text-[16px] hover:text-orange-600">
              Get 50% OFF..!!
            </a>
          </div>
        </div>

        {/* Second Item */}
        <div className="carousel-item flex items-center border border-gray-700 border-4 p-4">
          <i className="icofont-muscle-weight text-[80px] items-left text-orange-500 mr-4"></i>{" "}
          <div className="flex flex-col items-right">
            <h2 className="font-bold text-lg text-[24px]">Certified Trainer</h2>
            <p className="text-sm text-gray-300 text-[16px]">
              Orci neque consectetuer per metus eros platea nostra potenti.
            </p>
          </div>
        </div>

        {/* Third Item */}
        <div className="carousel-item flex items-center border border-gray-700 border-4 p-4">
          <i className="icofont-dumbbell text-[80px] items-left text-orange-500 mr-4"></i>{" "}
          <div className="flex flex-col items-right">
            <h2 className="font-bold text-lg text-[24px]">Quality Equipment</h2>
            <p className="text-sm text-gray-300 text-[16px]">
              Orci neque consectetuer per metus eros platea nostra potenti.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
