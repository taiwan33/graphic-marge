import React from "react";
import Images from "../../../media/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const data = [
    {
      name: "Tony Stark",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      possition: "Iron Man",
    },
    {
      name: "Tony Stark",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      possition: "Iron Man",
    },
    {
      name: "Tony Stark",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      possition: "Iron Man",
    },
    {
      name: "Tony Stark",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      possition: "Iron Man",
    },
    {
      name: "Tony Stark",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      possition: "Iron Man",
    },
    {
      name: "Tony Stark",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      possition: "Iron Man",
    },
    {
      name: "Tony Stark",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
      possition: "Iron Man",
    },
  ];

  return (
    <div className="w-[80vw] md:w-padding">
      <h1 className="title-style text-center">Testimonials</h1>
      <div className="mt-4 flex justify-center">
        <img src={Images.title_border} alt="" className="" />
      </div>
      {/* slide */}
      <div className="flex flex-wrap overflow-hidden mt-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {" "}
          {data.map((value, index) => {
            return (
              <SwiperSlide key={index}>
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
                        गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै अस्पताल
                        गलत
                      </h1>
                    </div>
                  </a>
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
