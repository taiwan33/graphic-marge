import React from "react";
import Images from "../../../media/images";

const Gallery = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Gallery
      </h1>
      <div className="">
        <img src={Images.title_border} alt="" className="mx-auto mt-4" />
      </div>
      {/* photos section */}
      <div className="w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="wrapper overflow-atuo">
                {/* search */}
                <p className="text-primary-red mt-5 text-center text-xl font-bold underline">
                  Photo Gallery
                </p>
                <input
                  placeholder="Upload Photo"
                  type="file"
                  name=""
                  className="text-primary-blue file:bg-primary-red ml-3 outline-none file:rounded-lg file:text-white"
                  id=""
                />
                <div className="mt-3 flex items-center justify-between gap-4">
                  <input
                    type="text"
                    placeholder="Photo Name"
                    name=""
                    className="border-primary-blue rounded-md border px-2 py-2"
                    defaultValue=""
                  />
                  <input
                    type="text"
                    placeholder="Main Cateogry"
                    name=""
                    className="border-primary-blue rounded-md border px-2 py-2"
                    defaultValue=""
                  />
                  <input
                    type="text"
                    placeholder="Sub Category"
                    name=""
                    className="border-primary-blue rounded-md border px-2 py-2"
                    defaultValue=""
                  />
                  <a
                    href=""
                    className="bg-primary-green ml-10 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
                  >
                    Submit
                  </a>
                </div>
                <table className="common mt-5 w-full border-collapse text-center">
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
                        Photo Name
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Main category
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Sub category
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
                        Staff group photo
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                        Office photo
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        for calender 2079
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        <a
                          href=""
                          className="bg-primary-green rounded-full p-1 px-2 text-white"
                        >
                          View
                        </a>
                        <a
                          href=""
                          className="bg-primary-red rounded-full p-1 px-2 text-white"
                        >
                          Download
                        </a>
                        <a
                          href=""
                          className="bg-primary-blue rounded-full p-1 px-2 text-white"
                        >
                          Print
                        </a>
                        <a
                          href=""
                          className="bg-primary-green rounded-full p-1 px-2 text-white"
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
        </div>
      </div>
      {/* video section */}
      <div className="w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="wrapper overflow-atuo">
                {/* search */}
                <p className="text-primary-red mt-5 text-center text-xl font-bold underline">
                  Video Gallery
                </p>
                <input
                  placeholder="Upload Photo"
                  type="file"
                  name=""
                  className="text-primary-blue file:bg-primary-red ml-3 outline-none file:rounded-lg file:text-white"
                  id=""
                />
                <div className="mt-3 flex items-center justify-between gap-4">
                  <input
                    type="text"
                    placeholder="Photo Name"
                    name=""
                    className="border-primary-blue rounded-md border p-2"
                    defaultValue=""
                  />
                  <input
                    type="text"
                    placeholder="Main Cateogry"
                    name=""
                    className="border-primary-blue rounded-md border p-2"
                    defaultValue=""
                  />
                  <input
                    type="text"
                    placeholder="Sub Category"
                    name=""
                    className="border-primary-blue rounded-md border p-2"
                    defaultValue=""
                  />
                  <a
                    href=""
                    className="bg-primary-green ml-10 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
                  >
                    Submit
                  </a>
                </div>
                <table className="common mt-5 w-full border-collapse text-center">
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
                        Photo Name
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Main category
                      </th>
                      <th
                        scope="col"
                        className="py-4 text-sm font-medium text-white"
                      >
                        Sub category
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
                        Staff group photo
                      </td>
                      <td className="whitespace-nowrap border border-slate-700 text-sm font-light text-gray-900">
                        Office photo
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        for calender 2079
                      </td>
                      <td className="w-[200px] whitespace-nowrap border border-slate-700 p-0 text-sm font-light text-gray-900">
                        <a
                          href=""
                          className="bg-primary-green rounded-full p-1 px-2 text-white"
                        >
                          View
                        </a>
                        <a
                          href=""
                          className="bg-primary-red rounded-full p-1 px-2 text-white"
                        >
                          Download
                        </a>
                        <a
                          href=""
                          className="bg-primary-blue rounded-full p-1 px-2 text-white"
                        >
                          Print
                        </a>
                        <a
                          href=""
                          className="bg-primary-green rounded-full p-1 px-2 text-white"
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
        </div>
      </div>
    </div>
  );
};

export default Gallery;
