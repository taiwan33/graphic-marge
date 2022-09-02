import React from "react";

const OldCompanyList = () => {
  return (
    <div className="">
      <h1 className="text-primary-red text-xl font-Acme mt-4 sm:mt-10 font-bold underline">
        Old Company List
      </h1>
      <div className="">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block w-1 md:w-full sm:px-6 lg:px-8">
              {/* search */}
              <div className="flex items-center justify-start gap-5">
                <input
                  placeholder="Search"
                  type="search"
                  className="my-3 rounded-lg border border-black p-3"
                />
              </div>

              <table className="min-w-full border border-collapse table-fixed">
                <thead className="font-Bree text-lg font-bold border-b bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                    >
                      SN.
                    </th>
                    <th
                      scope="col"
                      className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                    >
                      Company Name
                    </th>
                    <th
                      scope="col"
                      className="font-fold bg-primary-red px-6 py-4 text-left text-white"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                    >
                      Company Type
                    </th>
                    <th
                      scope="col"
                      className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                    >
                      Darta Date
                    </th>
                    <th
                      scope="col"
                      className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                    >
                      Darta No.
                    </th>
                    <th
                      scope="col"
                      className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                    >
                      Office entry date
                    </th>
                  </tr>
                </thead>
                <tbody className="font-Acme">
                  <tr className="text-primary-blue font-Acme border-b bg-gray-100">
                    <td className="whitespace-nowrap px-6 py-4  font-medium">
                      1
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-base font-light">
                      Intelzy
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-base font-light">
                      BNP-10
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-base font-light">
                      single
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-base font-light">
                      2022-9-10
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-base font-light">
                      435893
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-base font-light">
                      2022-2-23
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldCompanyList;
