import React from "react";
import CompanySearch from "../../../../components/common/forms/CompanySearch";
import FormBranch from "../../../../components/common/forms/FormBranch";
import FormButtom from "../../../../components/common/forms/FormButtom";
import FormUploadDocument from "../../../../components/common/forms/FormUploadDocument";
import { SSF_upload_details_v2 } from "./SSFregistrationForm";

const SSFRegistrationA = () => {
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

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr className="flex">
                <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  कम्पनीको नाम
                </th>
                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-lg">
                  <p>English मा:</p>
                  <input />
                </td>
                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-lg">
                  <p>नेपालीमा : </p>
                  <input />
                </td>
              </tr>
              <tr className="flex">
                <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  कम्पनीको ठेगाना
                </th>
                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-lg">
                  <input />
                </td>
                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-lg">
                  <p>Email :</p>
                  <input />
                </td>
              </tr>
              <tr className="flex">
                <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  कम्पनी/ब्यवसायको उद्धेश्यहरु
                </th>
                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-lg">
                  <p>मुख्य मुख्य कामहरु :</p>
                  <input />
                </td>
                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-lg">
                  <p>Ph. No. :</p>
                  <input />
                </td>
              </tr>

              <tr className="flex">
                <th className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                  ब्यवसायको प्रकार
                </th>

                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-sm">
                  <td className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
                    <label htmlFor="">एकल ब्यवसाय </label>
                    <input type="radio" name="radio-btn" id="" />
                  </td>
                  <td className="border-primary-blue bg-primary-red flex items-center justify-center rounded-full border-l p-1 text-white">
                    <label htmlFor=""> साझेदारी ब्यवसाय </label>
                    <input type="radio" name="radio-btn" id="" />
                  </td>
                  <td className="border-primary-blue bg-primary-red flex items-center justify-center rounded-full border-l p-1 text-white">
                    <label htmlFor=""> प्रा.लि. कम्पनी </label>
                    <input type="radio" name="radio-btn" id="" />
                  </td>
                  <input />
                </td>

                <td className="border-primary-blue flex text-primary-red border text-base font-bold sm:text-sm">
                  <p>ब्यवसायको प्रकृती : </p>
                  <td className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
                    <label htmlFor="">एकल ब्यक्तिगत ब्यवसाय </label>
                    <input type="radio" name="radio-btn" id="" />
                  </td>
                  <td className="border-primary-blue bg-primary-red flex items-center justify-center rounded-full border-l p-1 text-white">
                    <label htmlFor=""> साझेदारी ब्यवसाय </label>
                    <input type="radio" name="radio-btn" id="" />
                  </td>
                </td>
              </tr>
            </thead>
          </table>
        </div>

        {/* share holder details form */}
        <div className="mt-5">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="min-w-[1300px] overflow-x-auto">
                  <table id="tbl_posts">
                    <thead>
                      <tr>
                        <td className="border-primary-blue  text-primary-red border text-lg font-bold">
                          पद
                        </td>
                        <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                          नाम
                        </td>
                        <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                          ठेगाना
                        </td>
                        <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                          सम्पर्क नं.
                        </td>
                        <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                          फोटो
                        </td>
                      </tr>
                    </thead>
                    <tbody id="tbl_posts_body">
                      <tr id="rec-1" className="border-primary-blue border">
                        <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                          अध्यक्षको नाम
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
                          <div className="border-primary-blue text-white m-0 h-[54px] w-full border-r py-3 px-3 outline-none space-x-2">
                            <button className=" bg-yellow-500 rounded-xl px-2 ">
                              Upload
                            </button>
                            <button className="bg-primary-green rounded-xl px-2 ">
                              view
                            </button>
                            <button className="bg-primary-red rounded-xl px-2">
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                    <tbody id="tbl_posts_body">
                      <tr id="rec-1" className="border-primary-blue border">
                        <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                          कार्यकारी प्रमुखको नाम
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
                          <div className="border-primary-blue text-white m-0 h-[54px] w-full border-r py-3 px-3 outline-none space-x-2">
                            <button className=" bg-yellow-500 rounded-xl px-2 ">
                              Upload
                            </button>
                            <button className="bg-primary-green rounded-xl px-2 ">
                              view
                            </button>
                            <button className="bg-primary-red rounded-xl px-2">
                              Delete
                            </button>
                          </div>
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
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* share holder details form close */}

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
            {SSF_upload_details_v2.map((item, index) => {
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

export default SSFRegistrationA;
