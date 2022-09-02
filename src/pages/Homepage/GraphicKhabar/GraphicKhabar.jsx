import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Images from "../../../media/images";
import { fetchNews } from "../../../features/news/NewsSlice";

const GraphicKhabar = () => {
  const dispatch = useDispatch();
  const { news, errorMessage } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <>
      <div className="mb-20 px-3 md:px-10">
        <div className="max-w">
          <div className="text-center">
            <h1 className="title-style">Graphic Khabar</h1>
            <div className="mt-4">
              <img src={Images.title_border} alt="" className="mx-auto" />
            </div>
            {/* khabar  */}
            <div className="mt-10 w-full justify-between gap-6 space-y-4 2xl:flex">
              <div className="space-y-6">
                {/* news start  */}
                {news.slice(0, 3).map((value, index) => {
                  return (
                    <Link
                      key={index}
                      to="/news"
                      className="border-extralightBorde p-4 flex border"
                    >
                      {/* img  */}
                      {(index === 0 || index === 2) && (
                        <div className="hidden w-64 md:flex">
                          <img
                            src={value.image}
                            className="max-h-[300px] w-full object-contain object-center"
                            alt=""
                          />
                        </div>
                      )}
                      {/* news  */}
                      <div className="group ml-4 flex flex-1 flex-col justify-center gap-4 py-4">
                        <h2 className="font-Poppins text-primary-blue group-hover:text-primary-red animation text-justify text-base font-semibold md:!text-2xl">
                          {value.title}
                        </h2>
                        {/* img  */}
                        <div className="felx items-center justify-center">
                          <div className="flex justify-center md:hidden">
                            <img
                              src={value.image}
                              className="max-h-[300px] w-full object-cover object-center"
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="text-primary-red font-Asar group-hover:text-primary-blue text-justify">
                          {value.description}
                        </p>
                        {/* date and author  */}
                        <div className="mt-4 flex gap-2 sm:gap-10">
                          {/* news wirter */}
                          <div className="flex items-center gap-1">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                              className="h-8 w-8 flex-shrink-0 rounded-full"
                              alt=""
                            />
                            <p className="text-primary-blue text-xs font-semibold sm:text-sm">
                              {value.author}
                            </p>
                          </div>
                          {/* news author */}
                          <div className="flex items-center gap-1">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                              className="h-8 w-8 flex-shrink-0 rounded-full"
                              alt=""
                            />
                            <p className="text-primary-blue text-xs font-semibold sm:text-sm">
                              {value.writer}
                            </p>
                          </div>
                          {/* news date and author */}
                          <div className="flex items-center gap-1">
                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              role="img"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 1024 1024"
                            >
                              <path
                                fill="currentColor"
                                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                              />
                              <path
                                fill="currentColor"
                                d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
                              />
                            </svg>
                            <p className="text-primary-blue text-xs font-semibold sm:text-sm">
                              {value.date}
                            </p>
                            <img src={Images.new} className="ml-4 h-8" alt="" />
                          </div>
                        </div>
                      </div>
                      {/* img  */}
                      {index === 1 && (
                        <div className="hidden w-64 md:flex">
                          <img
                            src={value.image}
                            className="max-h-[300px] w-full object-contain object-center"
                            alt=""
                          />
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          {/* view more  */}
          <div className="font-Berkshire mt-5 flex justify-center">
            <Link
              to="/news"
              className="bg-primary-red rounded-full py-1 px-2 text-white"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphicKhabar;
