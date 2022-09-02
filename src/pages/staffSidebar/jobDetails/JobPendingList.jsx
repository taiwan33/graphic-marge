import React from "react";

const JobPendingList = () => {
  return (
    <div classname="">
      <h1 classname="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Job Pending List
      </h1>
      <div classname="">
        <img
          src="../../../images/title-border.png"
          alt=""
          classname="mx-auto mt-4"
        />
      </div>
      {"{"}/* table */{"}"}
      <div classname="mt-3 w-full md:px-10">
        <div classname="flex flex-col">
          <div classname="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div classname="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div classname="overflow-hidden">
                <table classname="border-primary-blue min-w-full border-2 text-center">
                  <thead classname="bg-primary-red border-primary-blue border-2">
                    <tr>
                      <th
                        scope="col"
                        classname="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        SN.
                      </th>
                      <th
                        scope="col"
                        classname="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        J.No
                      </th>
                      <th
                        scope="col"
                        classname="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        classname="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Company Name
                      </th>
                      <th
                        scope="col"
                        classname="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Job Details
                      </th>
                      <th
                        scope="col"
                        classname="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Client/User Name
                      </th>
                      <th
                        scope="col"
                        classname="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Total Amount
                      </th>
                      <th
                        scope="col"
                        classname="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        classname="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Reason
                      </th>
                    </tr>
                  </thead>
                  <tbody classname="font-Acme">
                    <tr classname="border-b bg-white">
                      <td classname="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        1
                      </td>
                      <td classname="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        1
                      </td>
                      <td classname="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        2078/1/1
                      </td>
                      <td classname="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        company
                      </td>
                      <td classname="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        job order
                      </td>
                      <td classname="border-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm">
                        Bimal dangi
                      </td>
                      <td classname="border-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm">
                        10000
                      </td>
                      <td classname="border-primary-blue whitespace-nowrap border-2 py-2 px-4 text-xs text-white">
                        <p classname="bg-primary-green rounded-3xl p-2">
                          Pending
                        </p>
                      </td>
                      <td classname="border-primary-blue w-[400px] whitespace-nowrap border-2 py-2 px-4 text-xs">
                        Reason
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div classname="mt-5 flex items-center justify-end gap-10">
                  <div classname="bg-primary-green font-Berkshire rounded-md px-5 py-3 font-bold text-white">
                    <a href="">Print List</a>
                  </div>
                  <div classname="bg-primary-blue rounded-md px-5 py-3 font-bold text-white">
                    <a href="">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPendingList;
