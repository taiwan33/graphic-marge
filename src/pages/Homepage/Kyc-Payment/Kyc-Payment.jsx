import React from "react";

import Images from "../../../media/images";

const KycPayment = () => {
  return (
    <div>
      <div className="p-2">
        <div className="mt-0 flex flex-col items-center justify-between gap-2 rounded-lg md:flex-row md:gap-20">
          <a href="../kyc-form.html">
            <div className="bg-primary-blue font-Bree flex items-center justify-between gap-10 rounded-xl py-2 px-5 text-sm font-bold text-white lg:!text-lg">
              <div className="flex items-center justify-between">
                <img src={Images.kyc} className="h-10 rounded-2xl" alt="" />
              </div>
              <p>Please upload your KYC form</p>
            </div>
          </a>
          <a href="./ledger-details.html">
            <div className="bg-primary-red flex items-center gap-3 rounded-xl py-2 px-4 sm:px-10">
              <h1 className="font-Bree text-sm font-bold text-white lg:!text-lg">
                Your pending payment is Rs 20,000
              </h1>
              <img src={Images.pay_now} className="h-10 rounded-2xl" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default KycPayment;
