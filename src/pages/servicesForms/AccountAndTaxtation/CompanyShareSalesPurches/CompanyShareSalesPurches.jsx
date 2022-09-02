import React from "react";
import FormButtom from "../../../../components/common/forms/FormButtom";
import FormPayment from "../../../../components/common/forms/FormPayment";
import { upload_document, upload_document_v2 } from "./CompanyShareSalesPurche";

const CompanyShareSalesPurches = () => {
  return (
    <div>
      <form className="px-2">
        <p className="text-primary-red font-Rakkas mt-7 text-center text-xl font-semibold tracking-wide underline md:!text-2xl">
          Company Share Sales Purchase Form
        </p>
        <tr className="flex justify-between">
          <tr className=" flex space-x-6 text-primary-red text-base font-bold sm:text-lg">
            <td className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
              <label htmlFor="">पहिले नै हामीसंग आवद्ध भएको कम्पनी</label>
              <input type="radio" name="radio-btn" id="" />
            </td>
            <td className="border-primary-blue bg-primary-red flex items-center justify-center gap-1 rounded-full border p-1 text-white">
              <label htmlFor="">नयाँ कम्पनी </label>
              <input type="radio" name="radio-btn" id="" />
            </td>
          </tr>
          <p className="text-primary-red flex items-center">
            Firm No.
            <p className=" text-primary-blue"> 1234</p>
          </p>
        </tr>
        <div className="flex justify-between">
          <p className="text-primary-red text-lg underline">
            1. Business Name & Other Details
          </p>
        </div>

        {/* company name and other details */}
        <div className="flex-col flex md:flex-row flex-wrap">
          <div className="flex flex-wrap border-2 border-primary-blue">
            <p className="text-primary-red flex-nowrap items-center shrink-0 flex font-bold text-base">
              कम्पनी वा ब्यवसायको नाम:
            </p>
            <input className="py-2" type="search" placeholder="Search" />
          </div>
          <div className="flex flex-wrap w-fit border-2 border-primary-blue">
            <p className="text-primary-red flex items-center font-bold text-base">
              ठेगाना :
            </p>
            <input className=" " type="" placeholder="" />
          </div>
          <div className="flex flex-wrap w-fit border-2 border-primary-blue">
            <p className="text-primary-red flex items-center font-bold text-base">
              स. ब्यक्तिको नाम :
            </p>
            <input className=" " type="text" placeholder="" />
          </div>
          <div className="flex flex-wrap w-fit border-2 border-primary-blue">
            <p className="text-primary-red flex items-center font-bold text-base">
              सम्पर्क नं. :
            </p>
            <input className=" " type="text" placeholder="" />
          </div>
          <div className="flex flex-wrap w-fit border-2 items-center border-primary-blue">
            <p className="text-primary-red font-bold text-base">
              शेयर सदस्य संख्या :
            </p>
            <input className="py-2" type="text" placeholder="" />
          </div>
        </div>
        {/* compnay name and other details close */}

        <div className="border-2 bg-pink-100 border-primary-blue mt-3">
          <p className="text-primary-blue mt-0 text-lg font-semibold leading-10 text-center">
            शेयर खरिद गर्ने सदस्यहरुको संख्याको आधारमा शेयर खरिद बिक्रीको काम
            गर्दा तपाईको जम्मा लाग्ने रकम रु.१५,०००।– मात्र ।
          </p>
        </div>

        {/* upload documents open */}
        <div className="text-primary-red text-lg underline mt-4">
          2. Upload Document
          <span className="text-primary-blue underline">
            (शेयर लगत निकाल्नको लागि आवश्यक पर्ने निम्न कागजपत्रहरु ग्उयिबम
            गर्नुहोस ।)
          </span>
        </div>

        <table>
          <thead>
            <tr>
              <td className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                S. N.
              </td>
              <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                Document Name
              </td>
              <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                Action
              </td>
              <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                Remarks
              </td>
            </tr>
          </thead>
          <tbody>
            {upload_document.map((item, index) => {
              return (
                <tr className="border-primary-blue border">
                  <td className="text-primary-red border-primary-blue border-r  text-center font-semibold">
                    {item.sn}
                  </td>
                  <td className="p-0">
                    <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                      {item.ip1}
                      <button className="bg-primary-blue text-white rounded-xl ml-3 px-2">
                        Upload
                      </button>
                    </p>
                  </td>
                  <td className="p-0">
                    <div className="border-primary-blue text-white m-0 h-[54px] w-full border-r py-3 px-3 outline-none space-x-2">
                      <button className="bg-primary-green rounded-xl px-2 ">
                        view
                      </button>
                      <button className="bg-primary-red rounded-xl px-2">
                        Delete
                      </button>
                    </div>
                  </td>
                  <td className="p-0">
                    <div className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none space-x-2">
                      {item.remark}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* upload documents close */}

        {/* <FormBranch /> */}
        <FormButtom />

        {/* new company for 3 months */}
        <div className="mt-4">
          <div className="flex-col flex md:flex-row flex-wrap">
            <div className="flex flex-1  border items-center m-0 px-2 border-primary-blue">
              <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                कम्पनी नाम :
              </label>
              <input
                type="text"
                placeholder=" "
                name="company_name"
                className=" text-primary-blue w-[60%] m-0  py-3 px-3 outline-none"
              />
            </div>
            <div className="flex flex-1 flex-wrap w-fit  border md:border-l-0 px-2 items-center border-primary-blue">
              <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                कम्पनीको ठेगाना :
              </label>
              <input
                type="text"
                placeholder=""
                name="address"
                className=" text-primary-blue w-[60%] flex-shrink-0 m-0  py-3 px-3 outline-none"
              />
            </div>
          </div>
          <div className="flex-col flex md:flex-row flex-wrap">
            <div className="flex flex-1  border items-center m-0 px-2 border-primary-blue">
              <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                सम्बन्धित ब्यक्तीको नाम :
              </label>
              <input
                type="text"
                placeholder=" "
                name="company_name"
                className=" text-primary-blue w-[60%] m-0  py-3 px-3 outline-none"
              />
            </div>
            <div className="flex flex-1 flex-wrap w-fit  border md:border-l-0 px-2 items-center border-primary-blue">
              <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                कम्पनीको ठेगाना :
              </label>
              <input
                type="text"
                placeholder=""
                name="address"
                className=" text-primary-blue w-[60%] flex-shrink-0 m-0  py-3 px-3 outline-none"
              />
            </div>
          </div>
          <div className="flex-col flex md:flex-row flex-wrap">
            <div className="flex flex-1  border items-center m-0 px-2 border-primary-blue">
              <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                सम्बन्धित व्यक्तीको सम्पर्क नं.:
              </label>
              <input
                type="text"
                placeholder=" "
                name="company_name"
                className=" text-primary-blue w-[60%] m-0  py-3 px-3 outline-none"
              />
            </div>
            <div className="flex flex-1 flex-wrap w-fit  border md:border-l-0 px-2 items-center border-primary-blue">
              <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                सम्‍बन्धीत व्यक्तीको ठेगाना :
              </label>
              <input
                type="text"
                placeholder=""
                name="address"
                className=" text-primary-blue w-[60%] flex-shrink-0 m-0  py-3 px-3 outline-none"
              />
            </div>
          </div>
          <div className="flex-col flex md:flex-row flex-wrap">
            <div className="flex flex-1  border items-center m-0 px-2 border-primary-blue">
              <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                कम्पनीको Username:
              </label>
              <input
                type="text"
                placeholder=" "
                name="company_name"
                className=" text-primary-blue w-[60%] m-0  py-3 px-3 outline-none"
              />
            </div>
            <div className="flex flex-1 flex-wrap w-fit  border md:border-l-0 px-2 items-center border-primary-blue">
              <label className="border-primary-blue flex-shrink-0 border-l-0 text-primary-red  text-lg font-bold">
                कम्पनीको Password:
              </label>
              <input
                type="text"
                placeholder=""
                name="address"
                className=" text-primary-blue w-[60%] flex-shrink-0 m-0  py-3 px-3 outline-none"
              />
            </div>
          </div>

          {/* first one clicked */}
          <div className="border-2 bg-pink-100 border-primary-blue mt-3">
            <p className="text-primary-blue mt-0 text-lg font-semibold leading-10 text-center">
              शेयर सदस्यहरुको संख्याको आधारमा कम्पनीको शेयर खरिद बिक्री सम्बन्धि
              काम गर्दा तपाईको जम्मा लाग्ने रकम रु.१५,०००।– मात्र
            </p>
          </div>
          {/* first one clicked closed*/}

          {/* note */}
          <div className=" border-primary-blue mt-3">
            <p className="flex text-primary-blue mt-0 font-semibold leading-10 text-center">
              <p className=" text-primary-red mr-2">नोट :</p> माथी उल्लेखित रकम
              ७ जना सम्म शेयर सदस्यहरु भएमा मात्र लागु हुनेछ, यदि ७ जना भन्दा
              बढि भएमा प्रती सदस्य रु.५००।–को दरले थप शुल्क बृद्धि हुदै जानेछ ।
            </p>
          </div>
        </div>
        {/*note closed */}
        {/* new company for 3 months close */}

        <div className=" border-primary-blue mt-3">
          <p className="flex items-center text-primary-blue mt-0 font-semibold leading-10 text-center">
            <p className=" text-primary-red mr-2 text-lg underline">
              2. Upload Document
            </p>{" "}
            माथी (३ महिने विवरण पेश गर्नको लागि आवश्यक पर्ने निम्न कागजपत्रहरु{" "}
            <p className=" text-primary-red px-2 underline">Upload</p> गर्नुहोस
            ।
          </p>
        </div>
        {/* upload documents open */}

        <table>
          <thead>
            <tr>
              <td className="border-primary-blue text-primary-red border px-10 text-lg font-bold">
                S. N.
              </td>
              <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                Document Name
              </td>
              <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                Action
              </td>
              <td className="border-primary-blue text-primary-red border px-20 text-base font-bold sm:text-lg">
                Remarks
              </td>
            </tr>
          </thead>
          <tbody>
            {upload_document_v2.map((item, index) => {
              return (
                <tr className="border-primary-blue border">
                  <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                    {item.sn}
                  </td>
                  <td className="p-0">
                    <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                      {item.ip1}
                      <button className="bg-primary-blue text-white rounded-xl ml-3 px-2">
                        Upload
                      </button>
                    </p>
                  </td>
                  <td className="p-0">
                    <div className="border-primary-blue text-white m-0 h-[54px] w-full border-r py-3 px-3 outline-none space-x-2">
                      <button className="bg-primary-green rounded-xl px-2 ">
                        view
                      </button>
                      <button className="bg-primary-red rounded-xl px-2">
                        Delete
                      </button>
                    </div>
                  </td>
                  <td className="p-0">
                    <div className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none space-x-2">
                      {item.remark}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* upload documents close */}

        {/* <FormBranch /> */}
        <FormButtom />
        <FormPayment />
      </form>
    </div>
  );
};

export default CompanyShareSalesPurches;
