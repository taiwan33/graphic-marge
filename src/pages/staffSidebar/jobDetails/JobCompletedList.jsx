const JobCompletedList = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Job Completed List
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
                {/* search */}
                <div className="flex justify-between">
                  <input
                    placeholder="Search by Company"
                    type="search"
                    className="my-3 rounded-lg border border-black p-3"
                  />
                  <input
                    placeholder="Search by Staff"
                    type="search"
                    className="my-3 rounded-lg border border-black p-3"
                  />
                  <input
                    placeholder="Search by Date"
                    type="search"
                    className="my-3 rounded-lg border border-black p-3"
                  />
                </div>
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
                        Completed Date
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
                        Job Worked Staff name
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
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        Status
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
                      <td className="border-primary-blue whitespace-nowrap border-2 py-2 px-4 text-xs text-white">
                        <a href="" className="bg-primary-red rounded-3xl p-2">
                          View
                        </a>
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 py-2 px-4 text-xs text-white">
                        <p className="bg-primary-blue rounded-3xl p-2">
                          Completed
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
export default JobCompletedList;
