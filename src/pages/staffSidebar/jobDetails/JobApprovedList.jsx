import React from "react";

const JobApprovedList = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Job Order List With Status
      </h1>
      <div className="">
        <img
          src="../../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      {/*  table */}
      <div className="mt-3 w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="border-primary-blue min-w-full border-2 text-center">
                  <thead className="bg-primary-red border-primary-blue border-2">
                    <tr>
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
                        J.No
                      </th>
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Date
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
                        Job Details
                      </th>
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Staff Name
                      </th>
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Total Amount
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
                    <tr className="border-b bg-white">
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        1
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        1
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        2078/1/1
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        company
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        job order
                      </td>
                      <td className="border-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm">
                        Bimal dangi
                      </td>
                      <td className="border-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm">
                        10000
                      </td>
                      <td className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full py-2 px-4 text-xs text-white">
                        <a href="" className="bg-primary-green rounded-3xl p-2">
                          Edit/View
                        </a>
                        <a href="" className="bg-primary-red rounded-3xl p-2">
                          Reject
                        </a>
                        <a href="" className="rounded-3xl bg-yellow-600 p-2">
                          Pending
                        </a>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          href=""
                          className="bg-primary-blue rounded-3xl p-2"
                        >
                          Approve
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* approve pop up modal */}
                <div
                  className="modal fade fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog pointer-events-none relative w-auto">
                    <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                      <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                        <button
                          type="button"
                          className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      {/* modal body */}
                      <div className="modal-body relative p-4">
                        <h1>Modal body</h1>
                      </div>
                      <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t border-gray-200 p-4">
                        <button
                          className="bg-primary-red rounded-md p-2 text-white"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button className="bg-primary-green ml-5 rounded-md p-2 text-white">
                          Create Task
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
    </div>
  );
};

export default JobApprovedList;
