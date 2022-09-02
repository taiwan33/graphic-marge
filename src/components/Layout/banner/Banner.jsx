import React from "react";
import { Link } from "react-router-dom";
import Images from "../../../media/images";

const Banner = () => {
  return (
    <div className="w-padding bg-primary-blue hidden lg:block">
      <div className="max-w flex items-center justify-between gap-4 py-1 text-sm text-gray-100">
        <div className="flex items-center gap-2">
          <div className="flex items-center space-x-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span>info@gmarg.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <span className="text-background-solid">056-52227, 9855022279</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/calender">
            <img src={Images.calender} className="w-8" alt="" />
          </Link>
          <iframe
            title="calender"
            style={{ fontSize: "40px" }}
            scrolling="no"
            frameBorder={0}
            marginWidth={0}
            marginHeight={0}
            allowtransparency="true"
            src="https://www.ashesh.com.np/linknepali-time.php?dwn=only&font_color=eeeeee&font_size=15&bikram_sambat=0&format=dmyw&api=2421z6l241"
            width={130}
            height={25}
          />
        </div>
        <div className="flex items-center justify-center gap-2 rounded-full bg-white px-2 py-1">
          <span className=" text-primary-red font-bold">Follow us on</span>
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1200 1200"
          >
            <path
              fill="#0f4c9f"
              d="M1200 600L496.875 131.25v252.539H0v432.422h496.875v252.539L1200 600z"
            />
          </svg>
          <a href="#">
            <i className="fab fa-facebook text-primary text-lg"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter text-primary text-lg"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram text-primary text-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
