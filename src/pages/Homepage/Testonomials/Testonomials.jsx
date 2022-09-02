import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Images from "../../../media/images";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonial } from "../../../features/testimonialsSlice/testimonialsSlice";

const Testimonials = () => {
  const testimonial = useSelector((state) => state.testimonial);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTestimonial());
  }, []);

  return (
    <div className="lg:w-[70vw] w-[90vw] mx-auto">
      <h1 className="title-style text-center">Testimonials</h1>
      <div className="mt-4 flex justify-center">
        <img src={Images.title_border} alt="" className="" />
      </div>
      {/* slide */}
      <div className="flex w-full px-4 justify-center items-center flex-wrap overflow-hidden mt-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper w-full"
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {" "}
          {testimonial.data?.map((value, index) => {
            console.log(value);
            return (
              <SwiperSlide key={index}>
                <div className="pb-10">
                  <div className="group animation mt-10 max-h-[26rem] transform cursor-pointer rounded-b-full bg-gray-50 pb-16 text-center shadow-xl hover:scale-105 md:mb-0">
                    <div className="mx-auto -mt-10 mb-3 h-40 w-40 justify-center sm:!mb-10">
                      <img
                        alt=""
                        src={value.image}
                        className="-mt-10 h-full w-full rounded-tl-3xl rounded-br-3xl object-cover shadow-lg"
                      />
                    </div>
                    <p className="mb-4 max-h-[120px] overflow-auto  mt-10 px-4">
                      <svg
                        data-icon="quote-left"
                        className="inline-block w-6 pr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                        />
                      </svg>
                      <span className="font-Aladin h-12 block break-words text-primary-blue text-xl">
                        {value.text}
                      </span>
                    </p>
                    <div className="">
                      <h5 className="font-Rakkas text-primary-red text-xl font-semibold">
                        {value.name}
                      </h5>
                      <div className="animation bg-primary-red mx-auto mb-2 mt-0.5 h-0.5 w-28 group-hover:w-64" />
                      <span className="font-Bree text-primary-blue text-lg font-medium">
                        {value.title}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
