import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../LoginButton/LoginButton";
import Images from "../../../media/images";
import { useSelector } from "react-redux";
import LogoutButton from "../../logoutButton/LogoutButton";

const Navbar = () => {
  const [openSideNav, setIsOpenSideNav] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const sideHandler = () => {
    setIsOpenSideNav((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-primary-red lg:mt-0.5">
        <div className="mx-auto flex max-w-[2560px] items-center justify-between pr-4 ">
          <Link to="/">
            <img src={Images.navlogo} alt="" />
          </Link>
          {/* links sections  */}
          <div className="hidden lg:block">
            <div className="flex items-center lg:gap-6 lg:text-sm xl:gap-10 xl:text-base">
              <div className="flex items-center font-medium lg:gap-6 lg:text-sm xl:gap-10 xl:text-base">
                <Link to="/about" className="a-hover">
                  <div className="flex flex-col items-center">
                    <div className="text-xl ">हाम्रो बारेमा</div>
                    <div>About Us</div>
                  </div>
                </Link>
                <Link to="/services" className="a-hover">
                  <div className="flex flex-col items-center">
                    <div className="text-xl">हामीले गर्ने कामहरु</div>
                    <div>Our Services</div>
                  </div>
                </Link>
                <Link to="/works" className="a-hover">
                  <div className="flex flex-col items-center">
                    <div className="text-xl">हामीले गरेका कामहरु</div>
                    <div>Our Works</div>
                  </div>
                </Link>
                <Link to="/gallery" className="a-hover">
                  <div className="flex flex-col items-center">
                    <div className="text-xl">ग्यालेरी</div>
                    <div>Our Gallery</div>
                  </div>
                </Link>
                <Link to="/news" className="a-hover">
                  <div className="flex flex-col items-center">
                    <div className="text-xl">समाचार</div>
                    <div>News</div>
                  </div>
                </Link>
              </div>
              {!user ? <LoginButton /> : <LogoutButton />}
            </div>
          </div>
          {/* menu icon  */}
          <div className="lg:hidden">
            <div onClick={sideHandler} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            {/* sidebar menu  */}
            {openSideNav && (
              <>
                <div
                  onClick={() => setIsOpenSideNav(false)}
                  className="bg-black overflow-hidden w-screen h-screen opacity-50 absolute top-0 right-0"
                ></div>
              </>
            )}
            <div
              className={`fixed bottom-0 top-0 left-0  w-96 max-w-full flex-col border-none bg-white  text-gray-700 shadow-sm outline-none transition-all  ${
                openSideNav ? "-translate-x-0" : "-translate-x-full"
              } duration-300 ease-in-out`}
            >
              <div className=" flex items-center justify-between">
                {/* close btn */}
                <div
                  onClick={() => setIsOpenSideNav(false)}
                  type="button"
                  className=" absolute right-0 box-content h-8 w-8 rounded-none border-none p-1 text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="white"
                      d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"
                    />
                  </svg>
                </div>
                {/* logo here  */}
                <div className=" bg-primary-red ">
                  <img
                    src={Images.navlogo}
                    alt=""
                    className="w-[90%] object-cover"
                  />
                </div>
              </div>
              <div className="text-black overflow-y-auto p-4">
                <div className="flex items-center justify-center">
                  <div className="flex  flex-col space-y-3 font-medium">
                    <Link
                      onClick={() => setIsOpenSideNav(false)}
                      to="/about"
                      className="a-hover !text-primary-blue text-center text-xl"
                    >
                      <div className="font-Calistoga">About Us</div>
                      <div className="font-Bakbak">हाम्रो बारेमा</div>
                    </Link>
                    <Link
                      onClick={() => setIsOpenSideNav(false)}
                      to="/services"
                      className="a-hover !text-primary-blue  text-center text-xl"
                    >
                      <div className="font-Calistoga">Our Services</div>
                      <div className="font-Bakbak">हामीले गर्ने कामहरु</div>
                    </Link>
                    <Link
                      onClick={() => setIsOpenSideNav(false)}
                      to="/works/new-company-list"
                      className="a-hover !text-primary-blue  text-center text-xl"
                    >
                      <div className="font-Calistoga">Our Works</div>
                      <div className="font-Bakbak">हामीले गरेका कामहरु</div>
                    </Link>
                    <Link
                      onClick={() => setIsOpenSideNav(false)}
                      to="/gallery"
                      className="a-hover !text-primary-blue  text-center text-xl"
                    >
                      <div className="font-Calistoga">Our Gallery</div>
                      <div className="font-Bakbak">ग्यालेरी</div>
                    </Link>
                    <Link
                      onClick={() => setIsOpenSideNav(false)}
                      to="/news"
                      className="a-hover !text-primary-blue  text-center text-xl"
                    >
                      <div className="font-Calistoga">News</div>
                      <div className="font-Bakbak">समाचार</div>
                    </Link>
                    <LoginButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
