"use client";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const FaqItem = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Can I see who reads my email campaigns?",
      answer: "Lorem ipsum dolor sit amet consectetur. Convallis",
    },
    {
      question: "Do you offer non-profit discounts?",
      answer: "I mainly use HTML, CSS, and JavaScript.",
    },
    {
      question: "Can I see who reads my email campaigns?",
      answer:
        "I learned through online tutorials, courses, and practice projects.",
    },
    {
      question: "Can I see who reads my email campaigns?",
      answer: "I enjoy working with React and Vue.js.",
    },
  ];

  return (
    <div className="flex flex-shrink-0 items-center justify-center">
      <div className="grid grid-cols-1 mt-10 gap-4">
        {faqData.map((faq, index) => (
          <div key={index} className="lg:w-[630px] w-full">
            <div
              className={`flex flex-shrink-0 flex-col text-start w-full p-4 rounded-xl outline-none ${
                activeIndex === index ? "bg-[#1376F8] text-white" : "bg-white"
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <ul className="flex flex-shrink-0 justify-between border-b items-center pb-2 px-5">
                <li className="text-xl font-medium list-disc">
                  {faq.question}
                </li>
                <p className="flex-shrink-0">
                  {activeIndex === index ? (
                    <img src="/images/minus.svg" alt="" />
                  ) : (
                    <img src="/images/plus.svg" alt="" />
                  )}
                </p>
              </ul>
              <Transition
                show={activeIndex === index}
                enter="transition duration-300 ease-out"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-screen"
                leave="transition duration-200 ease-in"
                leaveFrom="opacity-100 max-h-screen"
                leaveTo="opacity-0 max-h-0"
              >
                {(ref) => (
                  <div
                    ref={ref}
                    className="overflow-hidden transition-max-height duration-300"
                  >
                    <p
                      className={`p-4 w-full border-t ${
                        activeIndex === index
                          ? "bg-[#1376F8] text-white"
                          : "bg-white"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Transition>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqItem;
