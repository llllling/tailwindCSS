import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaGithub,
} from "react-icons/fa";
const FOOTER_LIST = [
  {
    title: "solutions",
    items: ["Marketing", "Analystics", "Commerce", "Data"],
  },
  {
    title: "support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "company",
    items: ["About", "Blog", "Jobs"],
  },
  {
    title: "legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];
export const Footer = () => {
  return (
    <section className="w-full px-2 py-7 text-gray-300 bg-slate-700">
      <div className="max-w-[1240px] py-8 mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 ">
        {FOOTER_LIST.map((data, i) => (
          <FooterItem key={i} data={data} />
        ))}
        <div className="col-span-2 pt-8 md:pt-2">
          <p className=" font-bold uppercase">subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row ">
            <input
              className="w-full p-2 mb-4 mr-4 rounded-sm"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col justify-between sm:flex-row max-w-[1240px] mx-auto px-2 py-4 text-center text-gray-500">
        <p className="py-4">2022 Chatty, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaTwitch />
          <FaGithub />
        </div>
      </div>
    </section>
  );
};

function FooterItem({ data }) {
  return (
    <div className="text-center">
      <h6 className="pt-2 font-bold uppercase">{data.title}</h6>
      {data.items.map((item, i) => (
        <ul key={i}>
          <li className="py-1">{item}</li>
        </ul>
      ))}
    </div>
  );
}
