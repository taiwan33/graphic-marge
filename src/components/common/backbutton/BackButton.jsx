import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="xs:top-14 fixed top-8 mt-10 sm:top-16 lg:top-24 z-20">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="bg-primary-red inline-flex cursor-pointer items-center gap-2 rounded-full py-1 px-3"
      >
        <svg
          className="h-4 w-4 md:!h-6 md:!w-6"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1200 1200"
        >
          <path
            fill="#f2e506"
            d="m0 600l703.125 468.75V816.211H1200V383.789H703.125V131.25L0 600z"
          />
        </svg>
        <div className="font-Berkshire text-sm font-bold text-white md:!text-base">
          Go back
        </div>
      </div>
    </div>
  );
};

export default BackButton;
