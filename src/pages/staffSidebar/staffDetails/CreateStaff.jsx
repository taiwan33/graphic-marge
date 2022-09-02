import React from "react";

const CreateStaff = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Create Staff Account
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      {/*  create staff */}
      <div className="p-10">
        <div className="relative">
          <div className="w-ful grid grid-cols-1 text-lg sm:text-sm md:grid-cols-3 md:text-lg">
            <div className="text-primary-red border-primary-blue flex w-full items-center gap-3 border-x-2 border-t-2 p-2 font-medium md:border-l-2 md:border-r-0">
              <p className="flex-shrink-0">Staff Name :</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="Staff Name"
                id=""
              />
            </div>
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-t-2 border-r-0 p-2 font-medium md:border-l-2">
              <p className="flex-shrink-0">Address</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="Address"
                id=""
              />
            </div>
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-t-2 border-r-2 p-2 font-medium md:border-l-2">
              <p className="flex-shrink-0">Job Join Date:</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="date"
                id=""
              />
            </div>
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-t-2 border-r-0 p-2 font-medium md:border-l-2">
              <p className="flex-shrink-0">Father Name:</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="Father Name"
                id=""
              />
            </div>
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-t-2 p-2 font-medium md:border-l-2 md:border-r-0">
              <p className="flex-shrink-0">Post :</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="कम्पनीको ठेगाना"
                id=""
              />
            </div>
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-t-2 border-r-2 p-2 font-medium md:border-l-2">
              <p className="flex-shrink-0">Contact No :</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="phone number"
                id=""
              />
            </div>
          </div>
          <div className="text-primary-red border-primary-blue flex w-full items-center border-b-2 border-r-2 border-t-2 border-l-2 p-2 font-medium">
            <p className="flex-shrink-0">Staff Photo :</p>
            <input
              type="file"
              name=""
              className="text-primary-blue file:bg-primary-red ml-3 w-full outline-none file:rounded-lg file:text-white"
              id=""
            />
          </div>
        </div>
        {/* btns */}
        <div className="flex justify-end">
          <a
            href=""
            className="bg-primary-green ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Save
          </a>
        </div>
      </div>
      {/* staff socila media */}
      <div className="p-5">
        <h1 className="text-primary-red text-center font-bold underline">
          Social Media Link
        </h1>
        <div className="relative mt-3">
          <div className="w-ful grid grid-cols-1 text-lg sm:text-sm md:grid-cols-3 md:text-lg xl:grid-cols-4">
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-t-2 p-2 font-medium md:border-y-2 md:border-l-2">
              <p className="flex-shrink-0">Email :</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="Email"
              />
            </div>
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-y-2 p-2 font-medium md:border-l-0">
              <p className="flex-shrink-0">Messenger :</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="Facebook"
              />
            </div>
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-b-2 p-2 font-medium md:border-y-2 md:border-l-0 md:border-r-2">
              <p className="flex-shrink-0">Viber :</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="Viber"
              />
            </div>
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-b-2 p-2 font-medium md:border-y-2 md:border-l-0 md:border-r-2">
              <p className="flex-shrink-0">Whatsapp :</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="Whatsapp"
              />
            </div>
          </div>
        </div>
        {/* btns */}
        <div className="flex justify-end">
          <a
            href=""
            className="bg-primary-green ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Save
          </a>
        </div>
      </div>
      {/* username and pass */}
      <div className="p-5">
        <h1 className="text-primary-red text-center font-bold underline">
          Create Username and Password
        </h1>
        <div className="relative mt-3">
          <div className="w-ful grid grid-cols-1 text-lg sm:text-sm md:grid-cols-2 md:text-lg">
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-t-2 p-2 font-medium md:border-y-2 md:border-l-2">
              <p className="flex-shrink-0">Username :</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="Username"
              />
            </div>
            <div className="text-primary-red border-primary-blue flex w-full items-center border-x-2 border-y-2 p-2 font-medium md:border-l-0">
              <p className="flex-shrink-0">Password :</p>
              <input
                type="text"
                name=""
                className="text-primary-blue w-full outline-none"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        {/* btns */}
        <div className="flex justify-end">
          <a
            href=""
            className="bg-primary-green ml-10 mt-3 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Save
          </a>
        </div>
      </div>
      {/* select depart and role */}
      <div className="p-5">
        <p className="text-primary-red text-center font-bold underline">
          Select Depart and Role
        </p>
        <div className="mt-3 grid w-full grid-cols-1 flex-wrap overflow-scroll sm:grid-cols-3 lg:grid-cols-5 xl:!grid-cols-8">
          <div className="text-primary-red border-primary-blue flex h-full items-center border-2 p-2 font-bold">
            Depart
          </div>
          <div className="bg-primary-red text-white">
            <div className="border-primary-blue flex h-full flex-col items-center gap-2 border-2 p-2">
              <label htmlFor="">Management</label>
              <input type="radio" name="role" className="h-6 w-6" id="" />
            </div>
          </div>
          <div className="bg-primary-red text-white">
            <div className="border-primary-blue flex h-full flex-col items-center gap-2 border-2 p-2">
              <label htmlFor="">Legal Work</label>
              <input type="radio" name="role" className="h-6 w-6" id="" />
            </div>
          </div>
          <div className="bg-primary-red text-white">
            <div className="border-primary-blue flex h-full flex-col items-center gap-2 border-2 p-2">
              <label htmlFor="" className="text-center">
                Account and Taxation
              </label>
              <input type="radio" name="role" className="h-6 w-6" id="" />
            </div>
          </div>
          <div className="bg-primary-red text-white">
            <div className="border-primary-blue flex h-full flex-col items-center gap-2 border-2 p-2">
              <label htmlFor="">Branch</label>
              <input type="radio" name="role" className="h-6 w-6" id="" />
            </div>
          </div>
          <div className="bg-primary-red text-white">
            <div className="border-primary-blue flex h-full flex-col items-center gap-2 border-2 p-2">
              <label htmlFor="">Press</label>
              <input type="radio" name="role" className="h-6 w-6" id="" />
            </div>
          </div>
          <div className="bg-primary-red text-white">
            <div className="border-primary-blue flex h-full flex-col items-center gap-2 border-2 p-2">
              <label htmlFor="">News</label>
              <input type="radio" name="role" className="h-6 w-6" id="" />
            </div>
          </div>
          <div className="bg-primary-red text-white">
            <div className="border-primary-blue flex h-full flex-col items-center gap-2 border-2 p-2">
              <label htmlFor="">Other</label>
              <input type="radio" name="role" className="h-6 w-6" id="" />
            </div>
          </div>
        </div>
      </div>
      {/* select individual role */}
      <section className="flex w-full items-center px-5 py-5 md:px-10">
        <div className="m-2 mx-auto w-full max-w-[1000px] border-2 border-cyan-600 text-sm font-semibold text-red-600">
          <div className="grid grid-cols-12 items-center justify-center">
            <div className="col-span-1 flex-shrink-0 text-center">S.N.</div>
            <div className="col-span-11 border-l-2 border-cyan-600 text-center">
              1
            </div>
          </div>
          <div className="grid grid-cols-12 items-center justify-center border-t-2 border-cyan-600">
            <div className="col-span-1 px-1 text-center">Depart</div>
            <div className="col-span-11 flex flex-col items-center justify-center gap-1 border-l-2 border-cyan-600 bg-red-600 py-1 text-white">
              <h1>Management</h1>
              <div className="form-check">
                <input
                  className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                  type="checkbox"
                  defaultValue=""
                  defaultChecked=""
                  id="flexCheckDefault3"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 border-t-2 border-cyan-600">
            <div className="col-span-1 flex items-center justify-center">
              Role
            </div>
            <div className="col-span-11 border-l-2 border-cyan-600">
              <div className="grid w-full grid-cols-1 text-base font-semibold capitalize text-cyan-600 md:grid-cols-2 md:py-0">
                <div className="items-center px-2 md:py-1">
                  <div className="flex items-center gap-2">
                    <p>All</p>
                    <div className="form-check">
                      <input
                        className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault3"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <svg
                        id=""
                        className="h-6 w-6 text-[#F8D775]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"
                        />
                      </svg>
                      <p className="text-red-500">Task Assigned Details</p>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>New Task Create</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>Task Assigned list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <svg
                        id=""
                        className="h-6 w-6 text-[#F8D775]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"
                        />
                      </svg>
                      <p className="text-red-500">Job Working Details</p>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>Create New Job</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>Job Order List With Status</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>Job working list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>Job pending list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>Job complete list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <svg
                        id=""
                        className="h-6 w-6 text-[#F8D775]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"
                        />
                      </svg>
                      <p className="text-red-500">User Block</p>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>Create user</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>direct create user list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>active user list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>passive user list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>user transfer</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <svg
                        id=""
                        className="h-6 w-6 text-[#F8D775]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"
                        />
                      </svg>
                      <p className="text-red-500">services Details</p>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>Create service</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>service list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-cyan-600 px-2 md:border-l-2 md:pb-3">
                  <div className="md:mt-5">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <svg
                        id=""
                        className="h-6 w-6 text-[#F8D775]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"
                        />
                      </svg>
                      <p className="text-red-500">Company details</p>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>Company list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>PU given firm</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>PU given list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>Darta Complete firm create</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>darta complete firm given list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <svg
                        id=""
                        className="h-6 w-6 text-[#F8D775]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"
                        />
                      </svg>
                      <p className="text-red-500">public system manage</p>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>about us</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>gallery</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>important link</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <svg
                        id=""
                        className="h-6 w-6 text-[#F8D775]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"
                        />
                      </svg>
                      <p className="text-red-500">proff list details</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <svg
                        id=""
                        className="h-6 w-6 text-[#F8D775]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"
                        />
                      </svg>
                      <p className="text-red-500">staff details</p>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>create staff A/C</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>staff list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <svg
                        id=""
                        className="h-6 w-6 text-[#F8D775]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"
                        />
                      </svg>
                      <p className="text-red-500">day book</p>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>create day book</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>day book list</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                      <svg
                        id=""
                        className="h-6 w-6 text-[#F8D775]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 1024 1024"
                      >
                        <path
                          fill="currentColor"
                          d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12c0-17.7-14.3-32-32-32zm-180 0H238c-13 0-24.8 7.9-29.7 20L136 643.2V256h188.5l119.6 114.4H748V444z"
                        />
                      </svg>
                      <p className="text-red-500">invoice details</p>
                    </div>
                    <div className="flex items-center px-7">
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="#fff"
                          stroke="#EE1D23"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2Zm5 9h6m-6 4h3"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </g>
                      </svg>
                      <div className="flex items-center gap-1">
                        <h1>create invoice</h1>
                        <div className="form-check">
                          <input
                            className="form-check-input float-left my-1 h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-900 bg-yellow-300 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* staff all document list */}
      <div className="mt-3 w-full md:px-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <p className="text-primary-red font-bold underline">
                  Staff All Documnet List
                </p>
                {/* search */}
                <div className="mt-5 flex items-center justify-center">
                  <input
                    type="file"
                    className="text-primary-blue file:bg-primary-red ml-3 w-full outline-none file:rounded-lg file:text-white"
                  />
                  <input
                    placeholder="Search by Document"
                    type="search"
                    className="my-3 rounded-lg border border-black p-3"
                  />
                  <a
                    href=""
                    className="bg-primary-blue ml-10 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
                  >
                    Submit
                  </a>
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
                        Document Name
                      </th>
                      <th
                        scope="col"
                        className="border-primary-blue border-2 px-6 py-4 text-sm font-medium text-white"
                      >
                        .......
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
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        1
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        Nagrita
                      </td>
                      <td className="border-primary-blue whitespace-nowrap border-2 px-6 py-4 text-sm font-light text-gray-900">
                        0000000
                      </td>
                      <td className="border-primary-blue whitespace-nowrap rounded-full border-2 py-2 px-4 text-sm">
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
                          className="bg-primary-red rounded-full p-1 px-2 text-white"
                        >
                          Print
                        </a>
                        <a
                          href=""
                          className="bg-primary-red rounded-full p-1 px-2 text-white"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-5 flex items-center justify-end gap-10">
                  <div className="bg-primary-green font-Berkshire rounded-md px-5 py-3 font-bold text-white">
                    <a href="">Save</a>
                  </div>
                  <div className="bg-primary-blue rounded-md px-5 py-3 font-bold text-white">
                    <a href="">Submit</a>
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

export default CreateStaff;
