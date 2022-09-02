import React from "react";
import CompanySearch from "../../../../components/common/forms/CompanySearch";
import DetailsOfShareHolders from "../../../../components/common/forms/DetailsOfShareHolders";
import FormBranch from "../../../../components/common/forms/FormBranch";
import FormButtom from "../../../../components/common/forms/FormButtom";
import FormUploadDocument from "../../../../components/common/forms/FormUploadDocument";
import MainObjectives from "../../../../components/common/forms/MainObjectives";
import { Ward_upload_details_v2 } from "../WardRegistrationForm";

const WardRegistrationB = () => {
  return (
    <div>
      <form className="px-10 lg:!px-14">
        <p className="text-primary-red font-Rakkas mt-7 text-center text-xl font-semibold tracking-wide underline md:!text-3xl">
          Ward Registration Form (प्रा. लि. कम्पनीलाई वडामा दर्ता गर्नको लागि)
        </p>
        <div className="flex justify-between">
          <p className="text-primary-red text-lg underline">
            1. Business Name & Other Details
          </p>
          <p className="text-primary-red flex">
            Firm No.
            <p className=" text-primary-blue"> 1234</p>
          </p>
        </div>
        <CompanySearch />

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr className="flex">
                <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  कम्पनीको नाम
                </th>
                <td className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
                  <p>English मा:</p>
                  <input />
                </td>
                <td className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
                  <p>नेपालीमा : </p>
                  <input />
                </td>
              </tr>
              <tr className="flex">
                <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  कम्पनीको ठेगाना
                </th>
                <td className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
                  <input />
                </td>
              </tr>
              <tr className="flex">
                <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  सम्बन्धित ब्यक्तीको नाम
                </th>
                <td className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
                  <input />
                </td>
              </tr>
              <tr className="flex">
                <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  सम्बन्धित ब्यक्तीको सम्पर्क नं.
                </th>
                <td className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
                  <input />
                </td>
              </tr>
              <tr className="flex">
                <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  चुक्ता पुँजी
                </th>
                <td className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
                  <input />
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <p className="text-primary-red text-lg underline">
          3. Details of Share Holders
        </p>
        <p className=" text-primary-blue">
          (साझेदार सदस्यहरुको विवरण) (२ वा २ भन्दा बढि साझेदार भएर दर्ता गर्दा
          यो फर्म अनिवार्य भर्नुपर्नेछ ।)
        </p>

        {/* share holder details form */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="min-w-[1300px] overflow-x-auto">
                <table id="tbl_posts">
                  <thead>
                    <tr>
                      <td className="border-primary-blue  text-primary-red border text-lg font-bold">
                        क्र. स.
                      </td>
                      <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                        साझेदार सदस्यहरुको नाम
                      </td>
                      <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                        हालको ठेगाना
                      </td>
                      <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                        लगानी गर्ने शेयरको प्रतिशत
                      </td>
                      <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                        लगानी गर्ने शेयर रकम
                      </td>

                      <td className="border-primary-blue text-primary-red border border-r-0 text-base font-bold sm:text-lg">
                        शेयर सदस्यको नागरिकता
                      </td>
                      <td className="border-primary-blue text-primary-red border border-r text-base font-bold sm:text-lg">
                        पासपोर्ट साईजको फोटो
                      </td>
                    </tr>
                  </thead>
                  <tbody id="tbl_posts_body">
                    <tr id="rec-1" className="border-primary-blue border">
                      <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                        1
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name=""
                          className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                          id=""
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name=""
                          className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                          id=""
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name=""
                          className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                          id=""
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name=""
                          className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                          id=""
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="file"
                          name=""
                          className="border-primary-blue file:bg-primary-blue h-[54px] w-full cursor-pointer border-r py-3 px-3 outline-none file:rounded-2xl file:text-white"
                          id=""
                        />
                      </td>

                      <td className="p-0">
                        <input
                          type="file"
                          name=""
                          className="border-primary-blue file:bg-primary-blue m-0 w-full cursor-pointer py-3 px-3 outline-none file:rounded-2xl file:text-white"
                          id=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ display: "none" }}>
                  {/* table row add */}
                  <table id="sample_table">
                    <tbody>
                      <tr id="" className="border-primary-blue border">
                        <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                          <span className="sn">1</span>
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            name=""
                            className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                            id=""
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            name=""
                            className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                            id=""
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            name=""
                            className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                            id=""
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="file"
                            name=""
                            className="border-primary-blue file:bg-primary-blue m-0 w-full cursor-pointer border-r py-3 px-3 outline-none file:rounded-2xl file:text-white"
                            id=""
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            name=""
                            className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                            id=""
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="text"
                            name=""
                            className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                            id=""
                          />
                        </td>
                        <td className="p-0">
                          <input
                            type="file"
                            name=""
                            className="border-primary-blue file:bg-primary-blue m-0 w-full cursor-pointer py-3 px-3 outline-none file:rounded-2xl file:text-white"
                            id=""
                          />
                        </td>
                        <td className="">
                          <a href="" className="delete-record">
                            <svg
                              className="text-primary-red h-8 w-8"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8l-1.4 1.4z"
                              />
                            </svg>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* details of share holders close */}

        <MainObjectives />

        <table>
          <thead>
            <tr>
              <td className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                S. N.
              </td>
              <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                Document Name
              </td>
              <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                Action
              </td>
              <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                Remarks
              </td>
            </tr>
          </thead>
          <tbody>
            {Ward_upload_details_v2.map((item, index) => {
              return (
                <tr className="border-primary-blue border">
                  <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                    {item.sn}
                  </td>
                  <td className="p-0">
                    <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                      {item.ip1}
                      <button className="bg-primary-blue text-white rounded-xl ml-3 px-2">
                        Upload
                      </button>
                    </p>
                  </td>
                  <td className="p-0">
                    <div className="border-primary-blue text-white m-0 h-[54px] w-full border-r py-3 px-3 outline-none space-x-2">
                      <button className="bg-primary-green rounded-xl px-2 ">
                        view
                      </button>
                      <button className="bg-primary-red rounded-xl px-2">
                        Delete
                      </button>
                    </div>
                  </td>
                  <td>
                    <div className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none space-x-2">
                      {item.remark}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <FormBranch />
        <FormButtom />
        <div className="my-2">
          <p>
            माथी उल्लेखित घरेलु दर्ता अन्तर्गतको २ नं.मा रहेको दर्ता शुल्क
            सम्बन्धि जानकारीको लागि यहाँ Click गर्नुहोस् लेखेको ठाउँमा Click
            गर्दा माथी अन्य फर्महरुमा देखाए जस्तै Pop Up हरु खुल्नेछ ।
          </p>
          <p>
            त्यसै गरी सबै फर्म भरेर Submit मा Click गरेपछि पनि अन्य फर्महरुमा
            उल्लेख गरे अनुसारकै Popup हरु खुल्नेछ ।
          </p>
        </div>
      </form>
    </div>
  );
};

export default WardRegistrationB;
