import React from "react";
import BackButton from "../../../components/common/backbutton/BackButton";

const RegistrationCertificate = () => {
  return (
    <div className="max-w grid place-content-center">
      <BackButton />
      <div className="text-center">
        <h1 className="title-style !font-Yatra">दर्ता प्रमन पत्र</h1>
        <div className="mt-4">
          <img src="./images/title-border.png" alt="" className="mx-auto" />
        </div>
      </div>
      <div className="mt-16">
        <div className="mx-auto max-w-4xl flex-row space-y-5 md:flex md:space-y-0">
          {/* text  */}
          <div className="flex-1 px-5 text-center">
            <h2 className="sub-title-style">दर्ता प्रमन पत्र</h2>
            <div className="bg-primary-blue mx-auto mt-1 h-1 w-[70%] rounded-full" />
            <p className="text-primary-blue font-Laila mt-3 text-sm lg:!text-xl text-justify">
              हजुरको व्यवसायको आवश्यकता अनुसारको सेवा पाउदिनकि भन्ने चिन्ता अब
              नलिनुहोस, कानुनी खातासंग आबद्द भयसंगै हजुरको एक दक्ष तथा अनुभबी
              Expert assign हुनुहुनेछ जसले हजुरलाई सम्पर्क गरि प्रतक्ष्य रुपमा
              हजुरको आवश्यकता/समस्या बुझी सोहि अनुरुप सल्लाह/सुझाब दिई चाहिने
              सेवाको बृस्तृत जानकारी समेत दिनुहुनेछ | हजुरले आफ्नो अनुकुलता
              अनुसार हाम्रो Expert संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा
              गर्न सक्नुहुने छ |
            </p>
          </div>
          {/* image  */}
          <div className="mx-auto h-72 md:w-96">
            <img
              src="https://images.unsplash.com/photo-1646764578980-65dbce171e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-4xl flex-row-reverse space-y-5 md:flex md:space-y-0">
          {/* text  */}
          <div className="flex-1 px-5 text-center">
            <h2 className="sub-title-style">दर्ता प्रमन पत्र</h2>
            <div className="bg-primary-blue mx-auto mt-1 h-1 w-[60%] rounded-full" />
            <p className="text-primary-blue font-Laila mt-3 text-sm lg:!text-xl">
              हजुरको व्यवसायको आवश्यकता अनुसारको सेवा पाउदिनकि भन्ने चिन्ता अब
              नलिनुहोस, कानुनी खातासंग आबद्द भयसंगै हजुरको एक दक्ष तथा अनुभबी
              Expert assign हुनुहुनेछ जसले हजुरलाई सम्पर्क गरि प्रतक्ष्य रुपमा
              हजुरको आवश्यकता/समस्या बुझी सोहि अनुरुप सल्लाह/सुझाब दिई चाहिने
              सेवाको बृस्तृत जानकारी समेत दिनुहुनेछ | हजुरले आफ्नो अनुकुलता
              अनुसार हाम्रो Expert संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा
              गर्न सक्नुहुने छ |
            </p>
          </div>
          {/* image  */}
          <div className="mx-auto h-72 md:w-96">
            <img
              src="https://images.unsplash.com/photo-1646764578980-65dbce171e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCertificate;
