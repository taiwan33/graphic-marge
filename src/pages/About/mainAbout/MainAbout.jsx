import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAbout } from "../../../features/aboutSlice/aboutSlice";
import Images from "../../../media/images";

const MainAbout = () => {
  const about = useSelector((state) => state.about);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAbout());
  }, []);
  return (
    <>
      <>
        {/* main frontpage  */}
        <div className="relative mt-5 w-full">
          <div className="max-w space-y-10">
            {/* category */}
            <div className="xsm:top-[5rem]  overflow-scroll sticky max-w top-[4rem] z-10 flex  bg-white lg:top-[7.5rem]">
              <div className="font-Yatra flex-wrap items-center z-50 flex justify-center gap-2 rounded-lg px-2 py-4 sm:!gap-6 text-white">
                <Link to="/company-startup" className="about-button">
                  कर्यालय स्थापना परिचया
                </Link>
                <Link to="/company-goals" className="about-button">
                  लछ्य तथा उद्यश्यहरु
                </Link>
                <Link to="/manager-details" className="about-button">
                  प्रबन्द निर्देसको भनाइ
                </Link>
                <Link to="/employee-details" className="about-button">
                  कर्मचारिको बिबरन
                </Link>
                <Link to="/registration-certificate" className="about-button">
                  दर्ता प्रमन पत्र
                </Link>
              </div>
            </div>

            <div className="relative mt-24 text-center">
              <h1 className="title-style !font-Yatra">हाम्रो बारेमा</h1>
              <div className="mt-4">
                <img src={Images.title_border} alt="" className="mx-auto" />
              </div>
            </div>

            {/* flex cards  */}
            {about.data.map((item, i) => {
              return (
                <div
                  className="mx-auto max-w-4xl flex-row items-center space-y-5 md:flex md:space-y-5"
                  key={i}
                >
                  <div className="flex-1 px-5 text-center">
                    <h2 className="sub-title-style">{item.title}</h2>
                    <div className="bg-primary-blue mx-auto mt-1 h-1 w-[70%] rounded-full" />
                    <p className="text-primary-blue font-Laila mt-3 text-justify text-sm lg:!text-xl">
                      {item.description}
                    </p>
                    <div className="mt-4">
                      <Link
                        to="/company-startup"
                        className="card-button font-Berkshire"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                  <div className="mx-auto h-72 md:w-96">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full rounded-tl-3xl rounded-br-3xl object-cover"
                    />
                  </div>
                  ;
                </div>
              );
            })}

            <div className="w-padding mt-20 flex flex-col items-center justify-center">
              <div className="max-w-4xl">
                <div className="text-center">
                  <div className="">
                    <h1 className="sub-title-style">प्रबन्द निर्देसको भनाइ</h1>
                    <div className="bg-primary-blue mx-auto mt-1 h-1 w-[30%] rounded-full" />
                  </div>
                  <div className="gap- mt-20 grid grid-cols-1 place-items-start text-center md:grid-cols-2 md:gap-12 lg:gap-12">
                    <div className="group animation mb-12 flex h-[25rem] w-[18rem] transform cursor-pointer flex-col rounded-b-full bg-gray-50 shadow-xl hover:scale-105 md:mb-0 md:h-[30rem] md:w-[25rem]">
                      <div className="mx-auto mb-10 flex h-[75%] w-[100%] justify-center">
                        <img
                          alt=""
                          src={Images.user_img}
                          className="border-primary-blue h-auto w-[85%] rounded-tl-3xl rounded-br-[45px] border-2 object-cover shadow-lg"
                        />
                      </div>
                      <h1 className="text-primary-red font-Rakkas -mt-5 text-xl font-bold underline">
                        Rajan Ghimire
                      </h1>
                      <h1 className="text-primary-blue font-Acme font-bold">
                        Managing Director
                      </h1>
                    </div>
                    <div className="text-primary-blue font-Laila mt-3 text-justify text-sm leading-7 lg:!text-xl">
                      <p>
                        हजुरको व्यवसायको आवश्यकता अनुसारको सेवा पाउदिनकि भन्ने
                        चिन्ता अब नलिनुहोस, कानुनी खातासंग आबद्द भयसंगै हजुरको
                        एक दक्ष तथा अनुभबी Expert assign हुनुहुनेछ जसले हजुरलाई
                        सम्पर्क गरि प्रतक्ष्य रुपमा हजुरको आवश्यकता/समस्या बुझी
                        सोहि अनुरुप सल्लाह/सुझाब दिई चाहिने सेवाको बृस्तृत
                        जानकारी समेत दिनुहुनेछ | हजुरले आफ्नो अनुकुलता अनुसार
                        हाम्रो Expert संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा
                        गर्न सक्नुहुने छ हजुरको आवश्यकता/समस्या बुझी सोहि अनुरुप
                        सल्लाह/सुझाब दिई चाहिने सेवाको बृस्तृत जानकारी समेत
                        दिनुहुनेछ | हजुरले आफ्नो अनुकुलता अनुसार हाम्रो Expert
                        संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा गर्न
                        सक्नुहुने छ अनुसार हाम्रो Expert संग प्रतक्ष्य कुरा गरी
                        आफ्नो आवश्यकता पुरा गर्न सक्नुहुने छ |
                      </p>
                      <div className="mt-5">
                        <Link
                          to="/manager-details"
                          className="card-button font-Berkshire"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* teams  */}
            <div className="w-padding mt-20" id="employe">
              <div className="max-w">
                <div className="text-center">
                  <h1 className="sub-title-style">कर्मचारिको बिबरन</h1>
                  <div className="bg-primary-blue mx-auto mt-1 h-1 w-[20%] rounded-full" />
                </div>
                {/* teams  */}
                <div className="mt-20 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 2xl:!grid-cols-4">
                  {/* items */}
                  <div className="team-card group shadow-xl">
                    <div className="card-image-clip animation mx-auto h-40 w-40 overflow-hidden shadow-2xl">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                      />
                    </div>
                    {/* name  */}
                    <h1 className="text-primary-red font-Rakkas text-xl font-semibold underline">
                      Maria Ghimire
                    </h1>
                    <div className="">
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Post:
                        <span className="text-primary-blue font-normal">
                          {" "}
                          Manager
                        </span>
                      </p>
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Address:
                        <span className="text-primary-blue font-normal">
                          Bharatpur-11, Chitwan
                        </span>
                      </p>
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Contact:
                        <span className="text-primary-blue font-normal">
                          {" "}
                          98000000
                        </span>
                      </p>
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Email:
                        <span className="text-primary-blue font-normal">
                          abc@gmail.com
                        </span>
                      </p>
                    </div>
                    <div className="mt-5">
                      <Link
                        to="/staff-details"
                        className="card-button font-Berkshire"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  {/* items */}
                  <div className="team-card group shadow-xl">
                    <div className="card-image-clip animation mx-auto h-40 w-40 overflow-hidden shadow-2xl">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                      />
                    </div>
                    {/* name  */}
                    <h1 className="text-primary-red font-Rakkas text-xl font-semibold underline">
                      Maria Ghimire
                    </h1>
                    <div className="">
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Post:
                        <span className="text-primary-blue font-normal">
                          {" "}
                          Manager
                        </span>
                      </p>
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Address:
                        <span className="text-primary-blue font-normal">
                          Bharatpur-11, Chitwan
                        </span>
                      </p>
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Contact:
                        <span className="text-primary-blue font-normal">
                          {" "}
                          98000000
                        </span>
                      </p>
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Email:
                        <span className="text-primary-blue font-normal">
                          abc@gmail.com
                        </span>
                      </p>
                    </div>
                    <div className="mt-5">
                      <Link
                        to="/staff-details"
                        className="card-button font-Berkshire"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                  {/* items */}
                  <div className="team-card group shadow-xl">
                    <div className="card-image-clip animation mx-auto h-40 w-40 overflow-hidden shadow-2xl">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt=""
                      />
                    </div>
                    {/* name  */}
                    <h1 className="text-primary-red font-Rakkas text-xl font-semibold underline">
                      Maria Ghimire
                    </h1>
                    <div className="">
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Post:
                        <span className="text-primary-blue font-normal">
                          {" "}
                          Manager
                        </span>
                      </p>
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Address:
                        <span className="text-primary-blue font-normal">
                          Bharatpur-11, Chitwan
                        </span>
                      </p>
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Contact:
                        <span className="text-primary-blue font-normal">
                          {" "}
                          98000000
                        </span>
                      </p>
                      <p className="text-primary-red font-Acme mt-1 text-left font-bold">
                        Email:
                        <span className="text-primary-blue font-normal">
                          abc@gmail.com
                        </span>
                      </p>
                    </div>
                    <div className="mt-5">
                      <Link
                        to="/staff-details"
                        className="card-button font-Berkshire"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

                {/* view more  */}
                <div className="mt-10 flex justify-center">
                  <Link
                    to="/employee-details"
                    className="bg-primary-red font-Berkshire rounded-full py-1 px-2 text-white"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              {/* flex cards  */}
              <div className="w-padding mt-24">
                <div className="mx-auto mt-10 max-w-4xl flex-row space-y-5 md:flex md:space-y-0">
                  {/* text  */}
                  <div className="flex-1 px-5 text-center">
                    <h2 className="sub-title-style">दर्ता प्रमन पत्र</h2>
                    <div className="bg-primary-blue mx-auto mt-1 h-1 w-[40%] rounded-full" />
                    <p className="text-primary-blue font-Laila mt-3 text-justify text-sm lg:!text-lg">
                      हजुरको व्यवसायको आवश्यकता अनुसारको सेवा पाउदिनकि भन्ने
                      चिन्ता अब नलिनुहोस, कानुनी खातासंग आबद्द भयसंगै हजुरको एक
                      दक्ष तथा अनुभबी Expert assign हुनुहुनेछ जसले हजुरलाई
                      सम्पर्क गरि प्रतक्ष्य रुपमा हजुरको आवश्यकता/समस्या बुझी
                      सोहि अनुरुप सल्लाह/सुझाब दिई चाहिने सेवाको बृस्तृत जानकारी
                      समेत दिनुहुनेछ | हजुरले आफ्नो अनुकुलता अनुसार हाम्रो
                      Expert संग प्रतक्ष्य कुरा गरी आफ्नो आवश्यकता पुरा गर्न
                      सक्नुहुने छ |
                    </p>
                    {/* <div className="mt-4">
        <a href="#" className="card-button">More Details</a>
      </div> */}
                  </div>
                  {/* image  */}
                  <div className="mx-auto h-72 md:w-96">
                    <img
                      src="https://images.unsplash.com/photo-1646764578980-65dbce171e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80"
                      alt=""
                      className="h-full w-full rounded-tl-3xl rounded-br-3xl object-cover"
                    />
                  </div>
                </div>
                <div className="mt-10 grid place-content-center">
                  <a
                    href="./registration-certificate.html"
                    className="card-button font-Berkshire"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
export default MainAbout;
