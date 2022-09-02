import React from "react";
import FormBranch from "../../../../components/common/forms/FormBranch";
import CompanySearch from "../../../../components/common/forms/CompanySearch";
import FormButtom from "../../../../components/common/forms/FormButtom";
import FormOtherDetails from "../../../../components/common/forms/FormOtherDetails";
import FormPayment from "../../../../components/common/forms/FormPayment";
import FormUploadDocument from "../../../../components/common/forms/FormUploadDocument";
import MainObjectives from "../../../../components/common/forms/MainObjectives";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import {
  banijiya_registration,
  banijiya_registration_business_details,
  banijiya_registration_upload_document,
  banijiya_registration_v2,
} from "./BanijiyaRegistrationForm";

const BanijyaCompanyRegistration = () => {
  const { register, handleSubmit } = useForm();
  const { state } = useLocation();
  const { slug } = useParams();
  return (
    <div>
      <form className="px-10 lg:!px-14">
        <p className=" text-primary-red text-xl font-semibold flex justify-center">
          Banijaya Registration Form (कम्पनीलाई बाणिज्य विभागमा दर्ताको लागि)
        </p>
        <div>
          <CompanySearch />
          {/* <ComapanyNameDetails /> */}
          <p className="text-primary-red text-lg underline">
            2. Others Details
          </p>

          <tr className="flex">
            <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
              ब्यवसायको नाम
            </th>
            <tr className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
              <td className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
                <label htmlFor="">एकल </label>
                <input type="radio" name="radio-btn" id="" />
              </td>
              <td className="border-primary-blue bg-primary-red rounded-full border-l p-1 text-white">
                <label htmlFor="">साझेदारी </label>
                <input type="radio" name="radio-btn" id="" />
              </td>
            </tr>
          </tr>

          <div className="border-primary-blue max-w-3xl border font-bold">
            {banijiya_registration.map((item, i) => {
              const { name, validation, ip1, type } = item;

              // console.log(item);
              return (
                <div
                  key={i}
                  className="border-primary-blue flex flex-col border-b md:flex-row"
                >
                  <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
                    {ip1}
                  </p>
                  <input
                    type={type}
                    className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                  />
                </div>
              );
            })}
          </div>

          <div className="border-primary-blue max-w-3xl border font-bold">
            {banijiya_registration_v2.map((item, i) => {
              const { name, validation, ip1, type } = item;

              // console.log(item);
              return (
                <div
                  key={i}
                  className="border-primary-blue flex flex-col border-b md:flex-row"
                >
                  <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
                    {ip1}
                  </p>
                  <input
                    type={type}
                    className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                  />
                </div>
              );
            })}
          </div>

          <span className="text-primary-red text-lg underline">
            3. Details of Share Holders
            <span className="text-primary-blue underline">
              (शेयर सदस्य तथा साँक्षीहरुको विवरण) (प्रा.लि. कम्पनीमा बढिमा १०१
              जना सम्म सदस्य रहन सकिन्छ ।)
            </span>
          </span>

          <div className="">
            <div className="flex justify-end">
              <a className="add-record cursor-pointer" data-added={0}>
                <i className="">
                  <svg
                    className="text-primary-blue h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"
                    />
                    <path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z" />
                  </svg>
                </i>
              </a>
            </div>
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
                          <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                            शेयर सदस्यको नागरिकता
                          </td>
                          <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
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
                              type="number"
                              name=""
                              className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                              id=""
                            />
                          </td>
                          <td className="p-0">
                            <input
                              type="number"
                              name=""
                              className="border-primary-blue file:bg-primary-blue h-[54px] w-full cursor-pointer border-r py-3 px-3 outline-none file:rounded-2xl file:text-white"
                              id=""
                            />
                          </td>
                          <td className="p-0">
                            <input
                              type="file"
                              name=""
                              className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                              id=""
                            />
                          </td>
                          <td className="p-0">
                            <input
                              type="file"
                              name=""
                              className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
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

            {/* share holder details form close */}
          </div>

          <MainObjectives />
          {/* upload document */}
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
              {banijiya_registration_upload_document.map((item, index) => {
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
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* upload document close */}

          <FormBranch />
          <FormButtom />
          <FormPayment />
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
        </div>
      </form>
    </div>
  );
};

export default BanijyaCompanyRegistration;
