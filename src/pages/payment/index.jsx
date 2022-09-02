import React, { useState } from "react";
import Images from "../../media/images";
import BankDetails from "./bankDetails/BankDetails";
import FonepayDetails from "./fonepayDetails/FonepayDetails";
import OtherDetails from "./otherDetails/OtherDetails";
import EsewaDetails from "./e-sewa/EsewaDetails";

const Payment = () => {
  const [isActiveLink, setIsActiveLink] = useState(0);
  const [showActive, setShowActive] = useState(0);

  const clickHandler = (index) => {
    setIsActiveLink(index);
    setShowActive(index);
  };

  return (
    <div className="max-w">
      <div className="text-center">
        <h1 className="title-style">Our Payment Details</h1>
        <div className="mt-4">
          <img src={Images.title_border} alt="" className="mx-auto" />
        </div>
      </div>
      <div className="">
        {/* tab  */}
        <div className="p-3 md:!p-10">
          <div className="tabs font-Acme border-primary-red m-0 grid list-none grid-cols-1 place-content-between gap-5 rounded-3xl text-xl border-2 p-3  md:grid-cols-2 lg:grid-cols-4">
            <div
              onClick={() => clickHandler(0)}
              className={`active tab cursor-pointer ${
                isActiveLink === 0 && "bg-primary-red text-white"
              }  rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold`}
            >
              <span>Bank Details</span>
            </div>
            <div
              onClick={() => clickHandler(1)}
              className={`active tab cursor-pointer ${
                isActiveLink === 1 && "bg-primary-red text-white"
              }  rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold`}
            >
              <span className="">Fone Pay Details</span>
            </div>
            <div
              onClick={() => clickHandler(2)}
              className={`active tab cursor-pointer ${
                isActiveLink === 2 && "bg-primary-red text-white"
              }  rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold`}
            >
              <span>e-Sewa Details</span>
            </div>
            <div
              onClick={() => clickHandler(3)}
              className={`active tab cursor-pointer ${
                isActiveLink === 3 && "bg-primary-red text-white"
              }  rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold`}
            >
              <span>Others Details</span>
            </div>
          </div>

          {showActive === 0 && <BankDetails />}
          {showActive === 1 && <FonepayDetails />}
          {showActive === 2 && <EsewaDetails />}
          {showActive === 3 && <OtherDetails />}
        </div>
      </div>
    </div>
  );
};

export default Payment;
