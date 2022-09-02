import React from "react";

const DetailsOfShareHolders = () => {
  return (
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
                      शेयर सदस्यहरुको नाम
                    </td>
                    <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                      हालको ठेगाना
                    </td>
                    <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                      शेयर रकम
                    </td>
                    <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                      शेयर सदस्यको नागरिकता
                    </td>
                    <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                      साँक्षीको नाम
                    </td>
                    <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                      साँक्षीको ठेगाना
                    </td>
                    <td className="border-primary-blue text-primary-red border border-r-0 text-base font-bold sm:text-lg">
                      साँक्षीको नागरिकता
                    </td>
                    <td className="border-primary-blue boder border-r border-t px-5" />
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
                        type="file"
                        name=""
                        className="border-primary-blue file:bg-primary-blue h-[54px] w-full cursor-pointer border-r py-3 px-3 outline-none file:rounded-2xl file:text-white"
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
    </div>
  );
};

export default DetailsOfShareHolders;
