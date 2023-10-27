import React from "react";

export const Feedback = () => {
  return (
    <section
      name="testimonials"
      className="w-full my-24 text-white bg-slate-700"
    >
      <div className="max-w-6xl px-5 mx-auto text-center py-12">
        <h2 className="text-4xl font-bold">Testimonials</h2>
        <p className="py-8 text-2xl">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <FeedbackItem
            addStyle="flex"
            imgSrc="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc"
            title="Ali ko"
            description=" Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book."
          />
          <FeedbackItem
            addStyle="hidden md:flex"
            imgSrc="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc"
            title="Ali ko"
            description=" Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book."
          />
          <FeedbackItem
            addStyle="hidden md:flex"
            imgSrc="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc"
            title="Ali ko"
            description=" Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book."
          />
        </div>
        <button className="px-6 py-3 my-8 bg-gradient-to-b from-cyan-500 to-blue-500  duration-300 hover:scale-110">
          Get Started
        </button>
      </div>
    </section>
  );
};

function FeedbackItem({ addStyle, imgSrc, title, description }) {
  return (
    <div
      className={
        addStyle +
        " flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3"
      }
    >
      <div>
        <img className="w-16 -mt-14 rounded-full" src={imgSrc} alt={"person"} />
      </div>
      <h5 className="text-lg font-bold">{title}</h5>
      <p className="text-sm">{description}</p>
    </div>
  );
}
