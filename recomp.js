"use client";

import React, { useState } from "react";

interface IPricing {
  title: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  }[];
  save: number;
  included: string[];
}

export const PricingData = [
  {
    title: "Free",
    description: "For getting started.",
    price: [
      {
        monthly: 0,
        yearly: 0,
      },
    ],
    save: 0,
    included: [
      "1 Online Store",
      "4.99% Service Fee",
      "1 Staff Account",
      "Web + Mobile Access",
    ],
  },
  {
    title: "Starter",
    description: "For small business and influencers.",
    price: [
      {
        monthly: 1499,
        yearly: 14399,
      },
    ],
    save: 3839,
    included: [
      "1 Online Store",
      "3.99% Service Fee",
      "2 Staff Accounts",
      "Web + Mobile Access",
      "COD & Manual Payments",
    ],
  },
  {
    title: "Growth",
    description: "For scaling your business exponentially.",
    price: [
      {
        monthly: 3899,
        yearly: 37499,
      },
    ],
    save: 9939,
    included: [
      "3 Online Stores",
      "1.99% Service Fee",
      "5 Staff Accounts",
      "5 Warehouses",
      "Returns & Replacements",
    ],
  },
];


const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="container mx-auto px-3 pb-5 lg:px-28 my-8">
      <div>
        <h2 className="text-center py-8 text-2xl font-semibold">
          A plan for every stage of your business.
        </h2>
      </div>
      <div className="flex justify-center">
        <button
          onClick={togglePricing}
          className={`${
            isYearly ? "bg-gray-200 " : "bg-blue-600 text-white"
          } px-4 py-2 rounded-md mr-2`}
        >
          Monthly
        </button>
        <button
          onClick={togglePricing}
          className={`${
            isYearly ? "bg-blue-600 text-white" : "bg-gray-200 "
          } px-4 py-2 rounded-md`}
        >
          Yearly
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {PricingData.map((el: IPricing, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800">{el.title}</h2>
            <p className="text-gray-600 mt-2">{el.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-4xl font-semibold">
                {isYearly ? (
                  <span>
                    ${`${el.price[0].yearly}`}{" "}
                    <small className="text-xs"> / yearly</small>
                  </span>
                ) : (
                  <span>
                    ${`${el.price[0].monthly}`}{" "}
                    <small className="text-xs"> / monthly</small>
                  </span>
                )}
              </p>
              <div>
                {isYearly && el.save > 0 && (
                  <button className="bg-[#ccf1cf] border text-[#17B31B] px-4 py-1 rounded-lg ">
                    ${el.save} save
                  </button>
                )}
              </div>
            </div>
            <div className="mt-4">
              <ul className="list-disc  list-inside text-gray-600">
                {el.included.map((item, i) => (
                  <li key={i} className="py-1">{item}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
