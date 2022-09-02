import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Images from "../../../media/images";
import { reset, registerUser } from "../../../features/auth/authSllice";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const schema = yup.object().shape({
  username: yup.string().required("UserName should be required please"),
  password: yup.string().min(5).max(12).required(),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

const Registration = () => {
  const [placeholder, setPlaceholder] = useState("Phone");
  const [radioValue, setRadioValue] = useState("Phone");
  const [type, setType] = useState("number");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, detail } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(detail);
    }

    if (isSuccess) {
      navigate("/client-login");
      toast.success("User Created sucessfully");
    }

    if (user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, detail, navigate, dispatch]);

  const radioHandler = (e) => {
    setRadioValue(e.target.value);
    setPlaceholder(e.target.value);
    setType(e.target.value === "phone" ? "number" : "email");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    const { username, password } = data;
    const userData = {
      phone: username,
      password,
    };
    dispatch(registerUser(userData));
  };

  return (
    <>
      <ToastContainer />
      <div className="w-padding w-full bg-gradient-to-t from-teal-500 via-teal-300 to-sky-300 py-20">
        <div className="flex justify-center">
          <div>
            <div
              className="rounded-tl-[70px] rounded-br-[70px] bg-white p-4 shadow-xl md:!p-10 aos-init aos-animate"
              data-aos="flip-up"
              data-aos-duration={800}
            >
              <div className="items-center justify-center gap-3 text-center md:!flex">
                <div className="h-20 w-20">
                  <img src={Images.logo} alt="" />
                </div>
                <div className="">
                  <h1 className="text-primary-red text-xl font-bold md:!text-2xl">
                    Register your account
                  </h1>
                  {/* <p className="text-primary-red text-sm md:!text-base">
                  Please enter your email/phone and password to Register.
                </p> */}
                </div>
              </div>
              <div className="mt-5">
                <p>Register with Email/Phone</p>
                <input
                  onChange={radioHandler}
                  checked={radioValue === "phone"}
                  type="radio"
                  name="login"
                  value="phone"
                />
                Phone
                <br />
                <input
                  onChange={radioHandler}
                  checked={radioValue === "email"}
                  value="email"
                  type="radio"
                  name="login"
                  className="mt-3"
                />
                Email
                <br />
              </div>
              <div className="items-center gap-10 md:flex">
                {/* left side  */}
                <div className="flex-1">
                  {/* input fields */}
                  <form onSubmit={handleSubmit(submitForm)} className="mt-10">
                    <div className="flex flex-col">
                      <label
                        htmlFor="username"
                        className="text-text-paragraph text-sm"
                      >
                        Username
                      </label>
                      <input
                        type={type}
                        name="username"
                        {...register("username", { required: true })}
                        placeholder={placeholder}
                        className="border-2 border-red-200 py-2 px-3 focus:border-red-500 focus:outline-none"
                      />
                      {errors.username && (
                        <p className=" text-primary-red">
                          Username is required.
                        </p>
                      )}
                    </div>
                    <div className="mt-5 flex flex-col">
                      <label
                        htmlFor="username"
                        className="text-text-paragraph text-sm"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          {...register("password", { required: true })}
                          placeholder="Password"
                          className="border-2 border-red-200 py-2 px-3 focus:border-red-500 focus:outline-none"
                        />
                        {errors.password && (
                          <p className=" text-primary-red">
                            password is required.
                          </p>
                        )}
                      </div>
                      <label
                        htmlFor="pasword"
                        className="text-text-paragraph mt-5 text-sm"
                      >
                        Confirm Password
                      </label>
                      <div className="relative">
                        <input
                          type="password"
                          id="password2"
                          {...register("cpassword", { required: true })}
                          placeholder="Confirm Password"
                          className="border-2 border-red-200 py-2 px-3 focus:border-red-500 focus:outline-none"
                        />
                        {errors.cpassword && (
                          <p className=" text-primary-red">
                            Confirm Password is required.
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="hover:bg-primary-red animation mt-8 rounded-md bg-red-500 py-2 px-4 text-center font-bold text-white"
                      >
                        {isLoading ? "Loading...." : "Register"}
                      </button>
                      <div className="mt-3">
                        <h1>
                          Already Registered?
                          <Link to="/client-login">
                            <strong className="text-primary-blue underline">
                              Login
                            </strong>
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </form>
                </div>
                {/* right side  */}
                <div className="md:w-64">
                  <img
                    src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
