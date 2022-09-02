import React, { useEffect } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarousel } from "../../../features/carouselSlice/CarouselSlice";

const Carousel = () => {
  const carousel = useSelector((state) => state.carousel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarousel());
  }, []);
  return (
    <Slider previousButton={null} nextButton={null}>
      {carousel.data?.map((item, index) => {
        return (
          <div key={index}>
            <img
              alt=""
              className="sm:max-h-max max-h-[400px] w-full object-cover"
              src={item.image}
            />
          </div>
        );
      })}
    </Slider>
  );
};

export default Carousel;
