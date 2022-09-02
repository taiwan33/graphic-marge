import React from "react";
import Images from "../../media/images";

const GraphicCalender = () => {
  return (
    <div className="tab-content mx-3">
      <div id="graphic-calender">
        <h1 className="text-primary-red font-Acme mt-3 text-center text-xl font-bold">
          Graphic calendar
        </h1>
        <div className="flex gap-3">
          <div className="grid place-content-center">
            <div className="flex max-w-[800px] flex-col justify-center space-y-3">
              <p className="font-Bree text-primary-red text-lg font-bold">
                Page 1
              </p>
              <img src={Images.calender1} alt="" />
              <p className="font-Bree text-primary-red text-lg font-bold">
                Page 2
              </p>
              <img src={Images.calender2} alt="" />
              <p className="font-Bree text-primary-red text-lg font-bold">
                Page 3
              </p>
              <img src={Images.calender3} alt="" />
              <p className="font-Bree text-primary-red text-lg font-bold">
                Page 4
              </p>
              <img src={Images.calender4} alt="" />
              <p className="font-Bree text-primary-red text-lg font-bold">
                Page 5
              </p>
              <img src={Images.calender5} alt="" />
              <p className="font-Bree text-primary-red text-lg font-bold">
                Page 6
              </p>
              <img src={Images.calender6} alt="" />
              <p className="font-Bree text-primary-red text-lg font-bold">
                Page 7
              </p>
              <img src={Images.calender7} alt="" />
              <p className="font-Bree text-primary-red text-lg font-bold">
                Page 8
              </p>
              <img src={Images.calender8} alt="" />
            </div>
          </div>
          {/* notices */}
          <div className="hidden flex-shrink-0 flex-col items-center gap-3 lg:!flex">
            {/* notice */}
            <div className="mt-10 px-4 py-5 lg:mt-0 lg:w-80 lg:px-0 xl:w-[23rem]">
              <div className="bg-primary-blue font-Acme w-[105%] rounded-full p-1 text-center text-2xl font-semibold text-white">
                Notice
              </div>
              {/* notices  */}
              <div className="border-primary-blue ml-5 flex flex-col gap-y-3 overflow-auto rounded-b-3xl border-2 border-t-0">
                <div className="py-3">
                  <a href="./notice.html" className="">
                    <div className="flex">
                      <div className="text-primary-red border-primary-green grid w-32 place-content-center border-r-2 text-center">
                        <span>24</span>
                        <span>माघ</span>
                      </div>
                      <div className="flex flex-col pl-4 text-sm">
                        <span className="text-primary-blue font-medium">
                          मिति २०७८/१०/२५ र २०७८/१०/२७ गते हुने ट्रायल परिक्षामा
                          सहभागी हुने सेवाग्राहीको नामावली
                        </span>
                        <span className="text-primary-red mt-1 text-xs">
                          <i className="far fa-clock" />
                          <span> 1 दिन अगाडी</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="py-3">
                  <a href="./notice.html" className="">
                    <div className="flex">
                      <div className="text-primary-red border-primary-green grid w-32 place-content-center border-r-2 text-center">
                        <span>24</span>
                        <span>माघ</span>
                      </div>
                      <div className="flex flex-col pl-4 text-sm">
                        <span className="text-primary-blue font-medium">
                          मिति २०७८/१०/२५ र २०७८/१०/२७ गते हुने ट्रायल परिक्षामा
                          सहभागी हुने सेवाग्राहीको नामावली
                        </span>
                        <span className="text-primary-red mt-1 text-xs">
                          <i className="far fa-clock" />
                          <span> 1 दिन अगाडी</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="py-3">
                  <a href="./notice.html" className="">
                    <div className="flex">
                      <div className="text-primary-red border-primary-green grid w-32 place-content-center border-r-2 text-center">
                        <span>24</span>
                        <span>माघ</span>
                      </div>
                      <div className="flex flex-col pl-4 text-sm">
                        <span className="text-primary-blue font-medium">
                          मिति २०७८/१०/२५ र २०७८/१०/२७ गते हुने ट्रायल परिक्षामा
                          सहभागी हुने सेवाग्राहीको नामावली
                        </span>
                        <span className="text-primary-red mt-1 text-xs">
                          <i className="far fa-clock" />
                          <span> 1 दिन अगाडी</span>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* view more  */}
              <div className="mt-5 flex justify-center">
                <a
                  href="./notice.html"
                  className="bg-primary-red font-Berkshire rounded-full py-1 px-2 text-white"
                >
                  View More
                </a>
              </div>
            </div>
            {/* date converter */}
            <div className="w-full">
              <div className="bg-primary-blue font-Acme w-[105%] rounded-full p-1 text-center text-2xl font-semibold text-white">
                Date Converter
              </div>
              <iframe
                className="ml-[1.5rem] w-[95%]"
                src="https://www.ashesh.com.np/linkdate-converter.php?h_color=21ADE2&b_color=CFE4B1&api=321125m019"
                frameBorder={0}
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                style={{
                  border: "none",
                  overflow: "hidden",
                  height: 200,
                }}
                allowtransparency="true"
              />
            </div>
            {/* uniconde to preeti translator */}
            <div className="w-full">
              <div className="bg-primary-blue font-Acme w-[105%] rounded-full p-1 text-center text-2xl font-semibold text-white">
                Unicode to preeti
              </div>
              <iframe
                width="100%"
                height={400}
                frameBorder={0}
                border="no"
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                allowtransparency="true"
                src="https://www.ashesh.com.np/linknepali-unicode3.php?api=232162m565"
              ></iframe>
            </div>
            {/* ad section */}
            <div className="">
              <img src="https://picsum.photos/400/300" />
            </div>
            <div className="">
              <img src="https://picsum.photos/400/300" />
            </div>
            <div className="">
              <img src="https://picsum.photos/400/300" />
            </div>
            <div className="">
              <img src="https://picsum.photos/400/300" />
            </div>
            <div className="">
              <img src="https://picsum.photos/400/300" />
            </div>
            <div className="">
              <img src="https://picsum.photos/400/300" />
            </div>
            <div className="">
              <img src="https://picsum.photos/400/300" />
            </div>
          </div>
        </div>
      </div>
      {/* hamro patro calender */}
    </div>
  );
};

export default GraphicCalender;
