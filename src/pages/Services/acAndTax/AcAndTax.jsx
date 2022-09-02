import React from "react";
import { Link } from "react-router-dom";

const AcAndTax = () => {
  const data = [
    {
      nepaliText: "कम्पनीको ३ महिने विवरण",
      englishText: "3 Months Returns of Company",
      component: "ThreeMonthsReturnForm",
      path: "three-months-return",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "वार्षिक विवरण तथा अध्यावधिक",
      englishText: "Annual Return Of Company",
      component: "AnualReturns",
      path: "annual-returns",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "शेयर लगत",
      englishText: "Share Lagat Provide",
      component: "ShareLagat",
      path: "share-lagat",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "कम्पनीको शेयर खरिद बिक्री",
      englishText: "Company Share Sales & Purchase",
      component: "CompanyShareSalesPurches",
      path: "share-sales-purchase",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "कम्पनीको नाम परवर्तन",
      englishText: "Company Name Change",
      component: "CompanyNameChange",
      path: "company-name-change",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },

    {
      nepaliText: "कम्पनीको ठेगाना परिवर्तन",
      englishText: "Company Address Change",
      component: "CompanyAddressChange",
      path: "company-address-change",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "कम्पनीको पुँजी बृद्धि",
      englishText: "Company Capital Increase",
      component: "CompanyCapitalIncrease",
      path: "company-capital-increase",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "कम्पनीको उद्देश्य थपघट",
      englishText: "Company Objective Change",
      component: "CompanyObjectChange",
      path: "company-objective-change",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "घरेलुमा नविकरण",
      englishText: "Gharelu Renewals",
      component: "GhareluRenew",
      path: "gharelu-renew",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "वडा कार्यालयमा नविकरण",
      englishText: "Ward Renewals ",
      component: "WardRenewal",
      path: "ward-renew",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "वाणिज्य कार्यालयमा नविकरण",
      englishText: "Banijjya Renewals",
      component: "BanijyaRenewal",
      path: "banijya-renew",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "ईक्जिम कोड नविकरण",
      englishText: "Exim Code Renewals",
      component: "EximCodeRenewal",
      path: "exim-code-renew",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
  ];
  return (
    <div className="w-padding w-full">
      <div className=" max-w">
        <div className="service-box business mt-10">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
            {/* private company registration  */}
            {data.map((value, index) => {
              return (
                <div className="flip-container w-full">
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
                                      "\n .cls-1 {\n                                fill: none;\n                                stroke: currentColor;\n                                stroke-linecap: round;\n                                stroke-linejoin: round;\n                                stroke-width: 2px;\n                              }\n                            ",
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
                          <h1 className="slider-h1 text-base">
                            <div className="font-Fondamento ">
                              {value.englishText}
                            </div>
                            <div className="font-Kalam ">
                              {value.nepaliText}
                            </div>
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="back h-full w-full">
                      <div className="bg-primary-blue h-full w-full rounded-tl-[4rem] rounded-br-[4rem]">
                        <div className="flex h-full w-full flex-col items-center justify-center p-3 text-white">
                          <div className="font-Acme text-lg font-medium">
                            Upto 7 Share Holders
                            <strong className="text-white">Rs, 12,000</strong>
                          </div>
                          <div className="font-Acme mt-1 text-lg">
                            More Then Will Be Added
                            <strong className="text-white">Rs 500</strong>/
                            share holder
                          </div>
                          <div className="mt-4">
                            <Link
                              state={{
                                englishText: value.englishText,
                                nepaliText: value.nepaliText,
                                component: value.component,
                                path: value.path,
                              }}
                              to="service-details"
                              className="bg-primary-green font-Berkshire rounded-2xl px-6 py-2 text-sm"
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
            {/* Public company registration  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcAndTax;
