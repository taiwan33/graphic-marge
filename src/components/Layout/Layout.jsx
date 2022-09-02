import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "./banner/Banner";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import SharePage from "../common/SharePage/SharePage";
import StafSidebar from "./StaffSidebar/StafSidebar";
import UserSideBar from "./user-sidebar/UserSideBar";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

const Layout = () => {
  const { user, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    isSuccess && user && toast.success("User login sucessfully");
  }, [user, isSuccess]);

  let isStaffLogin = false;
  let isClientLogin = false;
  user &&
    (user.user_type === "CL" ? (isClientLogin = true) : (isStaffLogin = true));

  return (
    <div className="">
      <ToastContainer />

      <div className="sticky top-0 z-50">
        <Banner />
        <Navbar />
      </div>

      <div className="w-full">
        <div className="max-w">
          <div className="">
            <div className="grid grid-cols-12">
              <div className="col-span-1">
                <SharePage />
              </div>

              {user && (
                <>
                  {isStaffLogin && (
                    <div className="xl:col-span-2">
                      <StafSidebar />
                    </div>
                  )}
                  {isClientLogin && (
                    <div className="xl:col-span-2">
                      <UserSideBar />
                    </div>
                  )}
                </>
              )}

              <div
                className={`col-span-12 lg:col-span-10 ${
                  isStaffLogin || isClientLogin
                    ? "xl:col-span-9"
                    : "xl:col-span-11"
                } `}
              >
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
