import React from "react";
import Images from "../../media/images";

const DateConverter = () => {
  return (
    <div className="date mt-10 md:mt-16 w-padding">
      <div className="text-center">
        <h1 className="title-style">Date Converter</h1>
        <div className="mt-4">
          <img src={Images.title_border} alt="" className="mx-auto" />
        </div>
      </div>
      <header className="max-w mb-20 mt-10 gap-4 md:mt-16 lg:flex">
        <div className="flex-1">
          {/* date converter here */}
          <div className="w-full">
            <iframe
              title="date"
              src="https://www.ashesh.com.np/linkdate-converter.php?h_color=21ADE2&b_color=CFE4B1&api=321125m019"
              frameBorder={0}
              scrolling="no"
              marginWidth={0}
              marginHeight={0}
              style={{
                border: "none",
                overflow: "hidden",
                width: "100%",
                height: 200,
              }}
              allowtransparency="true"
            />
            <br />
            <span style={{ color: "#6d6d6d", fontSize: 8, textAlign: "left" }}>
              Powered by ©
              <a
                href="https://www.ashesh.com.np/nepali-date-converter.php"
                title="Nepali date converter"
                target="_top"
                style={{ textDecoration: "none", color: "#6d6d6d" }}
              >
                nepali date converter
              </a>
            </span>
          </div>
          {/* ads */}
          <div className="mt-10 border bg-white shadow lg:px-0">
            <img
              className="h-full w-full object-cover"
              src="https://www.onlinekhabar.com/wp-content/uploads/2021/12/1230_100-Pixel-Bolero-Udemsil-Nepali.jpg"
              alt=""
              srcSet=""
            />
          </div>
          {/* ads end here */}
        </div>
        {/* calender ends here  */}
        {/* right side  */}
        <div className="xl:w-100 lg:w-80">
          {/* right side ends hete */}
          {/* side ads  */}
          <div className="">
            <img
              className="h-full w-full object-cover"
              src="https://www.onlinekhabar.com/wp-content/uploads/2022/04/VatikaReal_Pet300X200px_OK.gif"
              alt=""
              srcSet=""
            />
          </div>
          <div className="mt-10">
            <img
              className="h-full w-full object-cover"
              src="https://www.onlinekhabar.com/wp-content/uploads/2022/04/VatikaReal_Pet300X200px_OK.gif"
              alt=""
              srcSet=""
            />
          </div>
          {/* side ads end here  */}
        </div>
      </header>
    </div>
  );
};

export default DateConverter;
