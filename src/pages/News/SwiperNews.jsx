import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Images from "../../media/images";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";

const SwiperNews = () => {
  return (
    <div className="home-demo mt-10">
      <div className="mt-16">
        <h1 className="font-Poppins mt-10 text-3xl font-bold text-[#2260bf] md:text-[45px]">
          सूचना-प्रविधि
        </h1>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="item">
              <a href="" className="overflow-hidden">
                <div className=" relative h-[400px] w-full rounded-lg">
                  <img
                    className="h-[400px] w-auto object-cover"
                    src={Images.news_plane}
                    alt=""
                  />
                  <div className="absolute bottom-0 h-1/3 w-full bg-black opacity-50 blur-lg filter" />
                  <h1 className="absolute bottom-3 left-0 w-full text-center text-xl font-bold text-white">
                    गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै अस्पताल गलत
                  </h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <a href="" className="overflow-hidden">
                <div className=" relative h-[400px] w-full rounded-lg">
                  <img
                    className="h-[400px] w-auto object-cover"
                    src={Images.news_plane}
                    alt=""
                  />
                  <div className="absolute bottom-0 h-1/3 w-full bg-black opacity-50 blur-lg filter" />
                  <h1 className="absolute bottom-3 left-0 w-full text-center text-xl font-bold text-white">
                    गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै अस्पताल गलत
                  </h1>
                </div>
              </a>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item">
              <a href="" className="overflow-hidden">
                <div className=" relative h-[400px] w-full rounded-lg">
                  <img
                    className="h-[400px] w-auto object-cover"
                    src={Images.news_plane}
                    alt=""
                  />
                  <div className="absolute bottom-0 h-1/3 w-full bg-black opacity-50 blur-lg filter" />
                  <h1 className="absolute bottom-3 left-0 w-full text-center text-xl font-bold text-white">
                    गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै अस्पताल गलत
                  </h1>
                </div>
              </a>
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="item">
              <a href="" className="overflow-hidden">
                <div className=" relative h-[400px] w-full rounded-lg">
                  <img
                    className="h-[400px] w-auto object-cover"
                    src={Images.news_plane}
                    alt=""
                  />
                  <div className="absolute bottom-0 h-1/3 w-full bg-black opacity-50 blur-lg filter" />
                  <h1 className="absolute bottom-3 left-0 w-full text-center text-xl font-bold text-white">
                    गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै अस्पताल गलत
                  </h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              {/* single item */}
              <a href="" className="overflow-hidden">
                <div className=" relative h-[400px] w-full rounded-lg">
                  <img className="h-[400px]" src={Images.news_plane} alt="" />
                  <div className="absolute bottom-0 h-1/3 w-full bg-black opacity-50 blur-lg filter" />
                  <h1 className="absolute bottom-3 left-0 w-full text-center text-xl font-bold text-white">
                    गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै अस्पताल गलत
                  </h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              {/* single item */}
              <a href="" className="overflow-hidden">
                <div className=" relative h-[400px] w-full rounded-lg">
                  <img className="h-[400px]" src={Images.news_plane} alt="" />
                  <div className="absolute bottom-0 h-1/3 w-full bg-black opacity-50 blur-lg filter" />
                  <h1 className="absolute bottom-3 left-0 w-full text-center text-xl font-bold text-white">
                    गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै अस्पताल गलत
                  </h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              {/* single item */}
              <a href="" className="overflow-hidden">
                <div className=" relative h-[400px] w-full rounded-lg">
                  <img className="h-[400px]" src={Images.news_plane} alt="" />
                  <div className="absolute bottom-0 h-1/3 w-full bg-black opacity-50 blur-lg filter" />
                  <h1 className="absolute bottom-3 left-0 w-full text-center text-xl font-bold text-white">
                    गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै अस्पताल गलत
                  </h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              {/* single item */}
              <a href="" className="overflow-hidden">
                <div className=" relative h-[400px] w-full rounded-lg">
                  <img className="h-[400px]" src={Images.news_plane} alt="" />
                  <div className="absolute bottom-0 h-1/3 w-full bg-black opacity-50 blur-lg filter" />
                  <h1 className="absolute bottom-3 left-0 w-full text-center text-xl font-bold text-white">
                    गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै अस्पताल गलत
                  </h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              {/* single item */}
              <a href="" className="overflow-hidden">
                <div className=" relative h-[400px] w-full rounded-lg">
                  <img className="h-[400px]" src={Images.news_plane} alt="" />
                  <div className="absolute bottom-0 h-1/3 w-full bg-black opacity-50 blur-lg filter" />
                  <h1 className="absolute bottom-3 left-0 w-full text-center text-xl font-bold text-white">
                    गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै अस्पताल गलत
                  </h1>
                </div>
              </a>
            </div>
          </SwiperSlide>
          {/* slide */}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperNews;
