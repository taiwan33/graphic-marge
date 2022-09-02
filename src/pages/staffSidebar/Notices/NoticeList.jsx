import React from "react";

const NoticeList = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Notice List
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
                <div className="flex items-center justify-start gap-10">
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
                    placeholder="Search by staff "
                    id="table-search"
                    className="mb-2 block w-80 rounded-lg border border-gray-700 bg-gray-50 py-2.5 px-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
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
                        Notice No.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        Notice Heading
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        Posted Staff Name
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
                        OCR
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        ocr details
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        ocr.com.np
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        <a
                          href=""
                          className="bg-primary-green rounded-full p-1 px-2 text-white"
                        >
                          View/Edit
                        </a>
                        <a
                          href=""
                          className="bg-primary-red rounded-full p-1 px-2 text-white"
                        >
                          Delete
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                        <a
                          href=""
                          className="bg-primary-blue rounded-full p-1 px-2 text-white"
                        >
                          Show
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default NoticeList;
