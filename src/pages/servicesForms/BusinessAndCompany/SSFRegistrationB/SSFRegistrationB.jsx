import React from "react";
import ComapanyNameDetails from "../../../../components/common/forms/ComapanyNameDetails";
import CompanySearch from "../../../../components/common/forms/CompanySearch";
import DetailsOfShareHolders from "../../../../components/common/forms/DetailsOfShareHolders";
import FormBranch from "../../../../components/common/forms/FormBranch";
import FormButtom from "../../../../components/common/forms/FormButtom";
import FormOtherDetails from "../../../../components/common/forms/FormOtherDetails";

const SSFRegistrationB = () => {
  return (
    <div>
      <form className="px-10 lg:!px-14">
        <p className="text-primary-red font-Rakkas mt-7 text-center text-xl font-semibold tracking-wide underline md:!text-3xl">
          SSF Registration (सामाजिक सुरक्षा कोषमा दर्ता)
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

        <div className="overflow-x-auto mt-4                                                                                                ">
          <table>
            <thead>
              <tr className="flex">
                <th className="border-primary-blue text-primary-red px-10 border text-lg font-bold">
                  Company Name
                </th>

                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-lg">
                  <input />
                </td>
              </tr>
              <tr className="flex">
                <th className="border-primary-blue px-10 text-primary-red border text-lg font-bold">
                  Company Address
                </th>
                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-lg">
                  <input />
                </td>
              </tr>
              <tr className="flex">
                <th className="border-primary-blue px-10 text-primary-red border text-lg font-bold">
                  SSF Username, Password & SSID
                </th>
                <td className="border-primary-blue grid text-primary-red border text-base font-bold sm:text-lg">
                  <td className="flex">
                    <p>Username: </p>
                    <input />
                  </td>
                  <td className="flex">
                    <p>Password: </p>
                    <input />
                  </td>
                  <td className="flex">
                    <p>SSID: </p>
                    <input />
                  </td>
                </td>
              </tr>

              <tr className="flex">
                <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  Entry गर्नुपर्ने जम्मा Employee हरुको संख्या
                </th>
                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-lg">
                  <input /> जना
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <div>
          <p className="text-primary-blue text-base font-semibold">
            एकैपटकमा ४ जना भन्दा बढि कर्मचारीहरुको ईन्ट्री गर्नुपर्ने भएमा प्रती
            ब्यक्ति ३०० को दरले लाग्नेछ, तर ४ जना भन्दा कमको संख्यामा ईन्ट्री
            गर्दा एकमुस्ट १२०० लाग्नेछ ।
          </p>
        </div>
        <p className="text-primary-red flex text-lg underline">
          2. Details of Emloyee
          <p className=" text-primary-blue">
            (ईन्ट्री गर्नुपर्ने कर्मचारीहरुको सम्पूर्ण विवरण यो तालिकामा
            भर्नुहोस् ।)
          </p>
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
                        कर्मचारीहरुको नाम
                      </td>
                      <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                        हालको ठेगाना
                      </td>

                      <td className="border-primary-blue text-primary-red border border-r-0 text-base font-bold sm:text-lg">
                        मो. नं.
                      </td>
                      <td className="border-primary-blue text-primary-red border border-r text-base font-bold sm:text-lg">
                        ईमेल
                      </td>
                      <td className="border-primary-blue text-primary-red border border-r-0 text-base font-bold sm:text-lg">
                        पद
                      </td>
                      <td className="border-primary-blue text-primary-red border border-r text-base font-bold sm:text-lg">
                        नियुक्ती मिति
                      </td>
                      <td className="border-primary-blue text-primary-red border border-r-0 text-base font-bold sm:text-lg">
                        खाता नं.
                      </td>
                      <td className="border-primary-blue text-primary-red border border-r text-base font-bold sm:text-lg">
                        नागरिकता
                      </td>
                      <td className="border-primary-blue text-primary-red border border-r text-base font-bold sm:text-lg">
                        फोटो
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
                          type="text"
                          name=""
                          className="border-primary-blue file:bg-primary-blue m-0 w-full  border-r cursor-pointer py-3 px-3 outline-none file:rounded-2xl file:text-white"
                          id=""
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="text"
                          name=""
                          className="border-primary-blue file:bg-primary-blue m-0 w-full  border-r cursor-pointer py-3 px-3 outline-none file:rounded-2xl file:text-white"
                          id=""
                        />
                      </td>
                      <td className="p-0">
                        <input
                          type="date"
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
                          type="file"
                          name=""
                          className="border-primary-blue file:bg-primary-blue m-0 w-full cursor-pointer border-r py-3 px-3 outline-none file:rounded-2xl file:text-white"
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

        <FormBranch />
        <FormButtom />
      </form>
    </div>
  );
};

export default SSFRegistrationB;
