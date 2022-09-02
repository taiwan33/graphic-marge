import React from "react";
import { Link } from "react-router-dom";
import Images from "../../../media/images";

const Footer = () => {
  return (
    <footer className="max-w bg-primary-blue mt-20">
      <div className="w-padding">
        <footer className="text-center text-white lg:text-left">
          <div className="mx-6 py-3 text-center md:text-left">
            <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* logo here  */}
              <div className="flex flex-col">
                <img src={Images.logo} className="mx-auto w-24" alt="" />
                <div className="mt-1 ml-3.5 flex flex-col items-center justify-center">
                  {/* <h6
            className="mb-2 flex justify-center font-semibold md:justify-start"
          >
            Graphics Marga Pvt. Ltd.
          </h6> */}
                  <p className="footer-links font-bold">
                    Company Redg. No:23456
                  </p>
                  <p className="footer-links -mt-2 font-bold">
                    PAN No.:606754699
                  </p>
                  <p className="footer-links -mt-2 font-bold">
                    License No.:019
                  </p>
                  {/* <p className="footer-links">
            Registered Office: Bharatpur-11, ByPass Road Chitwan
          </p> */}
                </div>
              </div>
              {/* Our Branches  */}
              <div className="">
                {/* <h6
          className="mb-2 flex justify-center text-lg font-semibold md:justify-start"
        >
          Our Office Addresses
        </h6> */}
                {/* embeded map  */}
                <div
                  className="modal fade fixed top-0 left-0 hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                  id="exampleModalCenter"
                  tabIndex={-1}
                  aria-labelledby="exampleModalCenterTitle"
                  aria-modal="true"
                  role="dialog"
                >
                  <div className="modal-dialog modal-dialog-centered pointer-events-none relative w-auto">
                    <div className="modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
                      <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
                        <h1 className="text-primary-red text-center text-xl font-bold">
                          Head Office Location
                        </h1>
                        <button
                          type="button"
                          className="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      {/* map */}
                      <div className="h-[400px] md:!w-[500px]">
                        <iframe
                          className="h-full w-full"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.089825757131!2d84.43203061559092!3d27.683618482801744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb2d933d355d%3A0x5e79bbe09d977ee3!2sSaptagandaki%20Multiple%20Campus!5e0!3m2!1sen!2snp!4v1648193059931!5m2!1sen!2snp"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of map */}
                <div className="flex items-start justify-center gap-5 md:justify-start">
                  <p className="flex justify-center text-xl font-semibold md:justify-start">
                    Head Office
                  </p>
                  <div>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenter"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="white"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                        <circle cx={12} cy={9} r="2.5" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className=" flex justify-start footer-links mb-4">
                  Bharatpur-11, ByPass Road Chitwan
                </p>
                {/* <h6
          className="mb-4 flex justify-center font-semibold md:justify-start"
        >
          Main Office
        </h6> */}
                {/* <p className="footer-links">Chitwan : 9876543210</p> */}
                <h6 className="flex justify-center text-xl font-semibold md:justify-start">
                  Branch Offices
                </h6>
                <div className="flex flex-wrap items-start justify-center gap-x-2 lg:justify-start">
                  <span className="footer-links">Pokhara,</span>
                  <span className="footer-links">Kaski</span>
                  <span className="h-5 w-0.5 bg-yellow-400" />
                  <span className="footer-links">Bijauri,</span>
                  <span className="footer-links">Dang</span>
                  <span className="h-5 w-0.5 bg-yellow-400" />
                  <span className="footer-links">Tripureshwor,</span>
                  <span className="footer-links">Kathmandu</span>
                </div>
                <div className="flex flex-wrap items-start justify-center gap-x-2 lg:justify-start">
                  <span className="footer-links">Pokhara,</span>
                  <span className="footer-links">Kaski</span>
                  <span className="h-5 w-0.5 bg-yellow-400" />
                  <span className="footer-links">Bijauri,</span>
                  <span className="footer-links">Dang</span>
                  <span className="h-5 w-0.5 bg-yellow-400" />
                  <span className="footer-links">Tripureshwor,</span>
                  <span className="footer-links">Kathmandu</span>
                </div>
                <Link to="/branches" className=" float-left">
                  <button className="inline-flex items-start border-2 border-yellow-500 px-3 py-1 text-base font-bold text-yellow-400 md:text-xl">
                    Branches Details &gt;
                  </button>
                </Link>
              </div>
              <div className="flex flex-col items-start justify-start footer-links">
                <div className="mb-4 text-xl font-semibold md:justify-start">
                  Contact Us
                </div>
                <div className=" text-left mb-3">
                  <span className="">056-522279, 9855022279,</span>
                  <span className=""> 9844978300, 9846613590, 9809512750</span>
                </div>
                <div className="text-left space-y-3">
                  <span className="">
                    For Chitwan 9842317512,9810878785 Dang
                  </span>
                  <span className="">Email :gmarg2075@gmail.com</span>
                  <span className="">For V-card :gmarg.vcard@gmail.com</span>
                </div>
              </div>
              <div className="footer-links text-start">
                <h6 className="mb-2 text-xl font-semibold md:justify-start">
                  Important Links
                </h6>
                <div className=" border-extralightBorder flex h-36 w-full text-left flex-col overflow-auto border p-2">
                  <Link to="/important-links" className="footer-links">
                    Radio
                  </Link>
                  <Link to="/important-links" className="footer-links">
                    Radio
                  </Link>
                  <Link to="/important-links" className="footer-links">
                    Radio
                  </Link>
                  <Link to="/important-links" className="footer-links">
                    Radio
                  </Link>
                  <Link to="/important-links" className="footer-links">
                    Radio
                  </Link>
                  <Link to="/important-links" className="footer-links">
                    Radio
                  </Link>
                  <Link to="/important-links" className="footer-links">
                    Radio
                  </Link>
                  <Link to="/important-links" className="footer-links">
                    Radio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-[#0A4275] p-2 text-center text-xs text-white">
        <span>© 2021 Copyright:</span>
        <a
          className="font-semibold text-white"
          href="https://intelzy.co/"
          target="_blank"
        >
          Intelzy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
