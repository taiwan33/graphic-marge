import React from "react";

const NotRegisteredCompany = () => {
  return (
    <div>
      <p className="text-xs font-semibold">
        यदि हामी संग आबद्ध नभएको नयाँ कम्पनी वा ब्यवसायको काम गर्नुपर्ने भएमा
        निम्न प्रकारको फर्म र तालिका खुल्नेछ ।
      </p>

      <div>
        <table id="tbl_posts">
          <tr>
            <thead>
              <td className="border-primary-blue p-1 text-primary-red border text-base font-bold sm:text-sm">
                कम्पनीको नाम :
                <input className=" focus:outline-none" />
              </td>
              <td className="border-primary-blue p-1 text-primary-red border text-base font-bold sm:text-sm">
                कम्पनीको ठेगाना :
                <input className=" focus:outline-none" />
              </td>
            </thead>
            <thead>
              <td className="border-primary-blue p-1 text-primary-red border text-base font-bold sm:text-sm">
                सम्बन्धित ब्यक्तीको नाम :
                <input className=" focus:outline-none" />
              </td>
              <td className="border-primary-blue p-1 text-primary-red border text-base font-bold sm:text-sm">
                सम्बन्धित ब्यक्तीको ठेगाना :
                <input className=" focus:outline-none" />
              </td>
            </thead>
            <thead>
              <td className="border-primary-blue p-1 text-primary-red border text-base font-bold sm:text-sm">
                सम्बन्धित ब्यक्तीको सम्पर्क नं. :
                <input className=" focus:outline-none" />
              </td>
              <td className="border-primary-blue p-1 text-primary-red border text-base font-bold sm:text-sm">
                शेयर सदस्यहरुको संख्या :
                <input className=" focus:outline-none" />
              </td>
            </thead>
            <thead>
              <td className="border-primary-blue p-1 text-primary-red border text-base font-bold sm:text-sm">
                कम्पनीको Username :
                <input className=" focus:outline-none" />
              </td>
              <td className="border-primary-blue p-1 text-primary-red border text-base font-bold sm:text-sm">
                कम्पनीको Password :
                <input className=" focus:outline-none" />
              </td>
            </thead>
          </tr>
        </table>
      </div>
      {/* <div>
        <table id="tbl_posts">
          <thead>
            <tr>
              <td className="border-primary-blue  text-primary-red border text-lg font-bold">
                क्र. स.
              </td>
              <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                शेयर सदस्यहरुको नाम
              </td>
              <thead>
                <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                  हालको ठेगाना
                </td>
                <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                  शेयर रकम
                </td>
              </thead>
              <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                शेयर सदस्यको नागरिकता
              </td>
              <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                साँक्षीको नाम
              </td>
              <td className="border-primary-blue text-primary-red border text-base font-bold sm:text-lg">
                साँक्षीको ठेगाना
              </td>
              <td className="border-primary-blue text-primary-red border border-r-0 text-base font-bold sm:text-lg">
                साँक्षीको नागरिकता
              </td>
              <td className="border-primary-blue boder border-r border-t px-5" />
            </tr>
          </thead>
          <tbody id="tbl_posts_body">
            <tr id="rec-1" className="border-primary-blue border">
              <td className="text-primary-red border-primary-blue border-r px-10 text-center font-semibold">
                1
              </td>
              <td className="p-0">
                <input
                  type="text"
                  name=""
                  className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                  id=""
                />
              </td>
              <td className="p-0">
                <input
                  type="text"
                  name=""
                  className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                  id=""
                />
              </td>
              <td className="p-0">
                <input
                  type="text"
                  name=""
                  className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                  id=""
                />
              </td>
              <td className="p-0">
                <input
                  type="file"
                  name=""
                  className="border-primary-blue file:bg-primary-blue h-[54px] w-full cursor-pointer border-r py-3 px-3 outline-none file:rounded-2xl file:text-white"
                  id=""
                />
              </td>
              <td className="p-0">
                <input
                  type="text"
                  name=""
                  className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                  id=""
                />
              </td>
              <td className="p-0">
                <input
                  type="text"
                  name=""
                  className="border-primary-blue text-primary-blue m-0 h-[54px] w-full border-r py-3 px-3 outline-none"
                  id=""
                />
              </td>
              <td className="p-0">
                <input
                  type="file"
                  name=""
                  className="border-primary-blue file:bg-primary-blue m-0 w-full cursor-pointer py-3 px-3 outline-none file:rounded-2xl file:text-white"
                  id=""
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default NotRegisteredCompany;
