import BackButton from "../../components/common/backbutton/BackButton";
import Images from "../../media/images";

const StaffDetails = () => {
  return (
    <>
      <div className="mx-auto max-w-[900px] text-center">
        <BackButton />
        <div className="text-center">
          <h1 className="title-style !font-Yatra">कर्मचारिको बिबरन</h1>
          <div className="mt-4">
            <img src="./images/title-border.png" alt="" className="mx-auto" />
          </div>
        </div>
        <div className="mt-10 items-center justify-center gap-20 md:flex">
          <div className="mb-10 flex justify-center">
            <img
              alt=""
              src={Images.user_img}
              className="border-primary-blue h-auto w-auto rounded-3xl border-2 object-cover shadow-lg"
            />
          </div>
          <div className="font-Acme grid place-content-center space-y-5 text-left">
            <h1 className="text-primary-red font-bold md:text-xl">
              Name : <span className="text-primary-blue">Rajan Ghimire</span>
            </h1>
            <h1 className="text-primary-red font-bold md:text-xl">
              Position :
              <span className="text-primary-blue">Managing Director</span>
            </h1>
            <h1 className="text-primary-red font-bold md:text-xl">
              Address :
              <span className="text-primary-blue">Bharatpur-11, Chitwan</span>
            </h1>
            <h1 className="text-primary-red font-bold md:text-xl">
              Contact : <span className="text-primary-blue">980000000</span>
            </h1>
          </div>
        </div>
        <div className="">
          <div className="text-primary-blue font-Laila mt-3 space-y-4 text-sm leading-7 lg:!text-lg">
            <p>
              हजुरको व्यवसायको आवश्यकता अनुसारको सेवा पाउदिनकि भन्ने चिन्ता अब
              नलिनुहोस, कानुनी खातासंग आबद्द भयसंगै हजुरको एक दक्ष तथा अनुभबी
              Expert assign हुनुहुनेछ जसले हजुरलाई सम्पर्क गरि प्रतक्ष्य रुपमा
              हजुरको आवश्यकता/समस्या बुझी सोहि अनुरुप सल्लाह/सुझाब दिई चाहिने
              सेवाको बृस्तृत जानकारी समेत दिनुहुनेछ | हजुरले आफ्नो अनुकुलता
              अनुसार हाम्रो Expert संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा
              गर्न सक्नुहुने छ |
            </p>
            <p>
              हजुरको व्यवसायको आवश्यकता अनुसारको सेवा पाउदिनकि भन्ने चिन्ता अब
              नलिनुहोस, कानुनी खातासंग आबद्द भयसंगै हजुरको एक दक्ष तथा अनुभबी
              Expert assign हुनुहुनेछ जसले हजुरलाई सम्पर्क गरि प्रतक्ष्य रुपमा
              हजुरको आवश्यकता/समस्या बुझी सोहि अनुरुप सल्लाह/सुझाब दिई चाहिने
              सेवाको बृस्तृत जानकारी समेत दिनुहुनेछ | हजुरले आफ्नो अनुकुलता
              अनुसार हाम्रो Expert संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा
              गर्न सक्नुहुने छ |
            </p>
            <p>
              हजुरको व्यवसायको आवश्यकता अनुसारको सेवा पाउदिनकि भन्ने चिन्ता अब
              नलिनुहोस, कानुनी खातासंग आबद्द भयसंगै हजुरको एक दक्ष तथा अनुभबी
              Expert assign हुनुहुनेछ जसले हजुरलाई सम्पर्क गरि प्रतक्ष्य रुपमा
              हजुरको आवश्यकता/समस्या बुझी सोहि अनुरुप सल्लाह/सुझाब दिई चाहिने
              सेवाको बृस्तृत जानकारी समेत दिनुहुनेछ | हजुरले आफ्नो अनुकुलता
              अनुसार हाम्रो Expert संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा
              गर्न सक्नुहुने छ |
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default StaffDetails;
