import React, { useState } from "react";
import Images from "../../media/images";
import BussAndCompany from "./bussAndCompany/BussAndCompany";
import AcAndTax from "./acAndTax/AcAndTax";
import DesignAndPrint from "./designAndPrint/DesignAndPrint";
import OtherServieces from "./otherServices/OtherServices";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
    setActiveService(index);
  };

  const topic = [
    {
      id: 1,
      name: "Business & Company",
      links: "bussiness-and-company",
    },
    {
      id: 2,
      name: " Account & Taxation",
      links: "account-and-tax",
    },
    {
      id: 3,
      name: "Design & Printing",
      links: "design-and-print",
    },
    {
      id: 4,
      name: "Others",
      links: "other-services",
    },
  ];

  return (
    <>
      <div className=" w-full">
        <div className=" mt-20">
          <div className="text-center">
            <h1 className="title-style">Our Services &amp; Pricing</h1>
            <div className="mt-4">
              <img src={Images.title_border} alt="" className="mx-auto" />
            </div>
          </div>
          <div className="mt-5">
            <div className="bg-background-dark_paper relative mx-auto flex max-w-4xl items-center rounded-full">
              {/* <div className="forlist" data-filter="All" /> */}
              <div className="text-white animation absolute top-0 left-0 z-0 h-full w-1/4 translate-x-[0%] transform rounded-full" />
              {topic.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`slider-header-button ${
                      index === activeIndex && "bg-sky-700 text-white"
                    }  font-Acme py-3 rounded-full no-underline`}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* services items */}
      {activeService === 0 && <BussAndCompany />}
      {activeService === 1 && <AcAndTax />}
      {activeService === 2 && <DesignAndPrint />}
      {activeService === 3 && <OtherServieces />}
    </>
  );
};

export default Services;
