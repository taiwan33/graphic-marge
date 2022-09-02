import React from "react";
import DetailsOfShareHolders from "../../../../components/common/forms/DetailsOfShareHolders";
import FormBranch from "../../../../components/common/forms/FormBranch";
import FormButtom from "../../../../components/common/forms/FormButtom";
import FormOtherDetails from "../../../../components/common/forms/FormOtherDetails";
import FormUploadDocument from "../../../../components/common/forms/FormUploadDocument";
import MainObjectives from "../../../../components/common/forms/MainObjectives";
import {
  Pan_Registration_v2,
  Pan_Registration_v3,
  Vat_upload_details,
} from "../VatRegistrationForm";

const VatRegistrationA = () => {
  return (
    <div>
      <form className="px-10 lg:!px-14">
        <p className="text-primary-red font-Rakkas mt-7 text-center text-xl font-semibold tracking-wide underline md:!text-3xl">
          PAN/VAT Registration Form (घरेलु वा वडा कार्यलयमा दर्ता भएको ब्यवसायको
          पान दर्ताको लागि)
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

        {/* business and company details */}
        <div className="overflow-x-auto">
          <table>
            <thead>
              <div className="flex">
                <div className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  कम्पनीको नाम
                </div>

                <div className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
                  <p>नेपालीमा : </p>
                  <input />
                </div>
                <div className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
                  <p>English मा : </p>
                  <input />
                </div>
              </div>
              <div className="flex">
                <div className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  कम्पनीको ठेगाना
                </div>
                <div className="border-primary-blue flex text-primary-red border px-20 text-base font-bold sm:text-lg">
                  <input />
                </div>
              </div>
              <div className="flex">
                <div className="border-primary-blue text-primary-red border px-6 text-lg font-bold">
                  ब्यवसायको प्रकार
                </div>
                <div className="flex border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-base">
                  <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
                    <label htmlFor="">एकल </label>
                    <input type="radio" name="radio-btn" id="" />
                  </div>
                  <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
                    <label htmlFor=""> साझेदारी</label>
                    <input type="radio" name="radio-btn" id="" />
                  </div>
                </div>
                <div className="flex border-primary-blue text-primary-red border px-6 text-base font-bold ">
                  ब्यवसायको प्रकृती:m,,m
                  <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
                    <label htmlFor="">ONLY PAN </label>
                    <input type="radio" name="radio-btn" id="" />
                  </div>
                  <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
                    <label htmlFor="">PAN & VAT</label>
                    <input type="radio" name="radio-btn" id="" />
                  </div>
                  <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
                    <label htmlFor=""> PAN, VAT & EXCISE</label>
                    <input type="radio" name="radio-btn" id="" />
                  </div>
                </div>
              </div>
            </thead>
          </table>
        </div>
        {/* business and company details close*/}

        <table className="mt-4">
          <thead>
            <tr>
              {Pan_Registration_v2.map((item, i) => {
                const { name, validation, ip1, type } = item;
                console.log(item);
                return (
                  <div
                    key={i}
                    className="border-primary-blue flex flex-col md:flex-row"
                  >
                    <td className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                      {ip1}
                    </td>
                    <td className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                      <input type={type} />
                    </td>
                  </div>
                );
              })}
            </tr>
          </thead>
        </table>

        <table className="mt-4">
          <thead>
            <tr>
              {Pan_Registration_v3.map((item, i) => {
                const { name, validation, ip1, type } = item;
                console.log(item);
                return (
                  <div
                    key={i}
                    className="border-primary-blue flex flex-col md:flex-row"
                  >
                    <td className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                      {ip1}
                    </td>
                    <td className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                      <input type={type} />
                    </td>
                  </div>
                );
              })}
            </tr>
          </thead>
        </table>

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

        {/* upload documents open */}
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
            {Vat_upload_details.map((item, index) => {
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
                  <td className="p-0">
                    <div className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none space-x-2">
                      {item.remark}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* upload documents close */}
        <FormBranch />
        <FormButtom />
      </form>
    </div>
  );
};

export default VatRegistrationA;
