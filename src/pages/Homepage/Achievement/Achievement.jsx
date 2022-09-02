import React from "react";
import Images from "../../../media/images";

const Achievement = () => {
  return (
    <div className="mb-20">
      <div className="max-w">
        <div className="bg-primary-blue grid w-full lg:grid-cols-2">
          <div className="my-auto flex-1 px-5 py-10 lg:py-0">
            <div className="text-center">
              <h1 className="title-style !text-white">Our Achievements</h1>
              <div className="mt-4">
                <img src={Images.title_border} alt="" className="mx-auto" />
              </div>
              {/* achieves  */}
              <div className="mx-auto mt-14 grid max-w-xl grid-cols-2 gap-6">
                {/* company register   */}
                <div className="flex flex-col justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <h2 className="mt-3 text-xl font-semibold lg:text-3xl">
                    200+
                  </h2>
                  <h3 className="mt-1 lg:text-lg">Company Registered</h3>
                </div>
                {/* company renewal  */}
                <div className="flex flex-col justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  <h2 className="mt-3 text-xl font-semibold lg:text-3xl">
                    300+
                  </h2>
                  <h3 className="mt-1 lg:text-lg">Company Renewals</h3>
                </div>
                {/* exim code register  */}
                <div className="flex flex-col justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  <h2 className="mt-3 text-xl font-semibold lg:text-3xl">
                    150+
                  </h2>
                  <h3 className="mt-1 lg:text-lg">Exim Code Registered</h3>
                </div>
                {/* Vat & Tax Assignmen  */}
                <div className="flex flex-col justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <h2 className="mt-3 text-xl font-semibold lg:text-3xl">
                    150+
                  </h2>
                  <h3 className="mt-1 lg:text-lg">Vat &amp; Tax Assignmen</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[20rem] lg:h-[30rem]">
            <img
              src={Images.achieve}
              className="h-full w-full object-cover lg:rounded-l-3xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
