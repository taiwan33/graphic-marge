import React from "react";

const InvoiceCreate = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Create Invoice
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      <div className="mt-10 px-3 md:!px-10">
        <div className="border">
          <div className="grid md:grid-cols-2">
            {/* received date */}
            <div className="border-primary-blue flex items-center gap-2 border-2 p-2">
              <label htmlFor="" className="text-primary-red">
                Invoice Create Date:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                id=""
                placeholder=" Date"
              />
            </div>
            {/* company name */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-l-0 p-2">
              <label htmlFor="" className="text-primary-red">
                Company Name:
              </label>
              <div className="flex-grow items-center gap-2 lg:flex">
                <select
                  onchange="run()"
                  name=""
                  id="company_select"
                  className="border-primary-blue w-full border p-2"
                >
                  <option value="Select">Select</option>
                  <option value="One">One</option>
                  <option value="Two">two</option>
                  <option value="Three">three</option>
                  <option value="Four">four</option>
                </select>
                <input
                  type="text"
                  defaultValue=""
                  id="company_name"
                  className="border-primary-blue w-full flex-grow border p-2 outline-none"
                  placeholder=" company name"
                />
              </div>
            </div>
            {/* company address */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2">
              <label htmlFor="" className="text-primary-red">
                Company Address:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="Company Address"
              />
            </div>
            {/* pan no */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 md:border-l-0">
              <label htmlFor="" className="text-primary-red">
                PAN No.:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="PAN No."
              />
            </div>
            {/*  name */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2">
              <label htmlFor="" className="text-primary-red">
                Invoice Taker Name:
              </label>
              <input
                type="text"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="Company Address"
              />
            </div>
            {/* contact no */}
            <div className="border-primary-blue flex items-center gap-2 border-2 border-t-0 p-2 md:border-l-0">
              <label htmlFor="" className="text-primary-red">
                Contact No:
              </label>
              <input
                type="number"
                name=""
                className="flex-grow py-2 px-2 outline-none"
                placeholder="Contact No."
              />
            </div>
          </div>
        </div>
      </div>
      {/*  table */}
      <div className="w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="wrapper overflow-atuo">
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
                        Details of work completed
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Amount
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
                      <td className="w-[5px] whitespace-nowrap border border-slate-700 px-6 text-sm font-light leading-[0px] text-gray-900">
                        <input
                          type="number"
                          className="long w-[50px] rounded-sm"
                          id="sn"
                          name=""
                          defaultValue={1}
                        />
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                        <input
                          type="text"
                          id="cash-dr"
                          name=""
                          className="w-full rounded-sm px-2 py-3"
                          defaultValue=""
                        />
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        <input
                          type="number"
                          id="cash-dr"
                          name=""
                          className="w-full rounded-sm px-2 py-3"
                          defaultValue=""
                        />
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        <input
                          type="number"
                          id="cash-dr"
                          name=""
                          className="w-full rounded-sm px-2 py-3"
                          defaultValue=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* add button */}
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
                {/* end add button */}
                {/* calculation */}
                <div className="mt-3 md:max-w-[400px]">
                  {/* total */}
                  <div className="grid grid-cols-2 border">
                    <p className="text-primary-red border p-3 text-right font-semibold">
                      Total
                    </p>
                    <p className="border p-3 font-semibold">0000</p>
                  </div>
                  {/* discount */}
                  <div className="grid grid-cols-2 border">
                    <p className="text-primary-red border p-3 text-right font-semibold">
                      Discount
                    </p>
                    <input
                      type="number"
                      className="border px-2"
                      placeholder="Discount"
                    />
                  </div>
                  {/* grand total */}
                  <div className="grid grid-cols-2 border">
                    <p className="text-primary-red border p-3 text-right font-semibold">
                      Grand Total
                    </p>
                    <p className="border p-3 font-semibold">000</p>
                  </div>
                  {/* advance */}
                  <div className="grid grid-cols-2 items-center border">
                    <p className="text-primary-red border p-3 text-right font-semibold">
                      VAT 13%
                    </p>
                    <input type="radio" className="ml-4 h-4 w-4" />
                  </div>
                  {/* dew balance */}
                  <div className="grid grid-cols-2 border">
                    <p className="text-primary-red border p-3 text-right font-semibold">
                      Grand Total Balance
                    </p>
                    <p className="border p-3 font-semibold">000</p>
                  </div>
                </div>
                {/* in word */}
                {/* dew balance */}
                <div className="grid grid-cols-2 border">
                  <p className="text-primary-red p-3 text-left font-semibold">
                    In Words:
                    <span className="text-primary-green p-3 font-semibold">
                      Three thoushand five hundren only
                    </span>
                  </p>
                </div>
                {/* end calculation */}
                {/* submit button */}
                <div className="flex items-center justify-end gap-10">
                  <div className="bg-primary-green mt-3 gap-2 rounded-md px-5 py-3 font-bold text-white">
                    <a href="">Save</a>
                  </div>
                  <div className="bg-primary-blue mt-3 gap-2 rounded-md px-5 py-3 font-bold text-white">
                    <a href="">Submit</a>
                  </div>
                  <div className="bg-primary-red mt-3 gap-2 rounded-md px-5 py-3 font-bold text-white">
                    <a href="">Verify</a>
                  </div>
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

export default InvoiceCreate;
