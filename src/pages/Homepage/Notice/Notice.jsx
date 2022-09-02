import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNotice } from "../../../features/noticeSlice/NoticeSlice";
import Images from "../../../media/images";
import moment from "moment";
import NepaliDate from "nepali-date-converter";

const Notice = () => {
  const notice = useSelector((state) => state.notice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotice());
  }, [dispatch]);
  const months = [
    "वैशाख",
    "ज्येष्ठ",
    "आषाढ़",
    "श्रावण",
    "भाद्र",
    "आश्विन",
    "कार्तिक",
    "मार्गशीर्ष",
    "पौष",
    "माघ",
    "फाल्गुण",
    "चैत्र",
  ];
  return (
    <>
      <div className="xl:w-100 flex-shrink-0 px-4 lg:mt-0 lg:w-80 lg:px-0">
        <div className="bg-primary-blue font-Rakkas w-[105%] rounded-full p-1 text-center text-3xl font-semibold text-white">
          Notice
        </div>
        {/* notices  */}
        <div className="border-primary-blue font-Laila ml-5 flex items-start flex-col gap-y-3 overflow-auto rounded-b-3xl border-2 border-t-0">
          {notice.data.slice(0, 3).map((items, index) => {
            const dateFromApi = Date.parse(items.created_at);
            const month = new NepaliDate(dateFromApi).getMonth();
            const nepaliMonth = months[month];
            const day = new NepaliDate(dateFromApi).getDate();
            return (
              <div key={index} className="mt-4">
                <Link to="/notices" className="">
                  <div className="flex justify-start items-center">
                    <div className="text-primary-red flex-shrink-0 border-primary-green grid w-10 place-content-center border-r-2 text-center">
                      <span>{day}</span>
                      <span>{nepaliMonth}</span>
                    </div>
                    <div className="flex flex-col pl-4 text-sm">
                      <span className="text-primary-blue font-semibold">
                        {items.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-primary-red mt-1 text-xs">
                          <i className="far fa-clock" />
                          <span> {moment(items.created_at).fromNow()}</span>
                        </span>
                        <img src={Images.new} className="h-8" alt="" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {/* view more  */}
        <div className="font-Berkshire mt-5 flex justify-center">
          <Link
            to="/notices"
            className="bg-primary-red rounded-full py-1 px-2 text-white"
          >
            View More
          </Link>
        </div>
      </div>
    </>
  );
};

export default Notice;
