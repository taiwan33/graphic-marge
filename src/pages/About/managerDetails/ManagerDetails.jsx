import React from "react";
import BackButton from "../../../components/common/backbutton/BackButton";
import Images from "../../../media/images";

const ManagerDetails = () => {
  return (
    <div className="max-w-[900px] mx-auto text-center">
      <BackButton />
      <h1 className="title-style !font-Yatra">प्रबन्द निर्देसको भनाइ</h1>
      <div className="mt-10 md:flex items-center justify-center gap-20">
        <div className="mb-10 flex justify-center">
          <img
            alt=""
            src={Images.user_img}
            className="border-primary-blue h-auto w-auto rounded-3xl border-2 object-cover shadow-lg"
          />
        </div>
        <div className="space-y-5 grid place-content-center text-left border-2 border-primary-blue p-5 rounded-2xl">
          <h1 className="md:text-xl text-primary-red font-bold">
            Name : <span className="text-primary-blue ">Rajan Ghimire</span>
          </h1>
          <h1 className="md:text-xl text-primary-red font-bold">
            Position :{" "}
            <span className="text-primary-blue ">Managing Director</span>
          </h1>
          <h1 className="md:text-xl text-primary-red font-bold">
            Address :{" "}
            <span className="text-primary-blue ">Bharatpur-11, Chitwan</span>
          </h1>
          <h1 className="md:text-xl text-primary-red font-bold">
            Contact : <span className="text-primary-blue ">980000000</span>
          </h1>
        </div>
      </div>
      <div className="">
        <div className="text-primary-blue font-Laila mt-3 text-sm space-y-4 leading-7 lg:!text-lg">
          <p>
            हजुरको व्यवसायको आवश्यकता अनुसारको सेवा पाउदिनकि भन्ने चिन्ता अब
            नलिनुहोस, कानुनी खातासंग आबद्द भयसंगै हजुरको एक दक्ष तथा अनुभबी
            Expert assign हुनुहुनेछ जसले हजुरलाई सम्पर्क गरि प्रतक्ष्य रुपमा
            हजुरको आवश्यकता/समस्या बुझी सोहि अनुरुप सल्लाह/सुझाब दिई चाहिने
            सेवाको बृस्तृत जानकारी समेत दिनुहुनेछ | हजुरले आफ्नो अनुकुलता अनुसार
            हाम्रो Expert संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा गर्न
            सक्नुहुने छ |
          </p>
          <p>
            हजुरको व्यवसायको आवश्यकता अनुसारको सेवा पाउदिनकि भन्ने चिन्ता अब
            नलिनुहोस, कानुनी खातासंग आबद्द भयसंगै हजुरको एक दक्ष तथा अनुभबी
            Expert assign हुनुहुनेछ जसले हजुरलाई सम्पर्क गरि प्रतक्ष्य रुपमा
            हजुरको आवश्यकता/समस्या बुझी सोहि अनुरुप सल्लाह/सुझाब दिई चाहिने
            सेवाको बृस्तृत जानकारी समेत दिनुहुनेछ | हजुरले आफ्नो अनुकुलता अनुसार
            हाम्रो Expert संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा गर्न
            सक्नुहुने छ |
          </p>
          <p>
            हजुरको व्यवसायको आवश्यकता अनुसारको सेवा पाउदिनकि भन्ने चिन्ता अब
            नलिनुहोस, कानुनी खातासंग आबद्द भयसंगै हजुरको एक दक्ष तथा अनुभबी
            Expert assign हुनुहुनेछ जसले हजुरलाई सम्पर्क गरि प्रतक्ष्य रुपमा
            हजुरको आवश्यकता/समस्या बुझी सोहि अनुरुप सल्लाह/सुझाब दिई चाहिने
            सेवाको बृस्तृत जानकारी समेत दिनुहुनेछ | हजुरले आफ्नो अनुकुलता अनुसार
            हाम्रो Expert संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा गर्न
            सक्नुहुने छ |
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagerDetails;
