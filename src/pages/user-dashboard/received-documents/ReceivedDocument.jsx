import React from "react";
import Images from "../../../media/images";

const ReceivedDocument = () => {
  return (
    <div className="">
      <h1 className="text-primary-red font-Rakkas mt-2 text-center text-3xl font-bold lg:!mt-6">
        Received Documnets
      </h1>
      <div className="">
        <img src={Images.title_border} alt="" className="mx-auto mt-4" />
      </div>
      {/* documents */}
      {/*first company table */}
      <div className="mt-3 w-full">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <div className="bg-primary-blue justify-between mb-2 font-Acme flex gap-10 overflow-x-auto p-3 text-lg">
                  <div className="flex items-center gap-2">
                    <h1 className="col-span-1 font-bold text-white">1.</h1>
                    <h1 className="font-bold text-white">
                      Company Name: ABC Pvt. Ltd
                    </h1>
                  </div>
                  <h1 className="font-bold text-white">
                    Redg. Date : 2078-12-10
                  </h1>
                  <h1 className="font-bold text-white">Redg. No : 1234567</h1>
                  <h1 className="font-bold text-white">PAN. No : 1234567</h1>
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
                        File Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        view
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        Download
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        Print
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    <tr className="border-b bg-white">
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-medium">
                        1
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        Citizenship
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        <div className="grid place-content-center">
                          <div className="grid place-content-center">
                            <svg
                              className="h-8 w-8"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#000000"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        <div className="grid place-content-center">
                          <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 24 24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <g>
                              <rect fill="none" height={24} width={24} />
                            </g>
                            <g>
                              <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" />
                            </g>
                          </svg>
                        </div>
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        <div className="grid place-content-center">
                          <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
                            <circle cx={18} cy="11.5" r={1} />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end table */}
      {/* second company table */}
      <div className="mt-10 w-full">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <div className="bg-primary-blue mb-2 font-Acme justify-between flex gap-10 overflow-x-auto p-3 text-lg">
                  <div className="flex items-center gap-2">
                    <h1 className="col-span-1 font-bold text-white">1.</h1>
                    <h1 className="font-bold text-white">
                      Company Name: ABC Pvt. Ltd
                    </h1>
                  </div>
                  <h1 className="font-bold text-white">
                    Redg. Date : 2078-12-10
                  </h1>
                  <h1 className="font-bold text-white">Redg. No : 1234567</h1>
                  <h1 className="font-bold text-white">PAN. No : 1234567</h1>
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
                        File Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        view
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        Download
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        Print
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    <tr className="border-b bg-white">
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-medium">
                        1
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        Citizenship
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        <div className="grid place-content-center">
                          <div className="grid place-content-center">
                            <svg
                              className="h-8 w-8"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 9.67l1.69 2.26 2.48-3.1L19 15H9zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z" />
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        <div className="grid place-content-center">
                          <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            enableBackground="new 0 0 24 24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <g>
                              <rect fill="none" height={24} width={24} />
                            </g>
                            <g>
                              <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" />
                            </g>
                          </svg>
                        </div>
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        <div className="grid place-content-center">
                          <svg
                            className="h-8 w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M19 8h-1V3H6v5H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM8 5h8v3H8V5zm8 12v2H8v-4h8v2zm2-2v-2H6v2H4v-4c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2z" />
                            <circle cx={18} cy="11.5" r={1} />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of second tabel */}
    </div>
  );
};

export default ReceivedDocument;
