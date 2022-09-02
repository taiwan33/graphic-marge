import React from "react";
import Images from "../../../media/images";
const FonepayDetails = () => {
  return (
    <div className="mt-10" id="second" data-tab-content="">
      {/* fone pay details */}
      <h1 className="text-primary-red font-Rakkas text-center text-xl font-bold underline">
        Fone Pay Details
      </h1>
      <p className="text-primary-red mt-5 text-center text-lg font-bold underline">
        Fone Pay Transfer Bank:
        <span className="text-primary-blue font-Acme">
          Garima Bikas Bank Ltd.
        </span>
      </p>
      <div className="mt-5 grid place-content-center">
        <img
          src={Images.qr}
          className="border-primary-red border-2 p-2 sm:w-56"
          alt=""
        />
      </div>
      <div className="mt-5 grid place-content-center">
        <span className="border-primary-blue font-Acme text-primary-red border-2 p-2 text-lg font-bold">
          Fone Pay contact no:
          <span className="text-primary-blue font-semibold">9811111111</span>
        </span>
      </div>
    </div>
  );
};

export default FonepayDetails;
