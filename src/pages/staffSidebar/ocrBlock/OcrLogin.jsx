import React from "react";

const OcrLogin = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        OCR Company Login
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      {/* iframe */}
      <div className="">
        <iframe
          className="h-screen w-full"
          src="https://application.ocr.gov.np/CRO/faces/OnlineUserLogin.jsp"
        />
      </div>
    </div>
  );
};

export default OcrLogin;
