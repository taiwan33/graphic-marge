import React from "react";
import Images from "../../media/images";
import NewCompanyList from "./new-company-list/NewCompanyList";
import { useState } from "react";
import OldCompanyList from "./old-company-list/OldCompanyList";
import OtherList from "./otherList/OtherList";

const Works = () => {
  const [isActiveLink, setIsActiveLink] = useState(0);
  const [showActiveWork, setShowActiveWork] = useState(0);

  const handleActive = (index) => {
    setShowActiveWork(index);
    setIsActiveLink(index);
  };

  return (
    <div className="w-padding mt-5 w-full">
      <div className="max-w">
        <div className="sm:mb-10 mb-3 text-center">
          <h1 className="title-style !font-Yatra">हामीले गरेका कामहरु</h1>
          <div className="mt-4">
            <img src={Images.title_border} alt="" className="mx-auto" />
          </div>
        </div>
        <div className="md:!p-10">
          <div className="border-primary-red grid grid-cols-1 place-content-between gap-2 md:gap-5 rounded-3xl border-2 p-3  md:grid-cols-2 lg:grid-cols-3">
            <div
              onClick={() => handleActive(0)}
              className={` cursor-pointer ${
                isActiveLink === 0 && "bg-[#ee1d23]  text-white"
              } no-underline rounded-full bg-[#DFF1E7] py-1 md:py-3 text-center font-bold`}
            >
              <div className="font-Rakkas md:text-xl ">New Company List</div>
              <div className="font-Yatra md:text-xl">नयाँ कम्पनीको सूची</div>
            </div>
            <div
              onClick={() => handleActive(1)}
              className={` cursor-pointer ${
                isActiveLink === 1 && "bg-[#ee1d23]  text-white"
              } no-underline rounded-full bg-[#DFF1E7] py-1 md:py-3 text-center font-bold`}
            >
              <div className="font-Rakkas md:text-xl">Old Company List</div>
              <div className="font-Yatra md:text-xl">पुरानो कम्पनीको सूची</div>
            </div>
            <div
              onClick={() => handleActive(2)}
              className={` cursor-pointer ${
                isActiveLink === 2 && "bg-[#ee1d23]  text-white"
              } no-underline rounded-full bg-[#DFF1E7] py-1 md:py-3 text-center font-bold`}
            >
              <div className="font-Rakkas md:text-xl">Other business List</div>
              <div className="font-Yatra md:text-xl">अन्य व्यवसायको सूची</div>
            </div>
          </div>
        </div>

        {showActiveWork === 0 && <NewCompanyList />}
        {showActiveWork === 1 && <OldCompanyList />}
        {showActiveWork === 2 && <OtherList />}
      </div>
    </div>
  );
};

export default Works;
