const TaskView = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
          Task Assigned List
        </h1>
        <div className="">
          <img
            src="../../images/title-border.png"
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
                      type="text"
                      placeholder="Search by Staff Name "
                      id="table-search"
                      className="mb-2 block w-80 rounded-lg border border-gray-700 bg-gray-50 py-2.5 px-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Search by Date "
                      id="table-search"
                      className="mb-2 block w-80 rounded-lg border border-gray-700 bg-gray-50 py-2.5 px-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
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
                          T.No
                        </th>
                        <th
                          scope="col"
                          className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                        >
                          T.A Date
                        </th>
                        <th
                          scope="col"
                          className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                        >
                          Details
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
                          Staff Name
                        </th>
                        <th
                          scope="col"
                          className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                        >
                          Edit/View
                        </th>
                        <th
                          scope="col"
                          className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                        >
                          Task Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="font-Acme">
                      <tr className="border-primary-blue border-2 bg-white">
                        <td className="border-primary-blue text-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light">
                          1
                        </td>
                        <td className="border-primary-blue text-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light">
                          1
                        </td>
                        <td className="border-primary-blue text-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light">
                          2078/1/1
                        </td>
                        <td className="border-primary-blue text-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light">
                          new company darta
                        </td>
                        <td className="border-primary-blue text-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light">
                          abc pvt ltd
                        </td>
                        <td className="border-primary-blue text-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm">
                          Bimal dangi
                        </td>
                        <td className="border-primary-blue text-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm" />
                        <td className="border-primary-blue text-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm">
                          Working
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
    </div>
  );
};
export default TaskView;
