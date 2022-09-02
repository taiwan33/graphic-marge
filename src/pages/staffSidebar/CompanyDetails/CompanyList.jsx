import React from "react";

const CompanyList = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Company and Business List
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      {/* tab  */}
      <div className="mt-5 p-3 md:!p-10">
        <ul className="tabs border-primary-red m-0 grid list-none grid-cols-1 place-content-between gap-5 rounded-3xl border-2 p-3 md:grid-cols-2 lg:grid-cols-3">
          <li
            data-tab-target="#first"
            className="active tab cursor-pointer rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold"
          >
            <p>New Company List</p>
            <p className="">नयाँ कम्पनीको सूची</p>
          </li>
          <li
            data-tab-target="#second"
            className="tab cursor-pointer rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold opacity-70"
          >
            <p className="">Old Company List</p>
            <p className="">पुरानो कम्पनीको सूची</p>
          </li>
          <li
            data-tab-target="#third"
            className="tab cursor-pointer rounded-full bg-[#DFF1E7] px-4 py-3 text-center font-bold"
          >
            <p>Other business List</p>
            <p>अन्य व्यवसायको सूची</p>
          </li>
        </ul>
        {/* tab contents */}
        <div className="tab-content mx-3">
          {/* first items */}
          <div id="first" data-tab-content="" className="active">
            {/* Single company list */}
            <h1 className="text-primary-red mt-10 font-bold underline">
              Single Company List
            </h1>
            <div className="">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      {/* <div className="flex items-start gap-10"> */}
                      {/* <div className="mt-2.5">
                              <div
                                className="space-y-1 md:space-x-1 md:space-y-0"
                              > */}
                      {/* filter */}
                      {/* <div className="flex items-center gap-2">
                                  <a
                                    data-bs-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                  >
                                    <svg
                                      className="text-text-primary"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="28"
                                      height="28"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        fill="black"
                                        fill-rule="evenodd"
                                        d="M20 5H18.8293C18.4175 3.83481 17.3062 3 16 3 14.6938 3 13.5825 3.83481 13.1707 5H4C3.44772 5 3 5.44772 3 6 3 6.55228 3.44772 7 4 7H13.1707C13.5825 8.16519 14.6938 9 16 9 17.3062 9 18.4175 8.16519 18.8293 7H20C20.5523 7 21 6.55228 21 6 21 5.44772 20.5523 5 20 5zM16 7C16.5523 7 17 6.55228 17 6 17 5.44772 16.5523 5 16 5 15.4477 5 15 5.44772 15 6 15 6.55228 15.4477 7 16 7zM3 12C3 11.4477 3.44772 11 4 11H5.17071C5.58254 9.83481 6.69378 9 8 9 9.30622 9 10.4175 9.83481 10.8293 11H20C20.5523 11 21 11.4477 21 12 21 12.5523 20.5523 13 20 13H10.8293C10.4175 14.1652 9.30622 15 8 15 6.69378 15 5.58254 14.1652 5.17071 13H4C3.44772 13 3 12.5523 3 12zM8 13C8.55229 13 9 12.5523 9 12 9 11.4477 8.55229 11 8 11 7.44772 11 7 11.4477 7 12 7 12.5523 7.44772 13 8 13zM4 17C3.44772 17 3 17.4477 3 18 3 18.5523 3.44772 19 4 19H13.1707C13.5825 20.1652 14.6938 21 16 21 17.3062 21 18.4175 20.1652 18.8293 19H20C20.5523 19 21 18.5523 21 18 21 17.4477 20.5523 17 20 17H18.8293C18.4175 15.8348 17.3062 15 16 15 14.6938 15 13.5825 15.8348 13.1707 17H4zM17 18C17 18.5523 16.5523 19 16 19 15.4477 19 15 18.5523 15 18 15 17.4477 15.4477 17 16 17 16.5523 17 17 17.4477 17 18z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </a>
                                  <a
                                    data-bs-toggle="collapse"
                                    href="#collapseExample"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    className="text-text-paragraph font-bold"
                                    >Filter By Branch</a
                                  >
                                </div>
                              </div> */}
                      {/* filter items */}
                      {/* <div className="collapse" id="collapseExample">
                                <div className="mt-5 space-y-3">
                                  <div className="text-primary-blue">
                                    <a href="">Chitwan</a>
                                  </div>
                                  <div className="text-primary-blue">
                                    <a href="">Kathmandu</a>
                                  </div>
                                  <div className="text-primary-blue">
                                    <a href="">Pokhara</a>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                      {/* search */}
                      <div className="flex items-center justify-between">
                        <input
                          placeholder="Search by Branch"
                          type="search"
                          className="my-3 rounded-lg border border-black p-3"
                        />
                        <input
                          placeholder="Search by Company"
                          type="search"
                          className="my-3 rounded-lg border border-black p-3"
                        />
                        <input
                          placeholder="Search by Address"
                          type="search"
                          className="my-3 rounded-lg border border-black p-3"
                        />
                      </div>
                    </div>
                    <table className="min-w-full border">
                      <thead className="font-Bree border-b bg-white font-bold">
                        <tr>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left text-sm font-bold text-white"
                          >
                            SN.
                          </th>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                          >
                            Company Name
                          </th>
                          <th
                            scope="col"
                            className="font-fold bg-primary-red px-6 py-4 text-left text-white"
                          >
                            Address
                          </th>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                          >
                            Registered Date
                          </th>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                          >
                            PAN No.
                          </th>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                          >
                            Contact No.
                          </th>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="font-Acme">
                        <tr className="text-primary-blue border-b bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                            1
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            Intelzy
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            Private company
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            2022-2-23
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            435893
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            435893
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            <a
                              href="./company-details.html"
                              className="bg-primary-blue rounded-full py-1 px-2 text-white"
                            >
                              View and Edit
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* end single company list */}
            {/* Multiple company list */}
            <h1 className="text-primary-red mt-10 font-bold underline">
              Multiple Company List
            </h1>
            <div className="">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      {/* search */}
                      <div className="flex items-center justify-between">
                        <input
                          placeholder="Search by Branch"
                          type="search"
                          className="my-3 rounded-lg border border-black p-3"
                        />
                        <input
                          placeholder="Search by Company"
                          type="search"
                          className="my-3 rounded-lg border border-black p-3"
                        />
                        <input
                          placeholder="Search by Address"
                          type="search"
                          className="my-3 rounded-lg border border-black p-3"
                        />
                      </div>
                    </div>
                    <table className="min-w-full border">
                      <thead className="font-Bree border-b bg-white font-bold">
                        <tr>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left text-sm font-bold text-white"
                          >
                            SN.
                          </th>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                          >
                            Company Name
                          </th>
                          <th
                            scope="col"
                            className="font-fold bg-primary-red px-6 py-4 text-left text-white"
                          >
                            Address
                          </th>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                          >
                            Registered Date
                          </th>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                          >
                            PAN No.
                          </th>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                          >
                            Contact No.
                          </th>
                          <th
                            scope="col"
                            className="bg-primary-red px-6 py-4 text-left font-bold text-white"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="font-Acme">
                        <tr className="text-primary-blue border-b bg-gray-100">
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                            1
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            Intelzy
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            Private company
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            2022-2-23
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            435893
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            435893
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light">
                            <a
                              href="./company-details.html"
                              className="bg-primary-blue rounded-full py-1 px-2 text-white"
                            >
                              View and Edit
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
        {/* second items */}
        <div className="mt-10 text-xl" id="second" data-tab-content="">
          <h1>second item</h1>
        </div>
        {/* third item */}
        <div className="mt-10 text-xl" id="third" data-tab-content="">
          <h1>third item</h1>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
