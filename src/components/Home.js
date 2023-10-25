import React from "react";
import APPLE from "../assets/apple.svg";
import GOOGLE from "../assets/google.svg";

export const Home = () => {
  return (
    <section className="bg-zinc-200">
      <div className="flex justify-between">
        <div className="flex-grow px-6 py-14">
          <p className="mb-2">Use our chat platform.</p>
          <h1 className="font-bold text-5xl mb-3">Chat Management</h1>
          <div className="w-fit">
            <p className="mb-2">Chatty is the best chat platform.</p>
            <button className="px-8 py-2 w-full">Get Started</button>
          </div>
        </div>
        <div className="flex-grow px-6 py-14">
          <h2 className="font-bold text-3xl mb-8">
            Easily download app <br className="mb-3" /> Google & Apple
          </h2>
          <p className="mb-5">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
          <div className="flex">
            <img src={APPLE} className="mr-4" alt="apple" />
            <img src={GOOGLE} alt="google" />
          </div>
        </div>
      </div>
    </section>
  );
};
