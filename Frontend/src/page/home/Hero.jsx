import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-white text-center space-y-8">
      {/* Hero Image */}
      <div>
        <img
          src="/Images/homeHero.png"
          alt="homeHero"
          className="h-[60vh] w-[100%] mx-auto -mt-8"
        />
      </div>

      {/* Hero Text */}
      <div className="flex flex-col items-center justify-center space-y-4 text-[#424242]">
        <h2 className="text-3xl font-semibold">Invest in everything</h2>
        <p className="text-lg text-[#666] ">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <div className="bg-[#387ed1] text-xl cursor-pointer rounded-md mt-3 text-white px-8 py-2 hover:bg-[#1a1a1a] transition">
          Sign up for free
        </div>
      </div>
    </div>
  );
};

export default Hero;
