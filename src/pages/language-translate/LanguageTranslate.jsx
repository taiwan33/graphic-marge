import React from "react";
import BackButton from "../../components/common/backbutton/BackButton";
import Images from "../../media/images";

const LanguageTranslate = () => {
  return (
    <div>
      <div className="date mt-10 md:mt-16 w-padding">
        <div className="text-center">
          <h1 className="title-style">Language Translate</h1>
          <div className="mt-4">
            <img src={Images.title_border} alt="" className="mx-auto" />
          </div>
        </div>
        <header className="max-w mb-20 mt-10 gap-4 lg:flex">
          <div className="flex-1">
            {/* language translate here */}
            <div className="grid  place-content-center ">
              <iframe
                className="border-4 sm:w-[500px] w-[320px] md:w-[700px] border-primary-red rounded-2xl"
                title="language translate"
                height="800"
                width=""
                src="https://www.easytranslation.app/english/to/nepali/translation"
                border="0"
              ></iframe>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default LanguageTranslate;
