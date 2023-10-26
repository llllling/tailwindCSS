import React from "react";
import SUPPORT from "../assets/support.jpeg";
import { FaArrowRight } from "react-icons/fa";

export const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-slate-900/90 absolute">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={SUPPORT}
          alt="support_background"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-center uppercase text-slate-300">
            support
          </h2>
          <h3 className="py-6 font-bold text-5xl text-center">
            We support you
          </h3>

          <p className="py-4 text-3xl text-slate-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 px-4 py-12 text-black lg:grid-cols-3 gap-x-8 gap-y-16 sm:pt-20">
          <SupportItem
            title="Support"
            description=" Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          />
          <SupportItem
            title="Inquiries"
            description=" Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          />
          <SupportItem
            title="Sales"
            description=" Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book."
          />
        </div>
      </div>
    </div>
  );
};

function SupportItem({ title, description }) {
  return (
    <div className="bg-white shadow-2xl rounded-xl">
      <div className="p-8">
        <h3 className="my-6 font-bold text-2xl">{title}</h3>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
      <div className="py-4 pl-8 bg-slate-100">
        <p className="flex items-center text-blue-600">
          More Info... <FaArrowRight className="w-5 ml-2" />
        </p>
      </div>
    </div>
  );
}
