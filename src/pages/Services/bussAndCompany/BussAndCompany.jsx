import React from "react";
import { Link } from "react-router-dom";

const BussAndCompany = () => {
  const data = [
    {
      nepaliText: "प्रा. लि. कम्पनी दर्ता",
      englishText: "Pvt. ltd. Company Registration",
      component: "PrivateCompanyRegistration",
      path: "private-company-registration",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },

    {
      nepaliText: "पब्लिक लिमिटेड कम्पनी दर्ता",
      englishText: "Public Company Registration",
      component: "PublicCompanyRegistration",
      path: "public-company-registration",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "मुनाफा वितरण नगर्ने कम्पनी दर्ता",
      englishText: "Non Profit Company Registration",
      component: "NonProfitCompanyRegistration",
      path: "nonprofit-company-registration",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder",
    },
    {
      nepaliText: "बणिज्यमा ब्यवसाय दर्ता",
      englishText: "Banijaya Registration",
      component: "BanijyaRegistration",
      path: "banijya-registration",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder ",
    },
    {
      nepaliText: "घरेलुमार्फत ब्यवसाय दर्ता",
      englishText: "Gharelu Registration",
      component: "GhareluRegistrationA",
      path: "gharelu-registrationA",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder ",
    },
    {
      nepaliText: "वडा मार्फत ब्यवसाय दर्ता",
      englishText: "Ward Registration",
      component: "WardRegistration",
      path: "ward-registration",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder ",
    },
    {
      nepaliText: "ईक्जिम कोडको लागि भन्सारमा दर्ता",
      englishText: "Exim Code Registration",
      component: "EximCodeRegistration",
      path: "exim-code-registration",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder ",
    },
    {
      nepaliText: "ट्रेडमार्क (ब्राण्ड) दर्ता",
      englishText: "Trademark (Brand) Registration",
      component: "TrademarkRegistration",
      path: "trademark-registration",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder ",
    },
    {
      nepaliText: "पान दर्ताको",
      englishText: "PAN/VAT Registration Form",
      component: "VatRegistration",
      path: "vat-registration",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder ",
    },
    {
      nepaliText: "सामाजिक सुरक्षाकोषमा दर्ता",
      englishText: "SSF Registration",
      component: "SSFRegistration",
      path: "ssf-registration",
      backText:
        "Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder Up to 7 share holders rs: 12,000 More Than will be added rs 500/share holder ",
    },
  ];

  return (
    <div className="w-full w-padding">
      <div className="max-w">
        <div className="service-box business mt-10">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
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
                                      "\n                              .cls-1 {\n                                fill: none;\n                                stroke: currentColor;\n                                stroke-linecap: round;\n                                stroke-linejoin: round;\n                                stroke-width: 2px;\n                              }\n                            ",
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
                            {value.backText}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BussAndCompany;

// const Newcmp=()=>{
//   return(<div></div>)
// }
// const Newcmppp=()=>{
//   return(<div></div>)
// }
