import React from "react";
import HeroImage from "../../public/images/Hero2.jpg";

const Membership = () => {
  return (
    <>
      <div
        className="hero min-h-screen max-h-8"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "80% ",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <div className="hero-overlay bg-opacity-70 "></div>
        <div className="text-center">
          <div className="max-w-md">
            <h1
              className="mb-5 text-white font-bold"
              style={{
                fontSize: "4.5rem",
                lineHeight: "1.1",
                letterSpacing: "0",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                fontFamily: "'Bebas Neue', sans-serif",
              }}>
              Let's Start Your Body Goal With Us
            </h1>
            <p className="mb-5 text-lg text-white">
              Dynamic fitness hub, equipped with cutting-edge machines, vibrant
              atmosphere, and expert trainers for optimal workouts.
            </p>
            <button className="btn bg-orange-400 text-[16px] text-white hover:bg-orange-600">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
