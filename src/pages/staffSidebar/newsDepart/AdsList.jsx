import React from "react";

const AdsList = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Ads List
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      {/* table  */}
      <div className="mt-3 w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-x-scroll">
                {/* search */}
                <div className="flex flex-wrap items-center justify-between">
                  <input
                    type="text"
                    placeholder="Search by date "
                    id="table-search"
                    className="mb-2 block w-80 rounded-lg border border-gray-700 bg-gray-50 py-2.5 px-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Search by name "
                    id="table-search"
                    className="mb-2 block w-80 rounded-lg border border-gray-700 bg-gray-50 py-2.5 px-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Search by category "
                    id="table-search"
                    className="mb-2 block w-80 rounded-lg border border-gray-700 bg-gray-50 py-2.5 px-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="">
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
                          Ad no.
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Post Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Party Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Action
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-sm font-medium text-white"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="font-Acme">
                      <tr className="border-b bg-white">
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          2
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          1/1/1/1
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          Intelzy
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          category
                        </td>
                        <td className="whitespace-nowrap rounded-full py-2 px-4 text-sm font-bold">
                          <a
                            href=""
                            className="bg-primary-blue ml-10 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
                          >
                            View/edit
                          </a>
                          <a
                            href=""
                            className="bg-primary-red ml-10 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
                          >
                            delete
                          </a>
                        </td>
                        <td className="text-primary-blue whitespace-nowrap rounded-full py-2 px-4 text-sm font-bold">
                          <a
                            href=""
                            className="bg-primary-green ml-10 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
                          >
                            Show
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-primary-blue ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
                  <a href="">Print</a>
                </div>
                <div className="bg-primary-green ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white">
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

export default AdsList;
