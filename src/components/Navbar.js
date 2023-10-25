import React, { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Support", path: "/support" },
  { name: "Feature", path: "/feature" },
  { name: "Feedback", path: "/feedback" }
];

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg">
      <div className="flex items-center justify-between w-full h-full px-10">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text_4xl">Chatty</h1>
          <ul className="hidden md:flex">
            {NAV_ITEMS.map((item, key) => (
              <li key={key}>{item.name}</li>
            ))}
          </ul>
        </div>
        <div className="hidden pr-4 md:flex">
          <button className="mr-4 text-slate-600 bg-transparent border-none">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="mr-4 md:hidden" onClick={() => setNav((nav) => !nav)}>
          {nav ? (
            <FaTimes className="w-5" />
          ) : (
            <FaAlignJustify className="w-5" />
          )}
        </div>
      </div>
      <div className={nav ? "absolute bg-zinc-200 w-full px-8" : "hidden"}>
        <ul>
          {NAV_ITEMS.map((item, key) => (
            <li key={key} className="w-full border-b-2 border-gray-300">
              {item.name}
            </li>
          ))}
        </ul>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3 mb-4 bg-transparent text-slate-600">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </div>
    </div>
  );
};
