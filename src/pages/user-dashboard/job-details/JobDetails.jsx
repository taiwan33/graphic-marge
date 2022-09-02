import React from "react";
import Images from "../../../media/images";

const JobDetails = () => {
  return (
    <div className="">
      <div className="text-primary-red font-Rakkas mt-2 text-center text-3xl font-bold lg:!mt-6">
        Your Job Details
      </div>
      <div className="">
        <img src={Images.title_border} alt="" className="mx-auto mt-4" />
      </div>
      <div className="flex justify-end px-5">
        <a
          href="./services.html"
          className="bg-primary-blue font-Berkshire animation mt-5 rounded-xl px-5 py-3 text-white hover:bg-blue-900 lg:mt-0"
        >
          See All Services
        </a>
      </div>
      {/* first company table */}
      <div className="mt-3 w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <div className="bg-primary-blue font-Acme mb-2 flex justify-between gap-10 overflow-x-auto p-3 text-lg">
                  <div className="flex items-center gap-2">
                    <div className="col-span-1 font-bold text-white">1.</div>
                    <div className="font-bold text-white">
                      Company Name: ABC Pvt. Ltd
                    </div>
                  </div>
                  <div className="font-bold text-white">
                    Redg. Date : 2078-12-10
                  </div>
                  <div className="font-bold text-white">Redg. No : 1234567</div>
                  <div className="font-bold text-white">PAN. No : 1234567</div>
                </div>
                <table className="w-full text-center">
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
                        Service Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        Order Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        working Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        Completed Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    <tr className="font-Acme border-b bg-white">
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        1
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        New Company Darta
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                      <td className="bg-primary-green mt-1.5 inline-flex whitespace-nowrap rounded-full py-2 px-4 text-sm font-bold text-white">
                        Completed
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        1
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        New Company Darta
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                      <td className="bg-primary-blue mt-1.5 inline-flex whitespace-nowrap rounded-full py-2 px-4 text-sm font-bold text-white">
                        working
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        1
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        New Company Darta
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                      <td className="mt-1.5 inline-flex whitespace-nowrap rounded-full bg-yellow-500 py-2 px-4 text-sm font-bold text-white">
                        Pending
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second comp table */}
      <div className="mt-10 w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <div className="bg-primary-blue font-Acme mb-2 flex justify-between gap-10 overflow-x-auto p-3 text-lg">
                  <div className="flex items-center gap-2">
                    <div className="col-span-1 font-bold text-white">1.</div>
                    <div className="font-bold text-white">
                      Company Name: ABC Pvt. Ltd
                    </div>
                  </div>
                  <div className="font-bold text-white">
                    Redg. Date : 2078-12-10
                  </div>
                  <div className="font-bold text-white">Redg. No : 1234567</div>
                  <div className="font-bold text-white">PAN. No : 1234567</div>
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
                        Service Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        Order Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        working Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 text-sm font-medium text-white"
                      >
                        Completed Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-Acme">
                    <tr className="border-b bg-white">
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        1
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        New Company Darta
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                      <td className="bg-primary-green mt-1.5 inline-flex whitespace-nowrap rounded-full py-2 px-4 text-sm font-bold text-white">
                        Completed
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        1
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        New Company Darta
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                      <td className="bg-primary-blue mt-1.5 inline-flex whitespace-nowrap rounded-full py-2 px-4 text-sm font-bold text-white">
                        working
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                    </tr>
                    <tr className="border-b bg-white">
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        1
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        New Company Darta
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
                      </td>
                      <td className="mt-1.5 inline-flex whitespace-nowrap rounded-full bg-yellow-500 py-2 px-4 text-sm font-bold text-white">
                        Pending
                      </td>
                      <td className="text-primary-blue whitespace-nowrap px-6 py-4 text-sm font-light">
                        2078-9-10
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

export default JobDetails;
