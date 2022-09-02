import React from "react";

const ListInvoice = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Invoice List
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      <div className="">
        <img src="../images/title-border.png" alt="" className="mx-auto mt-4" />
      </div>
      {/*  table */}
      <div className="w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="wrapper overflow-atuo">
                {/* search */}
                <div className="flex justify-between">
                  <input
                    placeholder="Search Company Name"
                    type="search"
                    className="my-3 rounded-lg border border-black p-3"
                  />
                  <input
                    placeholder="Search Invoice Date"
                    type="search"
                    className="my-3 rounded-lg border border-black p-3"
                  />
                </div>
                <table className="common w-full border-collapse text-center">
                  <thead className="font-Bree bg-primary-red text-lg font-bold">
                    <tr>
                      <th
                        scope="col"
                        className="!w-[20px] px-4 py-4 text-sm font-medium text-white"
                      >
                        SN.
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        I. No
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Company name
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Total Amount
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        View
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    <tr className="trow border-b bg-white">
                      <td className="w-[5px] whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        1
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        1
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                        2078/12/1
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        Abc pvt ltd
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        15000
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        <a href="">
                          <svg
                            className="mx-auto h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 32 32"
                          >
                            <circle cx={16} cy={16} r={4} fill="currentColor" />
                            <path
                              fill="currentColor"
                              d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 22.5a6.5 6.5 0 1 1 6.5-6.5a6.51 6.51 0 0 1-6.5 6.5Z"
                            />
                          </svg>
                        </a>
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        Processing
                      </td>
                    </tr>
                    <tr className="trow border-b bg-white">
                      <td className="w-[5px] whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        1
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        1
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                        2078/12/1
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        Abc pvt ltd
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        15000
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        <a href="">
                          <svg
                            className="mx-auto h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 32 32"
                          >
                            <circle cx={16} cy={16} r={4} fill="currentColor" />
                            <path
                              fill="currentColor"
                              d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 22.5a6.5 6.5 0 1 1 6.5-6.5a6.51 6.51 0 0 1-6.5 6.5Z"
                            />
                          </svg>
                        </a>
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        Processing
                      </td>
                    </tr>
                    <tr className="trow border-b bg-white">
                      <td className="w-[5px] whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        1
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        1
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                        2078/12/1
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        Abc pvt ltd
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        15000
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        <a href="">
                          <svg
                            className="mx-auto h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 32 32"
                          >
                            <circle cx={16} cy={16} r={4} fill="currentColor" />
                            <path
                              fill="currentColor"
                              d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 22.5a6.5 6.5 0 1 1 6.5-6.5a6.51 6.51 0 0 1-6.5 6.5Z"
                            />
                          </svg>
                        </a>
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        Processing
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* print button */}
                <div className="bg-primary-green ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
                  <a href="">Print</a>
                </div>
                <div className="bg-primary-blue ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
                  <a href="">View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end  table */}
    </div>
  );
};

export default ListInvoice;
