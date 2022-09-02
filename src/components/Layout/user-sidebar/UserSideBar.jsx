import React from "react";
import { Link } from "react-router-dom";
import Images from "../../../media/images";

const UserSideBar = () => {
  return (
    <div className="flex sticky top-28">
      <aside className=" hidden h-[80vh] flex-col space-y-5 overflow-x-auto rounded-xl bg-white px-3 shadow-2xl xl:!flex">
        <div className="h-screen">
          <div className="mt-3">
            <h1 className="text-primary-blue font-Rakkas mt-5 mb-5 text-center font-bold md:text-2xl">
              <p>Dashboard</p>
              <img src={Images.title_border} alt="" className="mx-auto" />
            </h1>
            <Link
              to="/client/job-details"
              id="user-dashboard"
              className="side-nav animation text-primary-red flex items-center gap-3 rounded-md py-5 text-lg hover:bg-blue-900 hover:text-white"
            >
              <svg
                className="h-8 w-8 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
              </svg>
              <h1 className="font-Berkshire font-bold">Job Details</h1>
            </Link>
          </div>
          <div className="mt-6">
            <Link
              to="/client/profile"
              id="user-files"
              className="side-nav animation text-primary-red flex items-center gap-3 rounded-md py-5 text-lg hover:bg-blue-900 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h1 className="font-Berkshire font-bold">Profile</h1>
            </Link>
          </div>
          <div className="mt-6">
            <Link
              to="/client/upload-documents"
              id="user-payment"
              className="side-nav animation text-primary-red flex items-center gap-3 rounded-md py-5 text-lg hover:bg-blue-900 hover:text-white"
            >
              {/* received svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h1 className="font-Berkshire font-bold">Upload Documents</h1>
            </Link>
          </div>
          <div className="mt-6">
            <Link
              to="/client/received-documents"
              id="user-payment"
              className="side-nav animation text-primary-red flex items-center gap-3 rounded-md py-5 text-lg hover:bg-blue-900 hover:text-white"
            >
              {/* received svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h1 className="font-Berkshire font-bold">Received Documents</h1>
            </Link>
          </div>
          <div className="mt-6 mb-40">
            <Link
              to="/client/ledger-details"
              id="user-profile"
              className="side-nav animation text-primary-red flex items-center gap-3 rounded-md py-5 text-lg hover:bg-blue-900 hover:text-white"
            >
              {/* ledger svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <h1 className="font-Berkshire font-bold">Ledger Details</h1>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default UserSideBar;
