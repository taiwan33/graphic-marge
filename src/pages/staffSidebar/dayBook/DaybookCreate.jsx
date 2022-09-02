import React from "react";

const DaybookCreate = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Create Day Book
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      {/* table  */}
      <div className="">
        {/* day book entry table */}
        <div className="mt-3 w-full md:px-10">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                <div className="wrapper overflow-hidden">
                  <div className="border-primary-red flex justify-center gap-10 overflow-x-auto border-2 p-3 lg:text-xl">
                    <h1 className="text-primary-blue font-bold">Dang Branch</h1>
                    <h1 className="text-primary-blue font-bold">
                      Shila Pokhrel
                    </h1>
                    <h1 className="text-primary-blue font-bold">
                      Press Manager
                    </h1>
                    <h1 className="text-primary-blue font-bold">2078/12/18</h1>
                  </div>
                  <table className="common min-w-full border-collapse border border-slate-900 text-center">
                    <thead className="font-Bree bg-primary-red border-b font-bold">
                      <tr>
                        <th
                          scope="col"
                          className="!w-[20px] text-sm font-medium text-white"
                        >
                          SN.
                        </th>
                        <th
                          scope="col"
                          className="py-4 text-sm font-medium text-white"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="py-4 text-sm font-medium text-white"
                        >
                          Details
                        </th>
                        <th
                          scope="col"
                          className="py-4 text-sm font-medium text-white"
                        >
                          Cash DR.
                        </th>
                        <th
                          scope="col"
                          className="py-4 text-sm font-medium text-white"
                        >
                          Cash CR.
                        </th>
                        <th
                          scope="col"
                          className="py-4 text-sm font-medium text-white"
                        >
                          Cash Balance
                        </th>
                        <th
                          scope="col"
                          className="py-4 text-sm font-medium text-white"
                        >
                          Bank
                        </th>
                        <th
                          scope="col"
                          className="py-4 text-sm font-medium text-white"
                        >
                          Bank DR. &amp; CR.
                        </th>
                        <th
                          scope="col"
                          className="py-4 text-sm font-medium text-white"
                        >
                          Remark
                        </th>
                      </tr>
                    </thead>
                    <tbody className="font-Acme">
                      <tr className="trow border-b bg-white">
                        <td className="w-[5px] whitespace-nowrap border border-slate-700 px-6 text-sm font-light text-gray-900">
                          <input
                            type="number"
                            className="long w-[50px] rounded-sm px-0 py-0 outline-none"
                            id="sn"
                            name=""
                            defaultValue={1}
                          />
                        </td>
                        <td className="whitespace-nowrap border border-slate-700 px-6 text-sm font-light text-gray-900">
                          <div className="flex items-center gap-4">
                            <label
                              className="text-primary-blue font-bold"
                              htmlFor=""
                            >
                              आमदानी
                            </label>
                            <input
                              type="radio"
                              name="type"
                              className="r1 h-5 w-5"
                              defaultValue="first"
                            />
                          </div>
                          <div className="mt-3 flex items-center justify-between gap-4">
                            <label
                              htmlFor=""
                              className="text-primary-blue font-bold"
                            >
                              खर्च
                            </label>
                            <input
                              className="r1 ml-6 h-5 w-full"
                              type="radio"
                              name="type"
                              defaultValue="second"
                              id="r2"
                            />
                          </div>
                        </td>
                        <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                          <input
                            type="text"
                            id="cash-dr"
                            name=""
                            className="w-[200px] rounded-sm border-none px-2 py-4"
                            defaultValue=""
                          />
                        </td>
                        <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                          <input
                            type="number"
                            id="cash-dr"
                            name=""
                            className="w-[200px] rounded-sm border-none px-2 py-4"
                            defaultValue=""
                          />
                        </td>
                        <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                          <input
                            type="number"
                            className="w-[200px] rounded-sm border-none px-2 py-4"
                            id="cash-cr"
                            name=""
                            defaultValue=""
                          />
                        </td>
                        <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                          <input
                            type="number"
                            className="w-[200px] rounded-sm border-none px-2 py-4"
                            id="cash-balance"
                            name=""
                            defaultValue=""
                          />
                        </td>
                        <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                          {/* bank select box */}
                          <div className="flex justify-center">
                            <div className="w-[200px]">
                              <select
                                className="form-select m-0 block w-full appearance-none bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal"
                                aria-label="Default select example"
                              >
                                <option selected="">Select Bank</option>
                                <option value={1}>Shidhartha bank</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                          <input
                            type="number"
                            className="w-[200px] rounded-sm border-none px-2 py-4"
                            id="bank-balance"
                            name=""
                            defaultValue=""
                          />
                        </td>
                        <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                          <input
                            type="text"
                            className="w-[200px] rounded-sm border-none px-2 py-4"
                            id="remark"
                            name=""
                            defaultValue=""
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* add button */}
                  <div className="flex justify-end">
                    <div className="list_add bg-primary-blue mt-3 inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 font-bold text-white">
                      <h1>Add</h1>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      </svg>
                    </div>
                  </div>
                  {/* submit button */}
                  <div className="bg-primary-green ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
                    <a href="">Save</a>
                  </div>
                  <div className="bg-primary-green ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
                    <a href="">Submit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* today cash transaction table */}
        <div className="mt-10 w-full md:px-10">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <div className="border-primary-red border-2 p-3 text-center lg:text-xl">
                    <h1 className="text-primary-blue font-bold">
                      To Day Cash Transaction Details
                    </h1>
                  </div>
                  <table className="min-w-full text-center">
                    <thead className="font-Bree bg-primary-red border-b font-bold">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Opeaning Balance
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Total Cash Income Amt DR.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Total Cash Expenses Amt CR.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Today Cash Closing Balance
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Remark
                        </th>
                      </tr>
                    </thead>
                    <tbody className="font-Acme">
                      <tr className="border-b bg-white">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          10000
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          100000
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          10000
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          10000
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          10000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* today bank transaction details */}
        <div className="mt-10 w-full md:px-10">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <div className="border-primary-red text-primary-blue border-2 p-3 text-center lg:text-xl">
                    <h1 className="font-bold">
                      To Day Bank Transaction Details
                    </h1>
                  </div>
                  <table className="min-w-full text-center">
                    <thead className="font-Bree bg-primary-red border-b font-bold">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          SN.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Bank Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Opening Balance
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Total Income Amt. DR.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Total Expenses Amt. DR
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Total Closing Balance
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Remark
                        </th>
                      </tr>
                    </thead>
                    <tbody className="font-Acme">
                      <tr className="border-b bg-white">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          10000
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          100000
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          10000
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          10000
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          10000
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
      {/* end table */}
    </div>
  );
};

export default DaybookCreate;
