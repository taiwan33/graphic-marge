import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useOnClickOutside from "../hooks/OutSideHook";

const LoginButton = () => {
  const ref = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useOnClickOutside(ref, () => setIsModalOpen(false));

  return (
    <>
      {isModalOpen ? (
        <>
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative text-primary-blue flex items-center rounded-full !bg-white px-3 py-2 font-bold shadow-md no-underline"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1200 1200"
            >
              <path
                fill="#ee1e23"
                d="M600 1200L131.25 496.875h252.539V0h432.422v496.875h252.539L600 1200z"
              />
            </svg>
            <button>Login</button>
          </div>
          <div
            ref={ref}
            className="absolute grid right-4 bg-white -bottom-[4.3rem] px-2 py-2 rounded-lg text-sm shadow-lg font-semibold "
          >
            <Link
              to="/staff-login"
              type="button"
              className="text-primary-red px-4 py-2 no-underline"
            >
              Staff Login
            </Link>
            <Link
              to="/client-login"
              className="text-primary-red no-underline px-4 py-2"
            >
              Client Login
            </Link>
          </div>
        </>
      ) : (
        <div
          onClick={() => setIsModalOpen(true)}
          className="relative text-primary-blue flex items-center rounded-full !bg-white px-3 py-2 font-bold shadow-md no-underline"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1200 1200"
          >
            <path
              fill="#ee1e23"
              d="M600 1200L131.25 496.875h252.539V0h432.422v496.875h252.539L600 1200z"
            />
          </svg>
          <button>Login</button>
        </div>
      )}
    </>
  );
};

export default LoginButton;
