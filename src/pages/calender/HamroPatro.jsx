import React from "react";

const HamroPatro = () => {
  return (
    <div
      className=" w-padding flex flex-col justify-center items-center"
      id="hamro-patro"
    >
      <div className="text-primary-red font-Acme mt-4 text-center text-xl font-bold">
        Hamro Patro Calendar
      </div>
      <div className="mx-aut mt-3">
        <iframe
          src="https://www.hamropatro.com/widgets/calender-full.php"
          frameBorder={0}
          scrolling="no"
          marginWidth={0}
          marginHeight={0}
          style={{
            border: "none",
            overflow: "hidden",
            width: 800,
            height: 840,
          }}
          allowtransparency="true"
        />
      </div>
    </div>
  );
};

export default HamroPatro;
