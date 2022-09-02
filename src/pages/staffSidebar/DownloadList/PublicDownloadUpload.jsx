import React from "react";

const PublicDownloadUpload = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Staff Download and Upload Details
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      {/* pdf and jpeg */}
      <div className="p-3 md:!p-10">
        <p className="text-primary-blue mt-5 font-bold underline">
          1. Pdf and jpeg file
        </p>
        {/* upload */}
        <div className="flex flex-wrap items-center justify-between gap-0">
          <div className="">
            <input
              type="file"
              name=""
              className="text-primary-blue file:bg-primary-red ml-3 outline-none file:rounded-lg file:text-white"
              id=""
            />
            <input
              placeholder="Document Name"
              type="text"
              className="my-3 rounded-lg border border-black p-3"
            />
            <input
              placeholder="File type"
              type="text"
              className="my-3 w-[100px] rounded-lg border border-black p-3"
            />
            <a
              href=""
              className="bg-primary-red ml-10 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
            >
              Submit
            </a>
          </div>
          <input
            placeholder="Search by name"
            type="text"
            className="my-3 content-end rounded-lg border border-black p-3"
          />
        </div>
        <div className="overflow-x-scroll">
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
                  Upload Date
                </th>
                <th
                  scope="col"
                  className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                >
                  Document Name
                </th>
                <th
                  scope="col"
                  className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                >
                  File type
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
                <td className="font-Aladin border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                  1
                </td>
                <td className="font-Aladin border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                  1/1/1/1
                </td>
                <td className="font-Aladin border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                  notice image
                </td>
                <td className="font-Aladin border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                  jpeg
                </td>
                <td className="font-Aladin border-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm">
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
                  <a
                    href=""
                    className="rounded-full bg-yellow-500 p-1 px-2 text-white"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Word and exel */}
      <div className="p-3 md:!p-10">
        <p className="text-primary-blue mt-5 font-bold underline">
          1. Word and exel file
        </p>
        {/* upload */}
        <div className="flex flex-wrap items-center justify-between gap-0">
          <div className="">
            <input
              type="file"
              name=""
              className="text-primary-blue file:bg-primary-red ml-3 outline-none file:rounded-lg file:text-white"
              id=""
            />
            <input
              placeholder="Document Name"
              type="text"
              className="my-3 rounded-lg border border-black p-3"
            />
            <input
              placeholder="File type"
              type="text"
              className="my-3 w-[100px] rounded-lg border border-black p-3"
            />
            <a
              href=""
              className="bg-primary-red ml-10 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
            >
              Submit
            </a>
          </div>
          <input
            placeholder="Search by name"
            type="text"
            className="my-3 content-end rounded-lg border border-black p-3"
          />
        </div>
        <div className="overflow-x-scroll">
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
                  Upload Date
                </th>
                <th
                  scope="col"
                  className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                >
                  Document Name
                </th>
                <th
                  scope="col"
                  className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                >
                  File type
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
                <td className="font-Aladin border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                  1
                </td>
                <td className="font-Aladin border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                  1/1/1/1
                </td>
                <td className="font-Aladin border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                  notice image
                </td>
                <td className="font-Aladin border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                  jpeg
                </td>
                <td className="font-Aladin border-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm">
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
                  <a
                    href=""
                    className="rounded-full bg-yellow-500 p-1 px-2 text-white"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PublicDownloadUpload;
