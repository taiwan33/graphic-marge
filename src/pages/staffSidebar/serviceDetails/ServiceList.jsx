import React from "react";

const ServiceList = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Our Services Details
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      {/* table  */}
      {/* business releted */}
      <div className="w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="wrapper overflow-atuo">
                {/* search */}
                <p className="text-primary-red mt-5 font-bold underline">
                  Business and company releted services
                </p>
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
                        Service Name
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
                        Service charge
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    <tr className="trow border-b bg-white">
                      <td className="w-[5px] whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        1
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        company darta
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                        company darta details
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        5000
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        <a
                          href=""
                          className="bg-primary-green rounded-full p-1 px-2 text-white"
                        >
                          View and edit
                        </a>
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
      {/* accounting releted */}
      <div className="w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="wrapper overflow-atuo">
                {/* search */}
                <p className="text-primary-red mt-5 font-bold underline">
                  Accounting and Taxation Releted Services
                </p>
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
                        Service Name
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
                        Service charge
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    <tr className="trow border-b bg-white">
                      <td className="w-[5px] whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        1
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        company darta
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                        company darta details
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        5000
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        <a
                          href=""
                          className="bg-primary-green rounded-full p-1 px-2 text-white"
                        >
                          View and edit
                        </a>
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
      {/* releted */}
      <div className="w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="wrapper overflow-atuo">
                {/* search */}
                <p className="text-primary-red mt-5 font-bold underline">
                  and printing releted services
                </p>
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
                        Service Name
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
                        Service charge
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    <tr className="trow border-b bg-white">
                      <td className="w-[5px] whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        1
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 py-3 px-6 text-sm font-light leading-[0px] text-gray-900">
                        company darta
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                        company darta details
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        5000
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        <a
                          href=""
                          className="bg-primary-green rounded-full p-1 px-2 text-white"
                        >
                          View and edit
                        </a>
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
      {/* end table */}
    </div>
  );
};

export default ServiceList;
