import React from "react";
import { FaCheck } from "react-icons/fa";

export const Feature = () => {
  return (
    <section name="feature" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className=" font-bold text-5xl text-center">Features</h2>
        <p className="py-8 text-2xl text-center text-slate-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-4 pt-4">
          <FeatureItem
            title="Real-Time"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          />
          <FeatureItem
            title="Real-Time"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          />
          <FeatureItem
            title="Real-Time"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          />
          <FeatureItem
            title="Real-Time"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          />
        </div>
      </div>
    </section>
  );
};

function FeatureItem({ title, description }) {
  return (
    <div class="flex">
      <div>
        <FaCheck className="w-7 mt-1 mr-3 text-blue-600" />
      </div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="pt-2 pb-4 text-lg">{description}</p>
      </div>
    </div>
  );
}
