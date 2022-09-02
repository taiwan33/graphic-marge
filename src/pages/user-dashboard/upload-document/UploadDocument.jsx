import React from "react";
import Images from "../../../media/images";

const UploadDocument = () => {
  return (
    <div className="">
      <h1 className="text-primary-red font-Rakkas mt-2 text-center text-3xl font-bold lg:!mt-6">
        Upload Documents
      </h1>
      <div className="">
        <img src={Images.title_border} alt="" className="mx-auto mt-4" />
      </div>
      <div className="font-Acme mt-10 grid grid-cols-1 items-center gap-10 p-3 md:grid-cols-2 xl:grid-cols-4">
        <div className="font-semibold">
          <label htmlFor="doc">Upload Documnent</label>
          <input
            type="file"
            name=""
            className="text-primary-blue file:bg-primary-red ml-3 w-fit cursor-pointer outline-none file:rounded-lg file:text-white"
            id=""
          />
        </div>
        <div className="font-semibold">
          <h1 htmlFor="doc">Document Name</h1>
          <input
            type="text"
            className="mt-2 rounded-md border border-gray-700 px-2 py-2"
            name=""
            id=""
          />
        </div>
        <div className="text-left font-semibold">
          <h1 htmlFor="doc">Company Name</h1>
          <div className="flex">
            <div className="mb-3 w-full">
              <select
                className="form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300 bg-white bg-clip-padding bg-no-repeat px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                aria-label="Default select example"
              >
                <option selected="">One</option>
                <option value={1}>Two</option>
                <option value={2}>Three</option>
                <option value={3}>Four</option>
              </select>
            </div>
          </div>
        </div>
        <div className="">
          <button
            className="font-Berkshire !bg-primary-blue rounded-lg py-3 px-10 font-bold text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
      {/* table */}
      <div className="mt-3 w-full px-1">
        <div className="flex flex-col">
          <div className="overflow-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <table className="mt-5 min-w-full overflow-x-scroll text-center">
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
                      Company Name
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
                      Abc
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
      {/* end table */}
    </div>
  );
};

export default UploadDocument;
