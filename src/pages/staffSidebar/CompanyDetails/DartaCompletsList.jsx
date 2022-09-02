import React from "react";

const DartaCompletsList = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Darta Complete Form Given List
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
              <div className="overflow-hidden">
                {/* search */}
                <div className="flex justify-between">
                  <input
                    placeholder="Search by Date"
                    type="search"
                    className="my-3 rounded-lg border border-black p-3"
                  />
                  <input
                    placeholder="Search by Company"
                    type="search"
                    className="my-3 rounded-lg border border-black p-3"
                  />
                  <input
                    placeholder="Search by Address"
                    type="search"
                    className="my-3 rounded-lg border border-black p-3"
                  />
                </div>
                <table className="border-primary-blue min-w-full border text-center">
                  <thead className="font-Bree bg-primary-red text-lg font-bold">
                    <tr className="">
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        SN.
                      </th>
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        CDC No.
                      </th>
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Company Name
                      </th>
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Letter given date
                      </th>
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Letter Create Staff Name
                      </th>
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    <tr className="border-primary-blue border-2 bg-white">
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        1
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        1
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        company name
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        Bharatpur-11
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        99999
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        ram
                      </td>
                      <td className="border-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm">
                        <a
                          href=""
                          className="bg-primary-green rounded-full p-1 px-2 text-white"
                        >
                          View
                        </a>
                        <a
                          href=""
                          className="bg-primary-blue rounded-full p-1 px-2 text-white"
                        >
                          Download
                        </a>
                        <a
                          href=""
                          className="bg-primary-red rounded-full p-1 px-2 text-white"
                        >
                          Print
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-5 flex items-center justify-end gap-10">
                  <div className="bg-primary-green font-Berkshire rounded-md px-5 py-3 font-bold text-white">
                    <a href="">Print List</a>
                  </div>
                  <div className="bg-primary-blue rounded-md px-5 py-3 font-bold text-white">
                    <a href="">View More</a>
                  </div>
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

export default DartaCompletsList;
