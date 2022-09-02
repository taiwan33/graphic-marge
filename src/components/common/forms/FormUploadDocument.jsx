import React from "react";
import FormInput from "./FormInput";

const FormUploadDocument = () => {
  return (
    <div>
      <p className="text-primary-red text-lg underline flex">
        4. Upload Document
        <span className="text-primary-blue underline text-base">
          <p className=" text-primary-blue flex mx-2 font-semibold">
            (यो ब्यवसाय दर्ताको लागि आवश्यक पर्ने निम्न कागजपत्रहरु
            <p className="text-primary-red px-2"> Upload </p>
            गर्नुहोस ।)
          </p>
        </span>
      </p>
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
          <tr className="border-primary-blue border">
            <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
              1
            </td>
            <td className="p-0">
              <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                कम्पनी दर्ताको प्रमाण पत्र
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
            {/* <td className="p-0">
              <FormInput />
            </td> */}
          </tr>
          <tr className="border-primary-blue border">
            <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
              2
            </td>
            <td className="p-0 ">
              <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                पान/भ्याट दर्ताको प्रमाण पत्र
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
            {/* <td className="p-0">
              <FormInput />
            </td> */}
          </tr>
          <tr className="border-primary-blue border">
            <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
              3
            </td>
            <td className="p-0">
              <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                प्रबन्ध पत्र
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
            <td className="p-0 row-span-4">
              कम्पनी दर्ता गर्दा हामी मार्फत गरेको भएमा यी काजगपत्रहरुको स्क्यान
              कपी हामी संगै हुने भएकोले यसमा अपलोड गर्नु पर्दैन ।
            </td>
          </tr>
          <tr className="border-primary-blue border">
            <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
              4
            </td>
            <td className="p-0">
              <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                नियमावली
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
          </tr>
          <tr className="border-primary-blue border">
            <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
              5
            </td>
            <td className="p-0">
              <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                शेयरलगत दर्ता किताब
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
              शेयर लगत निकाल्ने सम्बन्धि काम हामी मार्फत गरेको भएमा यसमा अपलोड
              गर्नु पर्दैन ।
            </td>
          </tr>
          <tr className="border-primary-blue border">
            <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
              6
            </td>
            <td className="p-0">
              <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                गत आ.व. को कर चुक्ता प्रमाण पत्र
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
              कर चुक्ता सम्बन्धि काम हामी मार्फत गरेको भएमा यसमा अपलोड गर्नु
              पर्दैन ।
            </td>
          </tr>
          <tr className="border-primary-blue border">
            <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
              7
            </td>
            <td className="p-0 flex justify-between">
              <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                गत आ.व. को कम्पनी अध्यावधिक गरेको पत्र
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
              कम्पनी अध्यावधिकको काम हामी मार्फत गरेको भएमा यसमा अपलोड गर्नु
              पर्दैन ।
            </td>
          </tr>{" "}
          <tr className="border-primary-blue border">
            <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
              8
            </td>
            <td className="p-0">
              <p className="border-primary-blue text-primary-blue font-semibold m-0 h-[54px] w-full border-r py-3 px-3 outline-none">
                अन्य........................
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FormUploadDocument;
