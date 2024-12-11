import React from "react";
import HeroImage from "../../public/images/Hero.jpg"; // Adjust the relative path based on your folder structure

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center">
        <div className="max-w-md">
          {/* Ionicon with barbell-outline */}
          <ion-icon
            name="barbell-outline"
            style={{
              fontSize: "4rem",
              color: "#FFA500",
              marginBottom: "1rem",
            }}></ion-icon>
          <h1
            className="mb-5 text-white font-bold"
            style={{
              fontSize: "4.5rem",
              lineHeight: "1.1",
              letterSpacing: "0",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
              fontFamily: "'Bebas Neue', sans-serif",
            }}>
            Its Time To Gain More Muscles
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
  );
};

export default Hero;
