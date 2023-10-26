import React from "react";
import APPLE from "../assets/apple.svg";
import GOOGLE from "../assets/google.svg";

export const Home = () => {
  return (
    <section name="home" className="flex w-full h-screen bg-zinc-200">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center w-full px-2 py-8">
          <p className="text-2xl">Use our chat platform.</p>
          <h1 className="py-3 font-bold text-5xl">Chat Management</h1>
          <p className="text-2xl">Chatty is the best chat platform.</p>
          <button className="sm:w-[60%] px-6 py-3 my-4">Get Started</button>
        </div>

        <div className="flex flex-col justify-center px-2">
          <h2 className="w-full font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] ">
            Easily download app <br className="hidden sm:block" /> Google &
            Apple
          </h2>
          <p className="max-w-[470px] mt-5 text-[18px] leading-[30.8px]">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex flex-wrap mt-6 sm:mt-10">
            <img
              src={APPLE}
              className="w-[128.86px] h=[42.05px]  mr-5 object-contain cursor-pointer"
              alt="apple"
            />
            <img
              src={GOOGLE}
              alt="google"
              className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
