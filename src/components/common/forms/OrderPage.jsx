import React from "react";
import ComapanyNameDetails from "./ComapanyNameDetails";

const OrderPage = () => {
  return (
    <div className=" ">
      <p className="text-primary-red font-Rakkas mt-7 text-center text-xl font-semibold tracking-wide underline md:!text-3xl">
        Private Company To Public
      </p>
      <div className="flex justify-between">
        <div>
          <div className="border-primary-blue flex w-full items-center gap-5 border-t py-2 pl-2 md:border-l md:!py-0">
            <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border-l p-1 text-white">
              <label htmlFor="">पहिले नै हामीसंग आवद्ध भएको कम्पनी</label>
              <input type="radio" name="radio-btn" id="" />
            </div>
            <div className="border-primary-blue bg-primary-red rounded-full border-l p-1 text-white">
              <label htmlFor="">नयाँ कम्पनी</label>
              <input type="radio" name="radio-btn" id="" />
            </div>
          </div>
        </div>
        <div>Firm No. 1234</div>
      </div>
      <ComapanyNameDetails />
    </div>
  );
};

export default OrderPage;
