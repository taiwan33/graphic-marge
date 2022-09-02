import Images from "../../media/images";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect } from "react";
import { fetchNews } from "../../features/news/NewsSlice";
import { fetchCategory } from "../../features/news/NewsSlice";
import { useDispatch, useSelector } from "react-redux";
import NepaliDate from "nepali-date-converter";

const News = () => {
  const { news, category } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
    dispatch(fetchCategory());
  }, [dispatch]);

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
    <div className="max-w -mt-4 w-full">
      <div className="animation font-Laila overflow-scroll mx-auto flex-shrink-0 sticky top-[3.8rem] z-30 mt-8  items-center gap-3 bg-white py-1  md:py-3 lg:top-[7.6rem] lg:justify-center">
        <div className="flex w-[90vw] lg:w-[70vw] mx-auto overflow-scroll gap-6">
          {category.map((items, index) => {
            return (
              <div key={index} className="news-button cursor-pointer">
                {items.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="">
        <div className="border-primary-red w-full border-b-2 md:mt-3" />
        {news.slice(0, 2).map((items, index) => {
          const apiDate = Date.parse(items.created_at);
          const nepaliDate = new NepaliDate(apiDate);
          return (
            <>
              <div key={index} className="mt-10 grid place-content-center">
                <Link
                  to={`${items.id}`}
                  // state={{
                  //   id: items.id,
                  // }}
                >
                  <div className="inline-block rounded-sm">
                    <h1 className="animation font-Poppins text-primary-blue hover:text-primary-red mx-auto mt max-w-4xl text-center text-2xl font-bold md:!leading-[75px] md:!text-[3rem]">
                      {items.title}
                    </h1>
                    <div className="md:mt-10 mt-4 pr-10">
                      <img
                        src={items.image}
                        alt=""
                        className="mx-auto h-auto w-screen rounded-md object-contain"
                      />
                    </div>
                    <p className="text-primary-blue line-clamp-2 font-Asar mt-5 text-base md:!text-2xl">
                      {items.description}
                    </p>
                    <div className="mt-4 flex gap-10">
                      {/* news wirter */}
                      <div className="flex items-center gap-1">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          className="h-8 w-8 flex-shrink-0 rounded-full"
                          alt=""
                        />
                        <p className="text-primary-blue text-sm font-semibold">
                          News author
                        </p>
                      </div>
                      {/* news author */}
                      <div className="flex items-center gap-1">
                        <img
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                          className="h-8 w-8 flex-shrink-0 rounded-full"
                          alt=""
                        />
                        <p className="text-primary-blue text-sm font-semibold">
                          News writer
                        </p>
                      </div>
                      {/* news date */}
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
                        <p className="text-primary-blue text-sm font-semibold">
                          {nepaliDate.toString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <p className="border-lightBorder mt-8 w-full border-b" />
              <p className="border-lightBorder mt-2 w-full border-b" />
            </>
          );
        })}
      </div>

      {/* ads*/}
      <div className="w-padding">
        <div className="mx-auto my-10 grid max-h-[120px] max-w-[1200px] place-content-center bg-red-500 text-2xl font-bold text-white">
          <img
            src={Images.largead}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="w-padding flex flex-col gap-10 lg:!flex-row">
        {/* news */}
        <div className="flex-1">
          <h1 className="font-Poppins mt-10 text-3xl font-bold text-[#2260bf] md:text-[45px]">
            {category[0]?.name}
          </h1>
          <div className="mt-10 grid max-w-[1100px] grid-cols-1 gap-8 md:grid-cols-2">
            {/* news mini section */}
            {news
              .filter((value) => value.category === 0)
              .map((items, index) => {
                return (
                  <div key={index} className="">
                    <a href="skip-ad.html">
                      <div className="flex items-center gap-6">
                        <img
                          src={items.image}
                          alt=""
                          className="news-item-img"
                        />
                        <div className="">
                          <p className="news-item-text">{items.title}</p>
                          <div className="mt-2 flex">
                            <span className="material-icons-outlined text-text-paragraph">
                              watch_later
                            </span>
                            <p className="text-text-paragraph">
                              ४० मिनेट अगाडि
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        {/* trending */}
        <div className="lg:w-1/3 lg:max-w-[400px]">
          <h1 className="font-Poppins mt-10 text-3xl font-bold text-[#2260bf] md:text-[45px]">
            ट्रेन्डिङ
          </h1>
          <p className="border-lightBorder mt-2 w-full border-b" />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:!grid-cols-1">
            {/* single trending item */}
            <a href="">
              <div className="trend-item">
                <p className="trending-text">
                  अस्थिर करनीतिमा स्वार्थ हाबी, समस्यामा करदाता
                </p>
                <img
                  src={Images.trending_img}
                  alt=""
                  className="h-20 w-20 rounded-md md:h-32 md:w-32"
                />
              </div>
            </a>
            {/* single trending item */}
            <a href="">
              <div className="trend-item">
                <p className="trending-text">
                  अस्थिर करनीतिमा स्वार्थ हाबी, समस्यामा करदाता अस्थिर करनीतिमा
                  स्वार्थ हाबी, समस्यामा करदाता
                </p>
                <img
                  src={Images.trending_img}
                  alt=""
                  className="h-20 w-20 rounded-md md:h-32 md:w-32"
                />
              </div>
            </a>
            {/* single trending item */}
            <a href="">
              <div className="trend-item">
                <p className="trending-text">
                  अस्थिर करनीतिमा स्वार्थ हाबी, समस्यामा करदाता अस्थिर करनीतिमा
                  स्वार्थ हाबी, समस्यामा करदाता
                </p>
                <img
                  src={Images.trending_img}
                  alt=""
                  className="h-20 w-20 rounded-md md:h-32 md:w-32"
                />
              </div>
            </a>
            {/* single trending item */}
            <a href="">
              <div className="trend-item">
                <p className="trending-text">
                  अस्थिर करनीतिमा स्वार्थ हाबी, समस्यामा करदाता
                </p>
                <img
                  src={Images.trending_img}
                  alt=""
                  className="h-20 w-20 rounded-md md:h-32 md:w-32"
                />
              </div>
            </a>
            {/* single trending item */}
            <a href="">
              <div className="trend-item">
                <p className="trending-text">
                  अस्थिर करनीतिमा स्वार्थ हाबी, समस्यामा करदाता
                </p>
                <img
                  src={Images.trending_img}
                  alt=""
                  className="h-20 w-20 rounded-md md:h-32 md:w-32"
                />
              </div>
            </a>
            {/* single trending item */}
            <a href="">
              <div className="trend-item">
                <p className="trending-text">
                  अस्थिर करनीतिमा स्वार्थ हाबी, समस्यामा करदाता
                </p>
                <img
                  src={Images.trending_img}
                  alt=""
                  className="h-20 w-20 rounded-md md:h-32 md:w-32"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* ads*/}
      <div className="w-padding">
        <div className="mx-auto my-10 grid max-h-[120px] max-w-[1200px] place-content-center bg-gray-400 text-2xl font-bold text-white">
          <img
            src={Images.largead}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* news section */}
      <div className="w-padding">
        <h1 className="font-Poppins mt-10 text-3xl font-bold text-[#2260bf] md:text-[45px]">
          विशेष
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-10 lg:!grid-cols-3">
          <div className="overflow-hidden">
            <a href="" className="overflow-hidden">
              <div className="relative h-full">
                <img
                  src={Images.jail}
                  className="h-full w-full object-cover"
                  alt=""
                />
                <h1 className="absolute bottom-0 left-2 mx-auto text-center text-2xl font-bold text-white">
                  निजामती कर्मचारीलाई ‘पर्यटन काज बिदा’ घोषणामै सीमित !
                </h1>
              </div>
            </a>
          </div>
          <div className="space-y-3">
            <div>
              <a href="skip-ad.html">
                <div className="hover:text-primary-red flex items-center gap-3">
                  <img
                    src={Images.girl}
                    alt=""
                    className="h-24 w-24 rounded-md"
                  />
                  <div className="hover:text-primary-red">
                    <p className="font-Poppins text-primary-blue hover:text-primary-red animation text-base font-bold md:text-xl">
                      बिइङ ह्युमनका सञ्चालकसहित चारविरुद्ध राजस्व छली
                    </p>
                    <div className="mt-2 flex">
                      <span className="material-icons-outlined text-text-paragraph">
                        watch_later
                      </span>
                      <p className="text-text-paragraph">४० मिनेट अगाडि</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="">
              <a href="skip-ad.html">
                <div className="hover:text-primary-blue flex items-center gap-3">
                  <img
                    src={Images.girl}
                    alt=""
                    className="h-24 w-24 rounded-md"
                  />
                  <div className="">
                    <p className="font-Poppins text-primary-blue hover:text-primary-red text-base font-bold md:text-xl">
                      बिइङ ह्युमनका सञ्चालकसहित चारविरुद्ध राजस्व छली
                    </p>
                    <div className="mt-2 flex">
                      <span className="material-icons-outlined text-text-paragraph">
                        watch_later
                      </span>
                      <p className="text-text-paragraph">४० मिनेट अगाडि</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="skip-ad.html">
                <div className="hover:text-primary-blue flex items-center gap-3">
                  <img
                    src={Images.girl}
                    alt=""
                    className="h-24 w-24 rounded-md"
                  />
                  <div className="">
                    <p className="font-Poppins text-primary-blue hover:text-primary-red text-base font-bold md:text-xl">
                      बिइङ ह्युमनका सञ्चालकसहित चारविरुद्ध राजस्व छली
                    </p>
                    <div className="mt-2 flex">
                      <span className="material-icons-outlined text-text-paragraph">
                        watch_later
                      </span>
                      <p className="text-text-paragraph">४० मिनेट अगाडि</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="skip-ad.html">
                <div className="hover:text-primary-blue flex items-center gap-3">
                  <img
                    src={Images.girl}
                    alt=""
                    className="h-24 w-24 rounded-md"
                  />
                  <div>
                    <p className="font-Poppins text-primary-blue hover:text-primary-red text-base font-bold md:text-xl">
                      जानकी मन्दिरभित्र प्रदेश प्रमुखको गाडीमा बनाइयो टिकटक
                    </p>
                    <div className="mt-2 flex">
                      <span className="material-icons-outlined text-text-paragraph">
                        watch_later
                      </span>
                      <p className="text-text-paragraph">४० मिनेट अगाडि</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <div className="">
              <img src={Images.sidead} alt="" className="h-[150px] w-[300px]" />
            </div>
            <div className="">
              <img src={Images.sidead} alt="" className="h-[150px] w-[300px]" />
            </div>
            <div className="">
              <img src={Images.sidead} alt="" className="h-[150px] w-[300px]" />
            </div>
          </div>
        </div>
      </div>
      {/* end of news section */}
      {/* news slide */}
      <div className="md:w-[75vw] w-screen mt-5 md:mt-16 mx-auto">
        <h1 className="font-Poppins mt-10 px-4 text-3xl font-bold text-[#2260bf] md:text-[45px]">
          सूचना-प्रविधि
        </h1>
        {/* slide */}
        <div className="flex flex-wrap px-5 overflow-hidden mt-10">
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
                slidesPerView: 4,
              },
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log("slide change")}
          >
            {" "}
            {data.map((items, index) => {
              return (
                <SwiperSlide key={index} className=" mx-auto">
                  <div key={index} className="item mx-auto">
                    <a href="" className="overflow-hidden">
                      <div className="relative h-[400px] overflow-clip w-full rounded-lg">
                        <img
                          className="h-full w-auto object-cover"
                          src={Images.news_plane}
                          alt=""
                        />
                        <div className="absolute bottom-0 h-1/3 w-full bg-black opacity-50 blur-lg filter" />
                        <h1 className="absolute bottom-3 left-0 w-full text-center text-xl font-bold text-white">
                          गलत परम्परा : पेशा र समुदाय विशेषका लागि छुट्टै
                          अस्पताल गलत
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
    </div>
  );
};

export default News;
