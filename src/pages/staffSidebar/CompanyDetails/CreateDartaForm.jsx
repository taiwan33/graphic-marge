import React from "react";

const CreateDartaForm = () => {
  return (
    <div className="">
      <h1 className="text-primary-red mt-2 text-center text-3xl font-bold lg:!mt-6">
        Company Darta Complete Form
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
                Letter Given Date :
              </label>
              <input type="text" className="w-full py-4 px-2 outline-none" />
            </div>
            {/* name */}
            <div className="border-primary-blue flex items-center border border-l-0 border-r-0 border-b-0">
              <label htmlFor="" className="text-primary-red flex-shrink-0 pl-2">
                Redg No :
              </label>
              <input type="text" className="w-full py-4 px-2 outline-none" />
            </div>
            <div className="border-primary-blue flex items-center border border-l-0 border-r-0 border-b-0">
              <label htmlFor="" className="text-primary-red flex-shrink-0 pl-2">
                चिठी बुझ्ने व्यक्तिको नाम :
              </label>
              <input type="text" className="w-full py-4 px-2 outline-none" />
            </div>
            {/* mobile no */}
            <div className="border-primary-blue flex items-center border border-l-0 border-r-0 border-b-0">
              <label htmlFor="" className="text-primary-red flex-shrink-0 pl-2">
                चिठी बुझ्ने व्यक्तिको सम्पर्क नं. :
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
            <div className="border-primary-blue flex items-center gap-3 border border-t-0">
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="text-primary-red flex-shrink-0 pl-2"
                >
                  PAN No :
                </label>
                <input type="text" className="w-full py-4 px-2 outline-none" />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="text-primary-red flex-shrink-0 pl-2"
                >
                  कम्पनी अध्यक्षको नाम :
                </label>
                <input type="text" className="w-full py-4 px-2 outline-none" />
              </div>
            </div>
            {/* reason */}
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
            {/*  */}
            <div className="border-primary-blue flex items-center gap-5 border border-t-0 border-r-0 pl-2">
              <div className="flex items-center gap-5">
                <label htmlFor="" className="text-primary-red">
                  अन्य सञ्चालकहरु पनि उपस्थित भएमा
                </label>
                <span className="text-primary-blue flex-shrink-0">१. श्री</span>
                <input
                  type="text"
                  className="py-4 outline-none"
                  name=""
                  id=""
                />
                <span className="text-primary-blue flex-shrink-0">२. श्री</span>
                <input
                  type="text"
                  className="py-4 outline-none"
                  name=""
                  id=""
                />
              </div>
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
            className="bg-primary-red ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Submit
          </a>
          <a
            href=""
            className="bg-primary-blue ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Print
          </a>
          <a
            href=""
            className="bg-primary-green ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Upload
          </a>
          <a
            href=""
            className="bg-primary-red ml-10 mt-5 inline-flex gap-2 rounded-md px-5 py-3 font-bold text-white"
          >
            Approve
          </a>
        </div>
      </div>
      {/* print page */}
      <div className="overflow-scroll p-20">
        <div className="flex items-center justify-between">
          <div className="flex">
            <img
              src="../../images/logo.png"
              className="h-20 w-20 object-cover"
              alt=""
            />
            <sup>प्रा.लि.न. २१०४१९/०७५/०७६</sup>
          </div>
          <div className="">
            <p className="text-4xl font-bold">ग्राफिक मार्ग प्रा. लि.</p>
            <p className="text-center font-bold">भरतपुर ११, चितवन</p>
          </div>
          <sup>पान दर्ता नं. ६०६७५४६९९</sup>
        </div>
        <div className="mt-2 space-y-1">
          <hr className="h-0.5 bg-black" />
          <hr className="h-0.5 bg-black" />
        </div>
        <div className="mt-10">
          <div className="flex justify-between">
            <div className="">
              <p>श्री. ..................... ज्यु</p>
              <p>लगायत सम्पूर्ण शेयर सदस्यज्यूहरु</p>
              <p>.......................... प्रा. लि.</p>
            </div>
            <p>मिति : ..............</p>
          </div>
          <p className="mt-10 text-center font-bold underline">
            विषय:- जानकारी सम्बन्धमा ।
          </p>
          <p className="mt-10 indent-20">
            उपरोक्त विषय सम्बन्धमा यस
            <span className="font-bold">ग्राफिक मार्ग प्रा. लि.</span> को
            सहजीकरणमार्फत कम्पनी रजिष्ट्रारको कायालय त्रिपुरेश्वर काठमाण्डीबाट
            तपाईहरुको नाममा दर्ता नं
            <span>.............</span>र पान नं
            <span>..........</span> रहेको <span>........</span>
            प्रा. लि. नामक कम्पनीको पहिलो चरणको व्यवसाय दर्ता कायसंग सम्बन्धीत
            काम सम्पन्न भएकोमा तपाईको व्यवसायको सम्वृद्धि तथा उत्तरोत्तर
            प्रगतिको कामना गर्ने हार्दिक मंगलमय शुभकामना व्यक्त गर्दछौं।
          </p>
          <p className="indent-20">
            कम्पनी दर्ता गरिसकेपछि तपसिल अनुसारका कामहरु समय सिमा भित्र सम्पन्न
            गर्नुपर्ने हुन्छ । उक्त कार्यहरुको लागि हाम्रो यस
            <span className="font-bold">ग्राफिक मार्ग प्रा.लि.</span>को अफिसबाट
            समय समयमा फोन मार्फत जानकारी गराई बोलाईनेछ । तर कुनै कारणवस फोन
            नलागेमा, फोन रिसिभ नभएमा बोलाएको समयमा सञ्चालकहरु आउन नसकेमा भनिएका
            कार्यहरु सञ्चालकले समयसमा भित्र गर्न नसकेमा तथा सञ्चालकहरुले दस्तखत
            गर्नुपर्ने कागजपत्रहरुमा समयसमा भित्र गर्न नसकी निर्धारित समय भित्र
            नबुझाईएमा भारी जरिवाना तथा हर्जना लाग्न सक्छ । यसरी तपाईहरु कम्पनीका
            सल्चालकहरुको कारणले गर्दा अनावश्यक हर्जना तथा जरिवाना लाग्ने भएमा
            स्वयम कम्पनीका सञ्चालहरुको नै तिन नुवायित्व हुनेछ । तसर्थ यदि कुनै
            कारणवस प्राविधीक करणले गर्दा हाम्रो अफिसबाट फोन तथा म्यासेज मार्फत
            जानकारी प्राप्त हुन नसकेमा यसै जानकारी पत्रलाई आधिकारीक मानी कम्पनी
            दर्ता पछि गर्नुपर्ने कामहरु निर्धारित समय भित्र गर्नुहुन हार्दिक
            अनुरोध गर्दछौ ।
          </p>
          <p className="mt-10 font-bold underline">तपसिल</p>
          <ol className="list-decimal">
            <li>
              कम्पनी दर्ता गरेको मितीने ३ महिना भित्रमा नेपाल राष्ट्र बैंकबाट
              स्विकृत प्राप्त कुनै एउटा वित्तिय संस्था (बैंक) मा कम्पनीको नाममा
              खाता खोली सञ्चालकहरुले कम्पनी दर्ता गर्दा कवल गरेको रकम डिपोजिट
              गरी बैंक भौचर र बैंक स्टेटमेन्ट लिएर आई सुरुको जानकारी कागज तयार
              पारी कम्पनी रजिष्टारको कार्यालयमा बुझाउनुपर्दछ ।
            </li>
            <li>
              कम्पनी दर्ता भएको पहिलो वर्ष, वर्ता भएको मितीले १ वर्ष भित्र वा
              अर्को आ.व. को पौष मसान्त भित्रमा (पहिले जुन आउछ वार्षिक विवरण
              नविकरण) पेश गर्नुपर्दछ ।
            </li>
            <li>
              कम्पनी दर्ता भएको दोस्रो वर्षबाट प्रत्येक वर्षको पौष मसान्त
              भित्रमा वार्षिक विवरण (नविकरण पेश गर्नुपर्दछ ।
            </li>
            <li>
              कम्पनीमा अन्य कुनै क्रियाकलापहरु सञ्चालन गर्नुपर्ने भएमा वा गरेमा
              तत्कालै कम्पनी रजिष्ट्रारको कार्यालयमा जानकारी दिई स्विकृती लिएर
              मात्र गर्नुपर्दछ नत्र उक्त कार्य आधिकारीक वा वैधानिक हुदैन (जस्तै
              शेयर खरिदबिक्री, नामसारी, • ठाउँसारी, शेयर लगत, पुँजी वृद्धि लगायत
              सम्पूर्ण वियाकलापहरु)
            </li>
            <li>
              भ्याटमा बर्ता भएका कम्पनीहरुले प्रत्येक महिनाको २५ गते भित्रमा
              अघिल्लो महिनाको कारोबार आन्तरिक राजश्व कार्यालयमा पेश गर्नु पर्दछ
              र भ्याट तिर्नुपर्ने भएमा पनि सोहि मिती भित्र भुक्तानी
              गरिसक्नुपर्दछ ।
            </li>
            <li>
              प्रत्येक कम्पनीले आफ्नो कार्यालको सबैले देख्ने ठाउँमा भ्याटमा
              दर्ता भएका कम्पनीले हरियोमा सेतोल र पानमा मात्र दर्ता भएकाले
              पहेलोमा कालो मसीले (10cmx30cm) को साईजमा करपाटी (Tax Name Plate)
              बनाएर राख्नुपर्दछ ।
            </li>
            <li>
              प्रत्येक कम्पनीले आर्थिक वर्ष समाप्त भएको ३ महिना भित्र वा
              प्रत्येक वर्षको असोज मसान्त भित्रमा अडिट रिपॉट तयार गरि सम्बन्धित
              आन्तरिक राजश्व कार्यालयमा आय विवरण पेश गरि कर चुक्ता लिनुपर्दछ ।
            </li>
          </ol>
          <div className="mt-10 flex justify-between">
            <div className="w-[400px] space-y-3 border border-gray-700 p-3">
              <p className="underline">पत्र बुझिलिनेको दस्तखत</p>
              <p>नाम :</p>
              <p>पद :</p>
              <p>कम्पनीको छाप :</p>
            </div>
            <div className="w-[300px] space-y-2 text-left">
              <p>Sign :</p>
              <p>Staff Name:</p>
              <p>Post:</p>
            </div>
          </div>
        </div>
      </div>
      {/* print page 2 */}
      <div className="overflow-scroll p-20">
        <div className="">
          <h1 className="text-center font-bold underline">
            कम्पनी दर्ता पछि गर्नुपर्ने कामहरुकोबारेमा जानकारी पत्र बुझिलिएको
            भरपाई
          </h1>
          <p className="mt-5 indent-[40px]">
            कम्पनी दर्ता पछि गर्नुपर्ने सम्पूर्ण काम र समयावधिको बारेमा कम्पनी
            दर्ता गर्दा सहजीकरण गरिदिने त्यस ग्राफिक मार्ग प्रा. लि. ले हाम्रो
            कम्पनीको नाममा दिईएको जानकारी पत्र मार्फत पुर्णपाठ सहित जानकारी
            प्राप्त गर्यो र उक्त पत्रमा लेखिएको जानकारीमुलक शन्देस सहितका
            बुँदाहरु पनि अध्ययन गयौं ।
          </p>
          <p className="indent-[40px]">
            अब सोहि अनुसार गर्नुपर्ने कामहरु निर्धारित समय भित्र सम्पन्न गर्नको
            लागि समयमै आवश्यक कागज पत्रहरु लिएर सहिछाप गरी अपडेट गर्नको लागि
            आउनेछौ । यदि कम्पनी दर्ता पछि गर्नुपर्ने कुनै कामहरु समय सिमा हाम्रो
            कारणले गर्दा गर्न नसकिएमा बोलाईएको समयमा उपस्थित नभएमा हाम्रो
            तर्फबाट दिनुपर्ने कागजपत्रहरु समयमा दिन नसकेमा अउनुपर्ने वा
            दिनुपर्ने कागजपत्रहरु अन्तिम समयमा दिएर कुनै प्राविधिक कारणले गर्दा
            अपडेट नभएर कुनै किसिमको दायित्व बहन गर्नुपर्ने भएमा र जरिवाना तथा
            हर्जनाहरु तिर्नुपर्ने भएमा सो सम्बन्धी सम्पूर्ण दायित्व बहन गर्ने
            जिम्मेवारी हाम्रो कम्पनी तथा हामी कम्पनीका सञ्चालकहरुको हुनेछ भनि
            सहि सलामद होस हवासमा रहि कम्पनी दर्ता गर्दा सहजिकरण गरिदिने यस
            ग्राफिक मार्ग प्रा. लि. को कार्यालयमा बसि सहिछाप गरि एक प्रति हामी
            कम्पनी सञ्चालकहरुले बुझिलियौ र १ प्रति प्रतिलिपी यसै कम्पनीमा
            अभिलेखको लागि छोडिदियौं ।
          </p>
        </div>
        <div className="flex justify-end">
          <div className="w-[300px] space-y-2 text-left">
            <p className="font-bold">जानकारी पत्र बुझिलिनेको दस्तखत</p>
            <p>नाम :</p>
            <p>पद:</p>
            <p>सम्पर्क नं.:</p>
            <p>कम्पनीको छाप:</p>
          </div>
        </div>
        <div className="mt-10 w-[800px]">
          <p className="underline">
            यदि कम्पनीका अन्य सञ्चालकहरु पनि उपस्थित भएमा
          </p>
          <table className="w-full border border-gray-700">
            <tbody>
              <tr className="border border-gray-700">
                <th className="w-[50px] border border-gray-700">क्र.स.</th>
                <th className="border border-gray-700">नाम, घर</th>
                <th className="border border-gray-700">पद</th>
                <th className="border border-gray-700">दस्तखत</th>
              </tr>
              <tr>
                <td className="border border-gray-700">१</td>
                <td className="border border-gray-700" />
                <td className="border border-gray-700" />
                <td className="border border-gray-700" />
              </tr>
              <tr>
                <td className="border border-gray-700">२</td>
                <td className="border border-gray-700" />
                <td className="border border-gray-700" />
                <td className="border border-gray-700" />
              </tr>
              <tr>
                <td className="border border-gray-700">३</td>
                <td className="border border-gray-700" />
                <td className="border border-gray-700" />
                <td className="border border-gray-700" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateDartaForm;
