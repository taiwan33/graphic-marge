import Images from "../../../media/images";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const StaffLogin = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="max-w w-full -mb-20">
        <div className="bg-primary-green grid grid-cols-1 items-stretch lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center rounded-br-[100px] bg-gradient-to-t from-teal-500 via-teal-300 to-sky-300 p-2 md:!p-10">
            <div
              className="mt-10 flex w-full flex-col rounded-tl-[100px] rounded-tr-md rounded-br-[100px] rounded-bl-md bg-white py-20 shadow-2xl"
              data-aos="flip-up"
              data-aos-duration={500}
            >
              <div className="flex items-center justify-center">
                <img
                  src={Images.logo}
                  className="h-32 w-32"
                  alt=""
                  data-aos="fade-down"
                  data-aos-duration={1000}
                />
              </div>
              <div className="">
                <h1 className="text-primary-red mt-3 text-center text-2xl font-bold">
                  Staff Login
                </h1>
                <form action="">
                  <div className="flex flex-col px-4 md:!px-20">
                    <input
                      type="text"
                      placeholder="Username"
                      className="border-primary-blue mt-3 w-full rounded-lg border-2 py-2 px-3"
                    />
                    <div className="relative mt-4">
                      <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="border-primary-blue mt-3 w-full rounded-lg border-2 py-2 px-3"
                      />
                      <span
                        id="eye-open"
                        className="material-icons-outlined absolute top-[40%] right-0 cursor-pointer select-none pr-3"
                      >
                        visibility
                      </span>
                      <span
                        id="eye-close"
                        className="material-icons-outlined absolute top-[40%] right-0 hidden cursor-pointer select-none pr-3"
                      >
                        visibility_off
                      </span>
                    </div>
                    <a href="" className="mt-3">
                      <span className="text-text-paragraph text-sm underline">
                        Forgot password?
                      </span>
                    </a>
                    <a
                      href="./staff-dashboard/staff-index.html"
                      className="hover:bg-primary-red animation mt-8 rounded-md bg-red-500 py-2 px-4 text-center font-bold text-white"
                    >
                      Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-primary-green">
            <div className="flex items-center justify-center p-5 md:p-20">
              <img
                src={Images.carosel3}
                alt=""
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffLogin;
