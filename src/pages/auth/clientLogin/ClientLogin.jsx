import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Images from "../../../media/images";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { login } from "../../../features/auth/authSllice";
import { useNavigate } from "react-router-dom";
import { reset } from "../../../features/auth/authSllice";
import { ToastContainer } from "react-toastify";
import LoadingButton from "../../../components/loadingButton/LoadingButton";
import "react-toastify/dist/ReactToastify.min.css";

const ClientLogin = () => {
  const [passVisibility, setPassVisibility] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, detail } = useSelector(
    (state) => state.auth
  );

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isError) {
      toast.error(detail);
    }

    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, detail, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    const userData = {
      email_or_phone: username,
      password,
    };
    if (username === "" && password === "") {
      toast.error("Please fill all the required fields");
    } else {
      dispatch(login(userData));
    }
  };

  const handleVisibility = () => {
    setPassVisibility((prev) => !prev);
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="">
      <ToastContainer />
      <div className="w-padding -mb-20 grid w-full place-content-center bg-gradient-to-t from-teal-500 via-teal-300 to-sky-300 py-20">
        <div className="flex justify-center">
          <div>
            <div
              className="rounded-tl-[70px] rounded-br-[70px] bg-white p-4 shadow-xl md:!p-10"
              data-aos="flip-up"
              data-aos-duration={800}
            >
              <div className="items-center justify-center gap-3 text-center md:!flex">
                <div className="h-20 w-20">
                  <img src={Images.logo} alt="" />
                </div>
                <div className="">
                  <h1 className="text-primary-red text-xl font-bold md:!text-2xl">
                    Sign in to your account
                  </h1>
                  <p className="text-primary-red text-sm md:!text-base">
                    Please enter your name and password to log in.
                  </p>
                </div>
              </div>
              <div className="items-center gap-10 md:flex">
                {/* left side  */}
                <div className="flex-1">
                  {/* input fields */}
                  <form onSubmit={handleSubmit} className="mt-10">
                    <div className="flex flex-col">
                      <label
                        htmlFor="username"
                        className="text-text-paragraph text-sm"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleOnChange}
                        className="rounded-lg border-2 border-red-200 py-2 px-3 focus:border-red-500 focus:outline-none"
                      />
                    </div>
                    <div className="mt-3 flex flex-col">
                      <label
                        htmlFor="username"
                        className="text-text-paragraph text-sm"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={`${passVisibility ? "password" : "text"}`}
                          name="password"
                          onChange={handleOnChange}
                          placeholder="Password"
                          value={formData.password}
                          className="w-full rounded-lg border-2 border-red-200 py-2 px-3 focus:border-red-500 focus:outline-none"
                        />
                        {passVisibility ? (
                          <span
                            onClick={handleVisibility}
                            className="absolute top-[29%] right-0 cursor-pointer select-none pr-3"
                          >
                            <img src={Images.eyeOpen} alt="" />
                          </span>
                        ) : (
                          <span
                            onClick={handleVisibility}
                            className="absolute top-[29%] right-0 cursor-pointer select-none pr-3"
                          >
                            <img src={Images.eyeClose} alt="" />
                          </span>
                        )}
                      </div>
                      {/* <div>
                        <span className="text-text-paragraph text-sm underline">
                          Forgot password?
                        </span>
                      </div> */}
                      <button
                        type="submit"
                        className="hover:bg-primary-red animation mt-8 rounded-md bg-red-500 py-2 px-4 text-center font-bold text-white"
                      >
                        {isLoading ? <LoadingButton /> : "Login"}
                      </button>
                      <div className="">
                        <Link to="/registration">
                          <button className="animation bg-primary-blue mt-8 mb-10 w-full rounded-md py-2 px-4 text-center font-bold text-white hover:bg-blue-800 md:!mb-0">
                            Create new account
                          </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
                {/* right side  */}
                <div className="md:w-64">
                  <div className="">
                    <img
                      src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      className="h-full w-full object-cover"
                      alt=""
                    />
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

export default ClientLogin;
