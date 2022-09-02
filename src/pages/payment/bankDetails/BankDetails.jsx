import React from "react";
import Images from "../../../media/images";

const BankDetails = () => {
  return (
    <div className="max-w">
      <div className="">
        <div className="p-3 md:!p-10">
          <div className="tab-content mx-3">
            <div id="first">
              <div className="mt-10 font-bold">
                <h1 className="text-primary-blue font-Rakkas text-center text-4xl font-bold underline">
                  Bank Details
                </h1>
                <div className="font-Bree">
                  <div className="text-primary-red mt-3 text-center text-xl font-bold">
                    Bank: <span className="text-primary-blue">A</span>
                    (Garima Bikas Bank Ltd.)
                  </div>
                  <div className="mt-3 grid place-content-center items-center lg:grid-cols-4">
                    <div className="col-span" />
                    <div className="lg:col-span-2">
                      <div className="border-primary-blue items-center border-2 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          Bank Name
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          Garima Bikash Bank
                        </span>
                      </div>
                      {/* branch name */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          Branch Name
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          Malpot Chowk
                        </span>
                      </div>
                      {/* A/C Holder Name */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          A/C Holder Name
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          Graphic Marg Pvt. Ltd.
                        </span>
                      </div>
                      {/* a/c number */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          A/C Number
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          03700100753960000001
                        </span>
                      </div>
                      {/* bank contact number */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          Bank Contact Number
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          056-533275
                        </span>
                      </div>
                    </div>
                    {/* qr code */}
                    <div className="border-primary-blue h-auto border-2 sm:w-[13.13rem] lg:!border-l-0">
                      <img src={Images.qr} className="" alt="" />
                    </div>
                  </div>
                </div>
                {/* bank B */}
                <div className="font-Bree mt-10">
                  <p className="text-primary-red mt-5 text-center text-xl font-bold">
                    Bank: <span className="text-primary-blue">B</span>
                    (Machhapuchhre Bank Ltd.)
                  </p>
                  <div className="mt-5 grid place-content-center items-center lg:grid-cols-4">
                    <div className="col-span" />
                    {/* left items details */}
                    <div className="lg:col-span-2">
                      {/* bank name */}
                      <div className="border-primary-blue items-center border-2 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          Bank Name
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 flex-shrink-0 p-2">
                          Machhapuchhre Bank Ltd.
                        </span>
                      </div>
                      {/* branch name */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          Branch Name
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          Hakim Chowk
                        </span>
                      </div>
                      {/* A/C Holder Name */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          A/C Holder Name
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          Graphic Marg Pvt. Ltd.
                        </span>
                      </div>
                      {/* a/c number */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          A/C Number
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          1400084086600011
                        </span>
                      </div>
                      {/* bank contact number */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          Bank Contact Number
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          056-590976
                        </span>
                      </div>
                    </div>
                    {/* qr code */}
                    <div className="border-primary-blue h-auto border-2 sm:w-[13.13rem] lg:!border-l-0">
                      <img src={Images.qr} className="" alt="" />
                    </div>
                  </div>
                </div>
                {/* bank C */}
                <div className="font-Bree mt-10">
                  <p className="text-primary-red mt-5 text-center text-xl font-bold">
                    Bank: <span className="text-primary-blue">C</span>
                    (NMB Bank Ltd.) for Use Only Press
                  </p>
                  <div className="mt-5 grid place-content-center items-center lg:grid-cols-4">
                    <div className="col-span" />
                    {/* left items details */}
                    <div className="lg:col-span-2">
                      {/* bank name */}
                      <div className="border-primary-blue items-center border-2 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          Bank Name
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          NMB Bank Ltd.
                        </span>
                      </div>
                      {/* branch name */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          Branch Name
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          NGT Mainroad
                        </span>
                      </div>
                      {/* A/C Holder Name */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          A/C Holder Name
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          Graphic Marg Pvt. Ltd.
                        </span>
                      </div>
                      {/* a/c number */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          A/C Number
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          156014448900015
                        </span>
                      </div>
                      {/* bank contact number */}
                      <div className="border-primary-blue items-center border-2 border-t-0 sm:flex">
                        <span className="text-primary-red border-primary-blue w-56 p-2 sm:border-r-2">
                          Bank Contact Number
                        </span>
                        <span className="text-primary-blue border-primary-blue w-56 p-2">
                          056-596862
                        </span>
                      </div>
                    </div>
                    {/* qr code */}
                    <div className="border-primary-blue h-auto border-2 sm:w-[13.13rem] lg:!border-l-0">
                      <img src={Images.qr} className="" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* third item */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
