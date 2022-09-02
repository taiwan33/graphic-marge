import React from "react";

const FormOtherDetails = () => {
  return (
    <div className="mt-5">
      <div className="mt-5">
        <div className="border-primary-blue max-w-3xl border font-bold">
          <div className="border-primary-blue flex flex-col border-b md:flex-row">
            <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
              कम्पनी रहने ठेगाना
            </p>
            <input
              type="text"
              className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
            />
          </div>
          <div className="border-primary-blue flex flex-col border-b md:flex-row">
            <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
              सम्बन्धित ब्यक्तीको नाम
            </p>
            <input
              type="text"
              className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
            />
          </div>
          <div className="border-primary-blue flex flex-col border-b md:flex-row">
            <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
              सम्बन्धित ब्यक्तीको सम्पर्क न
            </p>
            <input
              type="number"
              className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
            />
          </div>
          <div className="border-primary-blue flex flex-col border-b md:flex-row">
            <p className="text-primary-red px-5 py-2 sm:!w-[300px]">
              कम्पनीको प्रकार
            </p>
            <div className="border-primary-blue flex w-full items-center gap-5 border-t py-2 pl-2 md:border-l md:!py-0">
              <div className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border-l p-1 text-white">
                <label htmlFor="">एकल</label>
                <input type="radio" name="radio-btn" id="" />
              </div>
              <div className="border-primary-blue bg-primary-red rounded-full border-l p-1 text-white">
                <label htmlFor="">बहुल</label>
                <input type="radio" name="radio-btn" id="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="">
              <div className="border-primary-blue flex flex-col border-b md:flex-row">
                <p className="text-primary-red px-5 py-2 sm:!w-[355px]">
                  जम्मा शेयर सदस्य संख्या
                </p>
                <input
                  type="number"
                  className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                />
              </div>
              <div className="border-primary-blue flex flex-col border-b md:flex-row">
                <p className="text-primary-red px-5 py-2 sm:!w-[355px]">
                  अधिकृत पुँजी
                </p>
                <input
                  type="number"
                  className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                />
              </div>
              <div className="border-primary-blue flex flex-col md:flex-row">
                <p className="text-primary-red px-5 py-2 sm:!w-[355px]">
                  जारी तथा चुक्ता पुँजी
                </p>
                <input
                  type="number"
                  className="border-primary-blue w-full border-t py-2 pl-3 outline-none md:border-l"
                />
              </div>
            </div>
            <div className="border-primary-blue text-primary-blue grid place-content-center bg-pink-100 py-5 text-center md:border-l">
              <p className="w-56">
                शेयर सदस्य तथा पुँजी आधारमा तपाईको जम्मा लाग्ने रकम
                <span className="text-primary-red text-xl">रु.३०,००००।–</span>
                मात्र
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormOtherDetails;
