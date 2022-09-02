import React from "react";

const CreatePuForm = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Create PU Given Form
      </h1>
      <div className="">
        <img
          src="../../images/title-border.png"
          alt=""
          className="mx-auto mt-4"
        />
      </div>
      <div className="p-3 md:p-10">
        <div className="border-primary-blue grid grid-cols-1 border md:grid-cols-3">
          {/* left items */}
          <div className="col-span-1">
            {/* date */}
            <div className="flex items-center">
              <label htmlFor="" className="text-primary-red flex-shrink-0 pl-2">
                Date :
              </label>
              <input type="text" className="w-full py-4 px-2 outline-none" />
            </div>
            {/* name */}
            <div className="border-primary-blue flex items-center border border-l-0 border-r-0 border-b-0">
              <label htmlFor="" className="text-primary-red flex-shrink-0 pl-2">
                पासवर्ड लिने व्यक्तिको नाम :
              </label>
              <input type="text" className="w-full py-4 px-2 outline-none" />
            </div>
            {/* mobile no */}
            <div className="border-primary-blue flex items-center border border-l-0 border-r-0 border-b-0">
              <label htmlFor="" className="text-primary-red flex-shrink-0 pl-2">
                मोबाईल नं :
              </label>
              <input type="text" className="w-full py-4 px-2 outline-none" />
            </div>
          </div>
          {/* right items */}
          <div className="col-span-2">
            {/* company name and address*/}
            <div className="border-primary-blue flex items-center gap-3 border border-t-0">
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="text-primary-red flex-shrink-0 pl-2"
                >
                  कम्पनीको नाम :
                </label>
                <input type="text" className="w-full py-4 px-2 outline-none" />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="text-primary-red flex-shrink-0 pl-2"
                >
                  कम्पनीको ठेगाना :
                </label>
                <input type="text" className="w-full py-4 px-2 outline-none" />
              </div>
            </div>
            {/*relation with company  */}
            <div className="border-primary-blue flex items-center gap-5 border border-t-0 border-r-0 py-4">
              <label htmlFor="" className="text-primary-red flex-shrink-0 pl-2">
                कम्पनीसंगको सम्बन्ध :
              </label>
              <div className="flex items-center gap-2">
                <label htmlFor="" className="text-primary-blue">
                  अध्यक्ष{" "}
                </label>
                <input type="radio" name="" className="h-4 w-4" id="" />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="" className="text-primary-blue">
                  सञ्चालक/
                </label>
                <input type="radio" name="" className="h-4 w-4" id="" />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="" className="text-primary-blue">
                  कर्मचारी
                </label>
                <input type="radio" name="" className="h-4 w-4" id="" />
              </div>
            </div>
            {/* reason */}
            <div className="border-primary-blue flex items-center border border-t-0 border-r-0 border-b-0">
              <label htmlFor="" className="text-primary-red flex-shrink-0 pl-2">
                पासवर्ड लिनुको कारण :
              </label>
              <input type="text" className="w-full py-4 px-2 outline-none" />
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="flex items-center justify-end">
          <a
            href=""
            className="bg-primary-green ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Save
          </a>
          <a
            href=""
            className="bg-primary-blue ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Print
          </a>
          <a
            href=""
            className="bg-primary-blue ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Save
          </a>
          <a
            href=""
            className="bg-primary-blue ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Upload
          </a>
          <a
            href=""
            className="bg-primary-red ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Save
          </a>
        </div>
      </div>
      {/* print page */}
      <div className="p-20">
        <p className="text-right">
          मिति: <span> ................</span>
        </p>
        <div className="font-bold">
          <p>श्रीमान कार्यालय प्रमुखज्यू</p>
          <p>ग्राफिक मार्ग प्रा. लि.</p>
          <p>भरतपुर ११ चितवन</p>
        </div>
        <p className="mt-10 text-center font-bold underline">
          विषय: कम्पनीको Username र Password उपलब्ध गराईदिनेबारे ।
        </p>
        <p className="mt-10 indent-10">
          उपरोक्त विषय सम्बन्धमा त्यस ग्राफिक मार्ग प्रा.लि. मार्फत दर्ता भएको
          हाम्रो यस प्रा. लि. नामक कम्पनीको कम्पनी रजिष्ट्रार कार्यालय सम्बन्धी
          सम्पूर्ण कामहरु अन्य फर्म मार्फत गराउनुपर्ने भएको हुदा हाम्रो यस
          कम्पनीको Username र Password उपलब्ध गराईदिनुहुन अनुरोध गर्दछौं ।
        </p>
        <p className="mt-2">
          नोट : यस कम्पनीको Username र Password हामीले लगिसकेपछि कुनै पनि
          किसिमको अनाधिकृत इंन्ट्रिहरु भएर आर्थीक दायित्वहरु व्यहोर्नुपर्ने भएमा
          हामी यस कम्पनीका सञ्चालहरुको नै जिम्मेवारी हुनेछौं ।
        </p>
        <div className="flex justify-end">
          <div className="mt-10 w-[400px] space-y-3 text-left">
            <p>दिवेदकको दस्तखत :</p>
            <p>नाम :</p>
            <p>ठेगाना :</p>
            <p>पद :</p>
            <p>सम्पर्क नं :</p>
            <p>कम्पनीको छाप :</p>
          </div>
        </div>
      </div>
      {/* print page 2 */}
      <div className="p-20">
        <p className="text-center font-bold underline">
          कम्पनीको Username र Password बुझिलिएको भरपाई तथा सनाखत
        </p>
        <p className="mt-10 leading-8">
          लिखितम <span>........................</span> प्रा. लि. कम्पनीको
          सञ्चालक / अध्यक्ष प्रतिनिधी श्री को
          <span>.................</span> छोरा/छोरी म श्री
          <span>...................</span>
          ले यस ग्राफिक मार्ग प्रा. लि. बाट हाम्रो प्रा. लि. नामक कम्पनीको
          Username र Password बुझिलिएको कुरा सहि साँचो हो । यस ग्राफिक मार्ग
          प्रा. लि. मार्फत कम्पनी दर्ता गर्ने देखि लिएर हाल सम्म भए गरेका
          सम्पूर्ण कामहरु हुनुपर्ने समय भित्र तथा हामीले डकुमेन्टहरु उपलब्ध गराई
          गर्नुपर्ने भनेको समय भित्र सकुसल सम्पन्न भएका छन् । यदि कुनै कामहरु
          हुनुपर्ने समय सिमा भित्र नभएको भए हाम्रो कमिकमजोरीको कारणले तथा
          बोलाईएको समयमा उपस्थित नभएर वा दिनुपर्ने कागजपत्रहरु हामीलेनै समयमा
          नदिएर ढिला सुस्ती भएको तथा अन्य कुनै प्राविधिक कारणले गर्दा अपडेट नभएर
          कुनै किसिमको दायित्व बहन गर्नुपर्ने भएमा, जरिवाना तथा हर्जनाहरु
          तिर्नुपर्ने भएमा सो सम्बन्धी सम्पूर्ण दायित्व वहन गर्ने जिम्मेवारी
          हाम्रो कम्पनी तथा हामी कम्पनीका सञ्चालकहरुको हुनेछ । पछि कहि कतै यस
          कुरा संग सम्बन्धित तिर्नु पर्ने बुझाउनुपर्ने हर्जना तथा जरिवाना होईन
          छैन भन्ने छैनौ । कहि कतै उजुर वाजुर पनि गर्नेछैनौ । यदि भनेमा वा गरेमा
          यसै कागजले बदर गरिदिनु भनि होस हवासमा रही हाम्रो राजीखुसीका साथ यो
          <span className="font-bold">
            कम्पनीको Username र Password बुझिलिएको भरपाई सनाखत
          </span>
          कागजमा सहिछाप गरिदियौ ।
        </p>
        <p className="mt-4">
          <span className="font-bold">नोट</span>: हाम्रो आफ्नो कम्पनीको Username
          र Password हामीले लगिसकेपछि OCR को System मा कुनै पनि किसिमको अनाधिकृत
          ईन्ट्रिहरु भएर आर्थीक दायित्वहरु व्यहोर्नुपर्ने भएमा हामी यस कम्पनीका
          सञ्चालहरुको नै स्वयम् जिम्मेवारी हुनेछौं ।
        </p>
        <div className="grid place-content-center">
          <div className="mt-10 inline-block space-y-3 text-center">
            <p className="">Username र Password को दस्तखत :</p>
            <p className="text-left font-bold">नाम :</p>
            <p className="text-left font-bold">पद :</p>
          </div>
        </div>
        <div className="grid place-content-center">
          <div className="mt-5 h-[300px] w-[400px] border border-gray-700">
            <p className="border border-gray-700 p-2 text-center font-bold">
              औंठाको छाप
            </p>
            <div className="flex h-[86%] justify-evenly">
              <p className="text-center">दाया</p>
              <p className="h-full w-0.5 bg-gray-500" />
              <p className="text-center">बायाँ</p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <div className="w-[450px]">
            <p className="text-right">कम्पनीको छाप :</p>
          </div>
        </div>
        <div className="mt-5 space-y-5">
          <p className="font-bold underline">
            Username र Password लिने कम्पनीको तर्फबाट साँक्षीहरु
          </p>
          <p>
            १) <span>.......................</span>
          </p>
          <p>
            २) <span>.......................</span>
          </p>
          <p className="font-bold underline">
            Username र Password दिने कम्पनीको तर्फबाट साँक्षीहरु
          </p>
          <p>
            १) <span>.......................</span>
          </p>
          <p>
            २) <span>.......................</span>
          </p>
        </div>
        <div className="grid place-content-center">
          <div className="mt-5 flex gap-20 font-bold">
            <p>इति सम्वत् २०</p>
            <p>साल :</p>
            <p>महिना :</p>
            <p>गते रोज :</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePuForm;
