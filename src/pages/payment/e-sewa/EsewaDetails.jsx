import React from "react";
import Images from "../../../media/images";

const EsewaDetails = () => {
  return (
    <div className="font-Acme mt-10" id="third" data-tab-content="">
      {/* esewa details for graphic marg */}
      <div>
        <h1 className="text-primary-red font-Rakkas mt-10 text-center text-xl font-bold underline">
          Esewa Details
        </h1>
        <p className="text-primary-red mt-5 text-center text-lg font-bold underline">
          Esewa : <span className="text-primary-blue">1</span> (Used for Graphic
          Marg Pvt. Ltd)
        </p>
        <p className="text-primary-red mt-5 text-center text-lg font-bold">
          Esewa Id: <span className="text-primary-blue">9855022279</span>
        </p>
        <div className="grid place-content-center">
          <div className="border-primary-red mt-5 inline-block border-2">
            <img
              src="./images/esewa_payment.png"
              className="mx-auto h-10"
              alt=""
            />
            <img src={Images.qr} className="p-2 sm:w-56" alt="" />
            <p className="text-primary-red text-center text-xl font-bold underline">
              Janak Khadka
            </p>
            <p className="text-primary-blue border-primary-green mt-2 border-b-2 text-center text-xl font-bold">
              9846901357
            </p>
            <p className="text-primary-blue mt-2 text-center font-bold underline">
              For
            </p>
            <p className="text-primary-red text-center text-xl font-bold">
              Graphic Marg Pvt. Ltd
            </p>
          </div>
        </div>
      </div>
      {/* esewa details for press */}
      <div className="mt-10">
        <p className="text-primary-red mt-5 text-center text-lg font-bold underline">
          Esewa : <span className="text-primary-blue">2</span> (Used for Press
          Only)
        </p>
        <p className="text-primary-red mt-5 text-center text-lg font-bold">
          Esewa Id: <span className="text-primary-blue">9846901357</span>
        </p>
        <div className="grid place-content-center">
          <div className="border-primary-red mt-5 inline-block border-2">
            <img
              src="./images/esewa_payment.png"
              className="mx-auto h-10"
              alt=""
            />
            <img src={Images.qr} className="p-2 sm:w-56" alt="" />
            <p className="text-primary-red text-center text-xl font-bold underline">
              Janak Khadka
            </p>
            <p className="text-primary-blue border-primary-green mt-2 border-b-2 text-center text-xl font-bold">
              9846901357
            </p>
            <p className="text-primary-blue mt-2 text-center font-bold underline">
              For
            </p>
            <p className="text-primary-red text-center text-xl font-bold">
              Graphic Marg Pvt. Ltd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsewaDetails;
