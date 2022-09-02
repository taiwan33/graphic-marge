import React from "react";

const NewCompanyList = () => {
  return (
    <div>
      <h1 className="text-primary-red font-Acme text-xl mt-4 sm:mt-10 font-bold underline">
        New Company List
      </h1>
      <div className="">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block md:w-full w-1 sm:px-6 lg:px-8">
              {/* search */}
              <table className="min-w-full border">
                <thead className="font-Bree text-lg font-bold border-b bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="bg-primary-red px-6 py-4 text-left text-sm font-bold text-white"
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
                  </tr>
                </thead>
                <tbody className="font-Acme">
                  <tr className="text-primary-blue font-Acme border-b bg-gray-100">
                    <td className="whitespace-nowrap px-6 py-4 text-base font-medium">
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

export default NewCompanyList;
