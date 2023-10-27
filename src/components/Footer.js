import React from "react";
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
    <section className="w-full my-3 text-white bg-slate-700">
      <div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4">
          {FOOTER_LIST.map((data, i) => (
            <FooterItem key={i} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

function FooterItem({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      {data.items.map((item, i) => (
        <div key={i}>
          <a>{item}</a>
        </div>
      ))}
    </div>
  );
}
