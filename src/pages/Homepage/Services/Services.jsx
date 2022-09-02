import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const data = [
    {
      nepaliText: "पब्लिक लिमिटेड कम्पनी दर्ता",
      englisgText: "Public Commpany Register",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "पब्लिक लिमिटेड कम्पनी दर्ता",
      englisgText: "Public Commpany Register",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "पब्लिक लिमिटेड कम्पनी दर्ता",
      englisgText: "Public Commpany Register",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "पब्लिक लिमिटेड कम्पनी दर्ता",
      englisgText: "Public Commpany Register",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
  ];

  return (
    <>
      <div className="max-w mt-10 lg:px-10 px-4 pb-20 md:mt-14">
        <div className="text-center">
          <h1 className="title-style">Our Services &amp; Pricing</h1>
          <div className="mt-4">
            <img src="../images/title-border.png" alt="" className="mx-auto" />
          </div>
        </div>
        <div className="service-box business mt-10">
          <div className="grid grid-cols-1 py-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {/* private company registration  */}

            {data.map((value, index) => {
              return (
                <div key={index} className="flip-container w-full">
                  <div className="flipper h-full w-full">
                    <div className="front bg-primary-blue relative h-full w-full overflow-hidden">
                      {/*  */}
                      <span className="ribbon-tr" />
                      <span className="ribbon-bl" />
                      <span className="ribbon-br" />
                      <div className="h-full w-full">
                        <div className="item slider-card">
                          <div className="slider-child">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              className="slider-icon"
                            >
                              <defs>
                                <style
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      "\n                                        .cls-1 {\n                                          fill: none;\n                                          stroke: currentColor;\n                                          stroke-linecap: round;\n                                          stroke-linejoin: round;\n                                          stroke-width: 2px;\n                                        }\n                                      ",
                                  }}
                                />
                              </defs>
                              <title />
                              <g data-name="79-users" id="_79-users">
                                <circle
                                  className="cls-1"
                                  cx={16}
                                  cy={13}
                                  r={5}
                                />
                                <path
                                  className="cls-1"
                                  d="M23,28A7,7,0,0,0,9,28Z"
                                />
                                <path
                                  className="cls-1"
                                  d="M24,14a5,5,0,1,0-4-8"
                                />
                                <path
                                  className="cls-1"
                                  d="M25,24h6a7,7,0,0,0-7-7"
                                />
                                <path
                                  className="cls-1"
                                  d="M12,6a5,5,0,1,0-4,8"
                                />
                                <path
                                  className="cls-1"
                                  d="M8,17a7,7,0,0,0-7,7H7"
                                />
                              </g>
                            </svg>
                          </div>
                          <h1 className="slider-h1 key={index}">
                            <div className="font-Fondamento">
                              {value.englisgText}
                            </div>
                            <div className="font-Kalam">{value.nepaliText}</div>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="back h-full w-full">
                      <div className="bg-primary-blue h-full w-full rounded-tl-[4rem] rounded-br-[4rem]">
                        <div className="flex h-full w-full flex-col items-center justify-center p-3 text-white">
                          <div className="font-Aladin text-lg font-medium">
                            {value.backText}
                          </div>

                          <div className="mt-5">
                            <Link
                              to="/services/service-details"
                              className="bg-primary-green font-Berkshire mt-2 rounded-2xl px-6 py-2 text-sm"
                            >
                              Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* view more  */}
          <div className="-mt-10 flex justify-center">
            <Link
              to="/services/bussiness-and-company"
              className="bg-primary-red font-Berkshire rounded-full py-1 px-2 text-white"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
